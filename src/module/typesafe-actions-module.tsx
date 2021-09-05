import { ActionType, createAction, createAsyncAction, createReducer } from "typesafe-actions";
import { takeLatest, take, call, put } from 'redux-saga/effects';
import * as testAPI from "./testApi";

const INCREASE = 'INCREASE'; // 타입은 모두 동일하게 작성
const DECREASE = 'DECREASE'; // 타입은 모두 동일하게 작성
const FETCH_LIST = 'FETCH_LIST';
const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';


export const increase = createAction(INCREASE, (arg: string) => Number(arg))();
// export const increase = createAction(INCREASE, (arg: string) => Number(arg))<number>();
// export const decrease = createAction(DECREASE, payload => payload)();

// increase({});

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

export function* fetchSaga() {
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

type TypesafeState = {
  count: number
}

const actions = { increase, ...fetchListAsync };
type TypesafeAction = ActionType<typeof actions>;

const initialState = {
  count: 1,
  list: []
};

const reducer = createReducer<TypesafeState, TypesafeAction>(initialState)
  .handleAction(increase, (state, { payload: count }) => ({
    ...state,
    count: state.count + count
  }))
  .handleAction(fetchListAsync.success, (state, { payload: count }) => ({
    ...state,
    count
  }));

// const reducer = function(state = initialState, action: any) {
//   switch(action.type) {
//     case INCREASE: 
//       return {
//         ...state,
//         count: state.count + action.payload
//       }
//     case FETCH_LIST_SUCCESS:
//       return {
//         ...state,
//         count: state.count + action.payload + 100
//       }
//     default:
//       return state
//   }
// }

export default reducer;