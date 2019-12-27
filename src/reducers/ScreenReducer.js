export default function screenReducer(state = '', action) {
  switch(action.type) {
    case 'SET_SCREEN_TITLE': 
      return [ ...state, action.payload.title]
    default:
      return state;
  }
}