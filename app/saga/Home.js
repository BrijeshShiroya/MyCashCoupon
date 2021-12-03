import { Platform } from 'react-native';
import { call, put } from 'redux-saga/effects';
import HomeActions from '../redux/HomeRedux';
import UpdateAppActions from '../redux/UpdateAppRedux';
import { getError } from '../services/Utils';
import DeviceInfo from 'react-native-device-info';

export function* getBannerData(api, action) {
  const response = yield call(api.bannerData);
  if (response?.data?.status === 200) {
    yield put(HomeActions.homeBannerSuccess(response?.data?.data || []));
  } else {
    const error = yield call(getError, response);
    yield put(HomeActions.homeBannerFailure(error));
  }
}

function* showAppUpdate(configData) {
  let showAppUpdateModal = false;
  if (Platform.OS === 'ios') {
    showAppUpdateModal = configData?.ios_optional === '0' ? true : false;
  } else {
    showAppUpdateModal = configData?.android_optional === '0' ? true : false;
  }
  if (showAppUpdateModal) {
    const version = DeviceInfo.getReadableVersion();
    showAppUpdateModal =
      Platform.OS === 'ios'
        ? version !== configData?.ios_version
        : version !== configData?.android_version;
  }
  yield put(
    showAppUpdateModal
      ? UpdateAppActions.showModal()
      : UpdateAppActions.hideModal(),
  );
}

export function* getConfigData(api, action) {
  const response = yield call(api.marquee);
  if (response?.data?.status === 200) {
    yield call(showAppUpdate, response?.data);
    yield put(HomeActions.homeConfigSuccess(response?.data || {}));
  } else {
    const error = yield call(getError, response);
    yield put(HomeActions.homeBannerFailure(error));
  }
}

export function* getBrandData(api, action) {
  const response = yield call(api.brands, { type: action?.brandType });
  if (response?.data?.status === 200) {
    yield put(HomeActions.brandSuccess(response?.data?.data || []));
  } else {
    const error = yield call(getError, response);
    yield put(HomeActions.homeBannerFailure(error));
  }
}
export function* getCategoriesData(api, action) {
  const response = yield call(api.categories);
  if (response?.data?.status === 200) {
    yield put(HomeActions.categorySuccess(response?.data?.data || []));
  } else {
    const error = yield call(getError, response);
    yield put(HomeActions.homeBannerFailure(error));
  }
}

export function* getHomeCategories(api, action) {
  const response = yield call(api.homeCategories);
  if (response?.data?.status === 200) {
    yield put(HomeActions.homeCategoriesSuccess(response?.data?.data || []));
  } else {
    const error = yield call(getError, response);
    yield put(HomeActions.homeBannerFailure(error));
  }
}

export function* getExclusiveProductData(api, action) {
  const response = yield call(api.exlusiveProduct);
  if (response?.data?.status === 200) {
    yield put(
      HomeActions.homeExclusiveProductSuccess(response?.data?.data || []),
    );
  } else {
    const error = yield call(getError, response);
    yield put(HomeActions.homeBannerFailure(error));
  }
}
export function* getProductsByBrand(api, action) {
  const response = yield call(api.getProductsByBrandId, { id: action?.id });
  if (response?.data?.status === 200) {
    yield put(
      HomeActions.homeBrandCategoryProductSuccess(response?.data?.data || []),
    );
  } else {
    const error = yield call(getError, response);
    yield put(HomeActions.homeBannerFailure(error));
  }
}
export function* getProductsByCategory(api, action) {
  const response = yield call(api.getProductsByCategoryId, { id: action?.id });
  if (response?.data?.status === 200) {
    yield put(
      HomeActions.homeBrandCategoryProductSuccess(response?.data?.data || []),
    );
  } else {
    const error = yield call(getError, response);
    yield put(HomeActions.homeBannerFailure(error));
  }
}

export function* getProductsByFilters(api, action) {
  const response = yield call(api.productFilter, action?.filterData);
  if (response?.data?.status === 200) {
    yield put(
      HomeActions.homeBrandCategoryProductSuccess(response?.data?.data || []),
    );
  } else {
    const error = yield call(getError, response);
    yield put(HomeActions.homeBannerFailure(error));
  }
}
