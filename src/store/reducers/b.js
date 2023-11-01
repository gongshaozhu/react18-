const initialState = {}
  
function b(state = initialState, action) {
    switch (action.type) {
      case 'b':
        return { ...state, };
      default:
        return state;
    }
  }

  export default b
