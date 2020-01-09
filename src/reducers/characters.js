const INITIAL_STATE = {
  loading: true,
  loadingChar: true,
  loadingPaginate: false,
  refresh: false,
  characters: [],
  charInfo: {}
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'GET_CHARS_REQUEST':
      return { ...state, loading: true, refresh: true };
    case 'GET_CHARS_RESPONSE':
      return { ...state, characters: payload };
    case 'GET_CHAR_REQUEST':
      return { ...state, loadingChar: true };
    case 'GET_CHAR_RESPONSE':
      return { ...state, loadingChar: false, charInfo: false };
    default:
      return state;
  }
};
