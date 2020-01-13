/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Perfil, Title, HeaderBox } from './components/CustomDrawerContent/styles';

import Home from './views/Home';
import Series from './views/Series';
import Characters from './views/Characters';
import CharacterDetails from './views/CharacterDetails';
import reactotron from 'reactotron-react-native';

const Stack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerStyle: { backgroundColor: '#222' },
            headerTitleStyle: { color: '#fff' },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={24} style={{ color: '#fff' }} />
              </TouchableOpacity>
            )
            // headerRight: () => (
            //   <TouchableOpacity style={{ margin: 10 }}>
            //     <Icon name="search" size={24} style={{ color: '#fff' }} />
            //   </TouchableOpacity>
            // ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

const SeriesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Series"
        component={Series}
        options={({ navigation }) => {
          return {
            headerStyle: { backgroundColor: '#222' },
            headerTitleStyle: { color: '#fff' },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={24} style={{ color: '#fff' }} />
              </TouchableOpacity>
            )
            // headerRight: () => (
            //   <TouchableOpacity style={{ margin: 10 }}>
            //     <Icon name="search" size={24} style={{ color: '#fff' }} />
            //   </TouchableOpacity>
            // ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

const CharDetailsStackNavigator = ({route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetails}
        options={({ navigation }) => {
          return {
            headerStyle: { backgroundColor: '#222' },
            headerTitleStyle: { color: '#fff' },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={24} style={{ color: '#fff' }} />
              </TouchableOpacity>
            )
            // headerRight: () => (
            //   <TouchableOpacity style={{ margin: 10 }}>
            //     <Icon name="search" size={24} style={{ color: '#fff' }} />
            //   </TouchableOpacity>
            // ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

const CharactersStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Characters"
        component={Characters}
        options={({ navigation }) => {
          return {
            headerStyle: { backgroundColor: '#222' },
            headerTitleStyle: { color: '#fff' },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={24} style={{ color: '#fff' }} />
              </TouchableOpacity>
            )
            // headerRight: () => (
            //   <TouchableOpacity style={{ margin: 10 }}>
            //     <Icon name="search" size={24} style={{ color: '#fff' }} />
            //   </TouchableOpacity>
            // ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView>
      <HeaderBox>
        <Perfil source={require('./assets/images/marvel-logo.png')} />
        <Title>Fulano de Tal</Title>
      </HeaderBox>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
export default function Routes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: '#333',
        width: 240,
      }}
      drawerContent={CustomDrawerContent}
      drawerContentOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
      }}
    >
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="Series" component={SeriesStackNavigator} />
      <Drawer.Screen name="Characters" component={CharactersStackNavigator} />
      <Drawer.Screen name="CharacterDetails" component={CharDetailsStackNavigator} />
    </Drawer.Navigator>
  );
}
