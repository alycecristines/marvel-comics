import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

// import {DrawerActions} from 'react-navigation-drawer';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name="reorder"
          style={styles.toogleMenu}
          // onPress={() =>
          //   this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          // }
        />
        <Text style={styles.titleScreen}>Characters</Text>
        {/* <Icon name="search" style={styles.searchIcon} /> */}
      </View>
    );
  }
}

//estilização do header
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#222',
  },
  toogleMenu: {
    fontSize: 40,
    marginLeft: 20,
    alignSelf: 'center',
    color: '#fff',
  },
  titleScreen: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchIcon: {
    alignContent: 'space-between',
    fontSize: 40,
    color: '#fff',
  },
});
