const INCREASE = 'INCREASE';

export const increase = function(payload) {
  return {
    type: INCREASE,
    payload
  }
}

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