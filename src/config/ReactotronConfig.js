import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

const reactotron = Reactotron.configure()
  .use(reactotronRedux())
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .connect();

export default reactotron;
