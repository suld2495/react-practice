import { createAction, createAsyncAction } from "typesafe-actions";
import { takeLatest, call, put } from 'redux-saga/effects';
import * as testAPI from "./testApi";

const INCREASE = 'INCREASE'; // 타입은 모두 동일하게 작성
const DECREASE = 'DECREASE'; // 타입은 모두 동일하게 작성
const FETCH_LIST = 'FETCH_LIST';
const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';


export const increase = createAction(INCREASE)<string>();
// export const decrease = createAction(DECREASE, payload => payload)();

type Payload = {

}

type Response = {
  data: number
}

export const fetchListAsync = createAsyncAction(
  FETCH_LIST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE
)<Payload, number, Error>();

function* fetchSaga() {
  try {
    const response: Response = yield call(testAPI.fetchList);
    yield put(fetchListAsync.success(response.data));
  } catch (error) {
    yield put(fetchListAsync.failure(new Error('ERROR')));
  }
}

export function* typesafeActionsSaga() {
  yield takeLatest(FETCH_LIST, fetchSaga);
}

const initialState = {
  count: 1
};

const reducer = function(state = initialState, action: any) {
  switch(action.type) {
    case INCREASE: 
      return {
        ...state,
        count: state.count + action.payload
      }
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        count: state.count + action.payload + 100
      }
    default:
      return state
  }
}

export default reducer;