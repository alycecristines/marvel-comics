import md5 from 'js-md5';
import {PUBLIC_KEY, PRIVATE_KEY} from './constants';
import api from './services/api';
import {getCharactersResponse} from './actions/characters';
import reactotron from 'reactotron-react-native';

let timestamp = Math.floor(Date.now() / 1000);
let hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export const getCharacters = (offset) => async dispatch => {
  reactotron.log('aqui');

  try {
    const response = await api.get(
      `characters?ts=${timestamp}&orderBy=name&limit=20&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
    );

    reactotron.log(response);

    if (response.data.data) {
      dispatch(getCharactersResponse(response.data.data.results));
      reactotron.log('entrou');
    }
  } catch (error) {
    reactotron.log('error', error);
  }

  // axios
  //   .get(
  //     `${URL_BASE}/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${valor}`,
  //   )
  //   .then(res => {
  //     setTeste(res.data);
  //   });
}
