/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import {useDispatch} from 'native-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Container, Body, Content} from 'native-base';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {
  Perfil,
  Title,
  HeaderBox,
} from './components/CustomDrawerContent/styles';

import Home from './views/Home';
import Series from './views/Series';
import Characters from './views/Characters';
import reactotron from 'reactotron-react-native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => (
  <DrawerContentScrollView>
    <Container>
      <HeaderBox>
        <Body>
          <Perfil source={require('./assets/images/marvel-logo.png')} />
          <Title>Fulano de Tal</Title>
        </Body>
      </HeaderBox>
      <Content>
        <DrawerItemList {...props} />
      </Content>
    </Container>
  </DrawerContentScrollView>
);

export default function Routes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: '#333',
        width: 210,
      }}
      drawerContent={CustomDrawerContent}
      drawerContentOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#000',
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Series" component={Series} options={{}} />
      <Drawer.Screen name="Characters" component={Characters} />
    </Drawer.Navigator>
  );
}

reactotron.log(Routes());