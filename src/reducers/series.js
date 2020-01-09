const INITIAL_STATE = {
  loading: true,
  loadingSeries: true,
  loadingPaginate: false,
  refresh: false,
  series: [],
  seriesInfo: {}
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'GET_SERIES_REQUEST':
      return { ...state, loading: true, refresh: true };
    case 'GET_SERIES_RESPONSE':
      return { ...state, series: payload };
    case 'GET_SERIE_REQUEST':
      return { ...state, loadingSeries: true };
    case 'GET_SERIE_RESPONSE':
      return { ...state, loadingSeries: false, seriesInfo: payload };
    default:
      return state;
  }
};
