const INITIAL_STATE = {
  loading: true,
  loadingChar: true,
  loadingPaginate: false,
  refresh: false,
  data: [],
  charInfo: {},
  offset: 1,
  limit: 10,
};

export default function characters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_CHARS_REQUEST':
      return {...state, loading: true, refresh: true};
    case 'GET_CHARS_RESPONSE':
      return {...state, data: action.payload.data.results};
    case 'GET_CHAR_REQUEST':
      return {...state, loadingChar: true};
    case 'GET_CHAR_RESPONSE':
      return {...state, loadingChar: false, charInfo: action.payload.data};
    default:
      return state;
  }
};
