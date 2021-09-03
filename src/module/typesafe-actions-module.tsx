import { createAction } from "typesafe-actions";

const INCREASE = 'INCREASE'; // 타입은 모두 동일하게 작성
const DECREASE = 'DECREASE'; // 타입은 모두 동일하게 작성

export const increase = createAction(INCREASE)<string>();
// export const decrease = createAction(DECREASE, payload => payload)();

// export const actionCreators = createAction

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
    case DECREASE:
      return {
        ...state,
        count: state.count - action.payload
      }
    default:
      return state
  }
}

export default reducer;