import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { homeReducer } from './HomeRedux';
import { historyReducer } from './HistoryRedux';
import { authReducer } from './AuthRedux';
import { cartReducer } from './CartRedux';
import { updateAppReducer } from './UpdateAppRedux';

const resettable = resettableReducer('LOGOUT');

export default combineReducers({
  home: homeReducer,
  history: historyReducer,
  auth: resettable(authReducer),
  cart: resettable(cartReducer),
  appUpdate: resettable(updateAppReducer),
});
