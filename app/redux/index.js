import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { homeReducer } from './HomeRedux';
import { historyReducer } from './HistoryRedux';
import { authReducer } from './AuthRedux';
import { cartReducer } from './CartRedux';
import { configReducer } from './ConfigRedux';
import { updateAppReducer } from './UpdateAppRedux';

const resettable = resettableReducer('LOGOUT');

export default combineReducers({
  config: configReducer,
  home: resettable(homeReducer),
  history: resettable(historyReducer),
  auth: resettable(authReducer),
  cart: resettable(cartReducer),
  appUpdate: updateAppReducer,
});
