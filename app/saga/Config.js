import { call, put } from 'redux-saga/effects';
import ConfigActions from '../redux/ConfigRedux';
import { getError } from '../services/Utils';

export function* getConfig(api) {
  const response = yield call(api.config);
  if (response?.data?.status === 200) {
    yield put(ConfigActions.configSuccess(response?.data || []));
  } else {
    const error = yield call(getError, response);
    yield put(ConfigActions.configFailure(error));
  }
}
