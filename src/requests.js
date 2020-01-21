import md5 from 'js-md5';
import { PUBLIC_KEY, PRIVATE_KEY } from './constants';
import api from './services/api';
import { getCharactersResponse } from './actions/characters';
import { getSeriesResponse } from './actions/series';

const timestamp = Math.floor(Date.now() / 1000);
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export const getCharacters = offset => async (dispatch, getState) => {
  const {
    data: {
      data: { results },
    },
  } = await api.get(
    `characters?ts=${timestamp}&orderBy=name&limit=10&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
  );

  const { characters } = getState().Characters;
  if (characters.length > 0) {
    dispatch(getCharactersResponse([...characters, ...results]));
  } else dispatch(getCharactersResponse(results));
};

export const getSeries = offset => async (dispatch, getState) => {
  const {
    data: {
      data: { results },
    },
  } = await api.get(
    `series?ts=${timestamp}&limit=10&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
  );

  const { series } = getState().Series;
  if (series.length > 0) {
    dispatch(getSeriesResponse([...series, ...results]));
  } else dispatch(getSeriesResponse(results));
};
