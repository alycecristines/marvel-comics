import axios from 'axios';
import md5 from 'js-md5';
import {PUBLIC_KEY, PRIVATE_KEY, URL_BASE} from './constants';
import {useState, useEffect} from 'react';

export const getCharacters = async () => {
  let timestamp = Math.floor(Date.now() / 1000);
  let hash = md5.create();
  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  let valor = hash.hex();

  const [teste, setTeste] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${URL_BASE}/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${valor}`,
      )
      .then(res => {
        setTeste(res.data.items);
      });
  });
};
