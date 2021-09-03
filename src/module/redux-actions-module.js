import { createAction,  } from "redux-actions";

const INCREASE = 'INCREASE';

export const increase = createAction(INCREASE);

const initialState = {
  count: 1
};

const reducer = function(state = initialState, action) {
  switch(action.type) {
    case INCREASE: 
      return {
        ...state,
        count: state.count + action.payload
      }
    default:
      return state
  }
}

export default reducer;