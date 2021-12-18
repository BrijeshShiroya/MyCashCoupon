import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  historyRequest: [],
  historySuccess: ['history'],
  historyFailure: ['error'],
});

export const HistoryTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  historyList: [],
  fetching: false,
  error: null,
});

/* ------------- Selectors ------------- */
export const HistorySelectors = {
  getHistoryData: state => state?.historyList,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state => state.merge({ fetching: true });

// successful api lookup
export const successHistory = (state, action) => {
  const { history } = action;
  return state.merge({
    fetching: false,
    error: false,
    historyList: history,
  });
};

// Something went wrong somewhere.
export const failureHistory = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, historyList: [] });
};

/* ------------- Hookup Reducers To Types ------------- */

export const historyReducer = createReducer(INITIAL_STATE, {
  [Types.HISTORY_REQUEST]: request,
  [Types.HISTORY_SUCCESS]: successHistory,
  [Types.HISTORY_FAILURE]: failureHistory,
});
