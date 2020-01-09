export const getSeriesRequest = offset => ({
  type: 'GET_SERIES_REQUEST',
  payload: {offset}
});

export const getSeriesResponse = data => ({
  type: 'GET_SERIES_RESPONSE',
  payload: data
});

export const getSerieRequest = id => ({
  type: 'GET_SERIE_REQUEST',
  payload: {id}
});

export const getSerieResponse = data => ({
  type: 'GET_SERIE_RESPONSE',
  payload: data
});
