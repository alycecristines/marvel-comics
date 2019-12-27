import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
// import {Provider} from 'react-redux';

import Routes from './routes';

if (__DEV__) {
  import('./config/ReactotronConfig');
}

export default function App() {
  return (
    <NavigationNativeContainer>
      <Routes />
    </NavigationNativeContainer>
  );
}

// export default function App() {
//   return (
//     <Provider>
//       <NavigationNativeContainer>
//         <Routes />
//       </NavigationNativeContainer>
//     </Provider>
//   );
// }
