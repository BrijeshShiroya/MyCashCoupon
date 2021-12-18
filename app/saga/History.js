import { call, put, select } from 'redux-saga/effects';
import HistoryActions from '../redux/HistoryRedux';
import { getError } from '../services/Utils';

export function* getHistoryList(api) {
  const { user = {} } = yield select(state => state.auth);
  const response = yield call(api.history, { user_id: user?.id });
  if (response?.data?.status === 200) {
    yield put(HistoryActions.historySuccess(response?.data?.data || []));
  } else {
    const error = yield call(getError, response);
    yield put(HistoryActions.historyFailure(error));
  }
}
