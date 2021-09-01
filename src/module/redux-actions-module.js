const INCREASE = 'INCREASE';

export const increase = function() {
  return {
    type: INCREASE
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
        count: state.count + 1
      }
    default:
      return state
  }
}

export default reducer;