import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from '../redux/AuthRedux';
import { ConfigTypes } from '../redux/ConfigRedux';
import { HistoryTypes } from '../redux/HistoryRedux';
import API from '../services/Api';
import { login, register } from './Auth';
import { getConfig } from './Config';
import { getHistoryList } from './History';


// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.home();

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, login, api),
    takeLatest(AuthTypes.REGISTER_REQUEST, register, api),
    takeLatest(HistoryTypes.HISTORY_REQUEST, getHistoryList, api),
    takeLatest(ConfigTypes.CONFIG_REQUEST, getConfig, api),
  ]);
}
