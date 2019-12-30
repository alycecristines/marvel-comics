import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

import {getCharacters} from '../../autenticacao';

import {DrawerActions} from '@react-navigation/routers';
import {useNavigation} from '@react-navigation/native';
import { DrawerItem } from '@react-navigation/drawer';

export default function Header() {
  const [title, setTitle] = useState('');
  // useEffect(() => { setTitle() = navigation(DrawerItem.title)})

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon
        name="reorder"
        style={styles.toogleMenu}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        // onPress={() => getCharacters()}
      />
      <Text style={styles.titleScreen}>{title}</Text>
      <Icon name="search" style={styles.searchIcon} onPress={() => getCharacters()} />
    </View>
  );
}

//estilização do header
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    height: 65,
    backgroundColor: '#222',
  },
  toogleMenu: {
    fontSize: 40,
    color: '#fff',
  },
  titleScreen: {
    marginTop: 5,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchIcon: {
    fontSize: 40,
    color: '#fff',
  },
});
