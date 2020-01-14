const INITIAL_STATE = {
  isLoading: true,
  loadingSeries: true,
  // loadingPaginate: false,
  // refresh: false,
  // offset: 0,
  series: [],
  seriesInfo: {}
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'GET_SERIES_REQUEST':
      return { ...state, isLoading: true };
    case 'GET_SERIES_RESPONSE':
      return { ...state, isLoading: false, series: payload };
    case 'GET_SERIE_INFO':
      return { ...state, loadingSeries: false, seriesInfo: payload };
    default:
      return state;
  }
};
