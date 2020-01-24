import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

const reactotron = Reactotron.configure({ host: '192.168.10.245', name: 'marvel-commics' })
  .use(reactotronRedux())
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .connect();

export default reactotron;
