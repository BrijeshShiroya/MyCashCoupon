import { all, takeLatest } from 'redux-saga/effects';
import { HomeTypes } from '../redux/HomeRedux';
import { ProductTypes } from '../redux/ProductRedux';
import { AuthTypes } from '../redux/AuthRedux';
import { CartTypes } from '../redux/CartRedux';

import API from '../services/Api';
import {
  getBannerData,
  getConfigData,
  getBrandData,
  getExclusiveProductData,
  getHomeCategories,
  getCategoriesData,
  getProductsByBrand,
  getProductsByCategory,
  getProductsByFilters,
} from './Home';
import {
  getProductList,
  getProductDetails,
  getFilteredProductList,
} from './Product';
import { login, register, getOrders } from './Auth';
import { addCart, getCart, deleteCart, applyCoupon } from './Cart';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.home();

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, login, api),
    takeLatest(AuthTypes.REGISTER_REQUEST, register, api),
  ]);
}
