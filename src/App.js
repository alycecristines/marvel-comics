import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationNativeContainer>
        <Routes />
      </NavigationNativeContainer>
    </Provider>
  );
}
