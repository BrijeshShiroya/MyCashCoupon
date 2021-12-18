import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  configRequest: [],
  configSuccess: ['data'],
  configFailure: ['error'],
});

export const ConfigTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  configData: null,
});

/* ------------- Selectors ------------- */
export const ConfigSelectors = {
  getConfigData: state => state?.configData,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state =>
  state.merge({ fetching: true, error: null, configData: null });

// successful api lookup
export const success = (state, action) => {
  const { data } = action;
  return state.merge({
    fetching: false,
    error: false,
    configData: data,
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error: error?.trim() });
};

/* ------------- Hookup Reducers To Types ------------- */

export const configReducer = createReducer(INITIAL_STATE, {
  [Types.CONFIG_REQUEST]: request,
  [Types.CONFIG_SUCCESS]: success,
  [Types.CONFIG_FAILURE]: failure,
});
