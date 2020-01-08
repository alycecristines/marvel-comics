import md5 from 'js-md5';
import reactotron from 'reactotron-react-native';
import { PUBLIC_KEY, PRIVATE_KEY } from './constants';
import api from './services/api';
import { getCharactersResponse } from './actions/characters';

const timestamp = Math.floor(Date.now() / 1000);
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export const getCharacters = offset => async dispatch => {
  const {
    data: {
      data: { results }
    }
  } = await api.get(
    `characters?ts=${timestamp}&orderBy=name&limit=20&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
  );

  dispatch(getCharactersResponse(results));
};
