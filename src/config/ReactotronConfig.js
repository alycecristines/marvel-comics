import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.configure()
  .use(reactotronRedux())
  .connect();

export default reactotron;
