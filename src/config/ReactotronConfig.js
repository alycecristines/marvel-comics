import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-community/async-storage';

const reactotron = Reactotron.configure()
  .use(reactotronRedux())
  .useReactNative()
  .setAsyncStorageHandler(AsyncStorage)
  .connect();

export default reactotron;
