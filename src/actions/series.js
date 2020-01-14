export const getSeriesRequest = () => ({
  type: 'GET_SERIES_REQUEST'
});

export const getSeriesResponse = data => ({
  type: 'GET_SERIES_RESPONSE',
  payload: data
});

export const getSerieInfo = data => ({
  type: 'GET_SERIE_INFO',
  payload: data
});
