import { call, put, select } from 'redux-saga/effects';
import AuthActions from '../redux/AuthRedux';
import { Alert, Platform } from 'react-native';
import { getError } from '../services/Utils';
import strings from '../constants/Strings';

export function* login(api, action) {
  const device_token = ''; //getting device token
  const response = yield call(api.login, {
    email: action?.email,
    password: action?.password,
    device_type: Platform.OS,
    device_token,
  });
  if (response?.data?.status === 200 && !response?.data?.error) {
    yield put(
      AuthActions.authSuccess({ ...response?.data?.data?.[0] } || null),
    );
  } else {
    const error = yield call(getError, response?.data);
    yield put(AuthActions.authFailure(error));
  }
}

export function* register(api, action) {
  const device_token = ''; //getting device token
  const response = yield call(api.register, {
    email: action?.email,
    password: action?.password,
    first_name: action?.firstname,
    last_name: action?.lastname,
    phone: action?.mobile,
    device_token
  });
  if (response?.data?.status === 200 && !response?.data?.error) {
    yield put(
      AuthActions.authSuccess({ ...response?.data?.data?.[0] } || null),
    );
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(strings.myCashCoupon, error?.trim());
    yield put(AuthActions.authFailure(error));
  }
}

export function* getOrders(api, action) {
  const { user = {} } = yield select(state => state.auth);
  const response = yield call(api.myorders, {
    user_id: user?.id || '',
  });
  if (response?.data?.status === 200 && !response?.data?.error) {
    yield put(AuthActions.orderSuccess(response?.data?.data || []));
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(strings.myCashCoupon, error?.trim());
    yield put(AuthActions.authFailure(error));
  }
}
