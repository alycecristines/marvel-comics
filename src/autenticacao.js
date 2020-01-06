import md5 from 'js-md5';
import {PUBLIC_KEY, PRIVATE_KEY} from './constants';
import api from './services/api';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {setDados} from './actions/CharactersActions';
import reactotron from 'reactotron-react-native';

let timestamp = Math.floor(Date.now() / 1000);
let hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
let valor = hash.hex();

export const getCharacters = async () => {
  const response = await api.get(
    `/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${valor}`,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (response.status == 200) {
      dispatch(setDados(response.data));
    }
  });

  // axios
  //   .get(
  //     `${URL_BASE}/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${valor}`,
  //   )
  //   .then(res => {
  //     setTeste(res.data);
  //   });
};
