import { call, put } from 'redux-saga/effects';
import ProductActions from '../redux/ProductRedux';
import { getError } from '../services/Utils';

export function* getProductList(api, action) {
  const response = yield call(api.productlist);
  if (response?.data?.status === 200) {
    yield put(ProductActions.productSuccess(response?.data?.data || []));
  } else {
    const error = yield call(getError, response);
    yield put(ProductActions.productFailure(error));
  }
}

export function* getProductDetails(api, action) {
  const response = yield call(api.productDetails, { id: action.id });
  if (response?.data?.status === 200) {
    yield put(ProductActions.productDetailSuccess(response?.data || []));
  } else {
    const error = yield call(getError, response);
    yield put(ProductActions.productFailure(error));
  }
}

export function* getFilteredProductList(api, action) {
  const response = yield call(api.productFilter, action?.filterData);
  if (response?.data?.status === 200) {
    yield put(ProductActions.productSuccess(response?.data?.data || []));
  } else {
    const error = yield call(getError, response);
    yield put(ProductActions.productFailure(error));
  }
}
