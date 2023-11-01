const initialState = {
    a: 333
}
  
function a(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_A':
        return { ...state,  a: 33343, d: 11 };
        default:
        return state;
    }
}
export default a
