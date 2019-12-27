import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

import {DrawerActions} from '@react-navigation/routers';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const [title, setTitle] = useState('Screen title');
  useEffect(() => {});

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon
        name="reorder"
        style={styles.toogleMenu}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Text style={styles.titleScreen}>{title}</Text>
      <Icon name="search" style={styles.searchIcon} />
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
