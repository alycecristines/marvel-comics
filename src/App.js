import React, {Component} from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import store from './store';
import Routes from './routes';

if (__DEV__) {
  import('./config/ReactotronConfig');
}

// antes de implementar redux no projeto
// export default function App() {
//   return (
//     <NavigationNativeContainer>
//       <Routes />
//     </NavigationNativeContainer>
//   );
// }

export default function App() {
  return (
    <Provider store={store}>
      <NavigationNativeContainer>
        <Routes />
      </NavigationNativeContainer>
    </Provider>
  );
}
