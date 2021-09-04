import { combineReducers } from "redux";
import { createAction, handleAction, handleActions } from "redux-actions";
import { takeLatest, call, put } from 'redux-saga/effects';
import * as testAPI from "./testApi";

const INCREASE = 'INCREASE';
const FETCH_LIST = 'FETCH_LIST';
const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';

export const increase = createAction(INCREASE);
export const fetchList = createAction(FETCH_LIST);

function* fetchSaga() {
  try {
    const response = yield call(testAPI.fetchList);
    yield put({
      type: FETCH_LIST_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    yield put({
      type: FETCH_LIST_FAILURE,
      payload: error
    })
  }
}

export function* reduxActionsSaga() {
  yield takeLatest(FETCH_LIST, fetchSaga);
}

const initialState = {
  count: 1,
  haha: 100
};

export const reducerA = handleAction(INCREASE, (state, action) => {
  return {
    ...state,
    count: state.count + action.payload
  }
}, initialState);

export const reducerB = handleAction(FETCH_LIST_SUCCESS, (state, action) => {
  return {
    ...state,
    count: state.count + action.payload
  }
}, initialState);

// const reducer = handleActions(
//   {
//     INCREASE: (state, action) => ({
//       ...state,
//       count: state.count + action.payload
//     })
//   },
//   initialState
// )

// const reducer = function(state = initialState, action) {
//   switch(action.type) {
//     case INCREASE: 
//       return {
//         ...state,
//         count: state.count + action.payload
//       }
//     case FETCH_LIST_SUCCESS:
//       return {
//         ...state,
//         count: state.count + action.payload
//       }
//     default:
//       return state
//   }
// }

export default combineReducers({
  reducerA,
  reducerB
});