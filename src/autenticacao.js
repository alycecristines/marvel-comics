import md5 from 'js-md5';
import {PUBLIC_KEY, PRIVATE_KEY} from './constants';

export default function AuthReducer() {
  let timestamp = Number(new Date());
  let hash = md5.create();

  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
}
