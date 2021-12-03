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
    takeLatest(HomeTypes.HOME_BANNER_REQUEST, getBannerData, api),
    takeLatest(HomeTypes.HOME_BANNER_SUCCESS, getConfigData, api),
    takeLatest(HomeTypes.HOME_BANNER_SUCCESS, getBrandData, api),
    takeLatest(HomeTypes.HOME_BANNER_SUCCESS, getCategoriesData, api),
    takeLatest(HomeTypes.BRAND_REQUEST, getBrandData, api),
    takeLatest(HomeTypes.CATEGORY_REQUEST, getCategoriesData, api),
    takeLatest(HomeTypes.HOME_FILTERED_REQUEST, getProductsByFilters, api),
    takeLatest(HomeTypes.HOME_BANNER_SUCCESS, getExclusiveProductData, api),
    takeLatest(HomeTypes.HOME_BANNER_SUCCESS, getHomeCategories, api),
    takeLatest(ProductTypes.PRODUCT_REQUEST, getProductList, api),
    takeLatest(
      ProductTypes.PRODUCT_FILTER_REQUEST,
      getFilteredProductList,
      api,
    ),
    takeLatest(ProductTypes.PRODUCT_DETAIL_REQUEST, getProductDetails, api),
    takeLatest(HomeTypes.HOME_BRAND_PRODUCT_REQUEST, getProductsByBrand, api),
    takeLatest(
      HomeTypes.HOME_CATEGORY_PRODUCT_REQUEST,
      getProductsByCategory,
      api,
    ),
    takeLatest(AuthTypes.AUTH_REQUEST, login, api),
    takeLatest(AuthTypes.REGISTER_REQUEST, register, api),
    takeLatest(AuthTypes.AUTH_SUCCESS, getCart, api),
    takeLatest(CartTypes.CART_LIST_REQUEST, getCart, api),
    takeLatest(AuthTypes.AUTH_SUCCESS, getOrders, api),
    takeLatest(CartTypes.CART_REQUEST, addCart, api),
    takeLatest(CartTypes.CART_DELETE_REQUEST, deleteCart, api),
    takeLatest(CartTypes.CART_DELETE_SUCCESS, getCart, api),
    takeLatest(CartTypes.CART_SUCCESS, getCart, api),
    takeLatest(CartTypes.COUPON_REQUEST, applyCoupon, api),
    takeLatest(AuthTypes.ORDER_REQUEST, getOrders, api),
    takeLatest('LOGOUT', getCart, api),
  ]);
}
