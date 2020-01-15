const INITIAL_STATE = {
  isLoading: true,
  loadingChar: true,
  // loadingPaginate: false,
  // refresh: false,
  // offset: 0,
  characters: [],
  charInfo: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'GET_CHARS_REQUEST':
      return { ...state, isLoading: true };
    case 'GET_CHARS_RESPONSE':
      return { ...state, isLoading: false, characters: payload };
    case 'GET_CHAR_INFO':
      return { ...state, loadingChar: false, charInfo: payload };
      case 'SET_CHAR_INFO':
        return { ...state, charInfo: payload}
    default:
      return state;
  }
};
