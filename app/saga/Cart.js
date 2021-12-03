import Toast from 'react-native-toast-message';
import { call, put, select } from 'redux-saga/effects';
import CartActions from '../redux/CartRedux';
import { getDeviceId, getError, messages } from '../services/Utils';

export function* addCart(api, action) {
  const device_id = yield getDeviceId();
  const { user = {} } = yield select(state => state.auth);
  const response = yield call(api.addToCart, {
    product_id: action?.cartData?.productId,
    quantity: action?.cartData?.quantity,
    device_id,
    user_id: user?.id || '',
  });
  if (
    (response?.data?.status === 200 &&
      !response?.data?.error &&
      response?.data?.messages === messages.productAdded) ||
    response?.data?.messages === messages.productUpdated
  ) {
    yield put(CartActions.cartSuccess(response?.data?.messages));
  } else {
    const error = yield call(getError, response?.data);
    yield put(CartActions.cartFailure(error));
  }
}

export function* getCart(api, action) {
  const device_id = yield getDeviceId();
  const { user = {} } = yield select(state => state.auth);
  const response = yield call(api.cart, {
    device_id,
    user_id: user?.id || '',
  });
  if (
    response?.data?.status === 200 &&
    !response?.data?.error &&
    response?.data?.cart?.length > 0
  ) {
    yield put(CartActions.cartListSuccess(response?.data));
  } else {
    const error = yield call(getError, response?.data);
    console.log({ error });
    if (error === messages.noDataFound) {
      yield put(CartActions.cartListSuccess([]));
    } else {
      yield put(CartActions.cartFailure(error));
    }
  }
}

export function* deleteCart(api, action) {
  const response = yield call(api.cartDelete, {
    id: action?.id,
  });
  if (response?.data?.status === 200 && !response?.data?.error) {
    yield put(CartActions.cartDeleteSuccess(true));
  } else {
    const error = yield call(getError, response?.data);
    yield put(CartActions.cartFailure(error));
  }
}

export function* applyCoupon(api, action) {
  const device_id = yield getDeviceId();
  const { user = {} } = yield select(state => state.auth);
  const response = yield call(api.addCoupon, {
    device_id,
    user_id: user?.id || '',
    coupon_code: action?.coupon || '',
  });
  if (
    response?.data?.status === 200 &&
    !response?.data?.error &&
    response?.data?.cart?.length > 0 &&
    response?.data?.messages === 'Success'
  ) {
    yield put(CartActions.cartListSuccess(response?.data));
  } else {
    const error = yield call(getError, response?.data);
    if (error === messages.noDataFound) {
      yield put(CartActions.cartListSuccess([]));
    } else {
      Toast.show({
        type: 'info',
        position: 'bottom',
        text2: error,
      });
      yield put(CartActions.cartFailure(error));
    }
  }
}
