import md5 from 'js-md5';
import {PUBLIC_KEY, PRIVATE_KEY, URL_BASE} from './constants';
import Reactotron from 'reactotron-react-native';

let timestamp = Math.floor(Date.now() / 1000);
let hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
let valor = hash.hex();

export const getCharacters = async () => {
  const response = await fetch(
    `${URL_BASE}/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${valor}`,
  );
  return (responseJson = await response.json());

  Reactotron.log(responseJson);
};
