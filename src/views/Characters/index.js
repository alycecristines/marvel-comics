import React, {useState, useEffect} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import {Container} from '../Home/styles';

import reactotron from 'reactotron-react-native';
import {Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';

import {getCharacters} from '../../autenticacao';

export default function Characters() {
  // name,
  // description,
  // thumbnail.path
  // thumbnail.extension

  const listChar = useSelector(state => state.character);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(1));
  }, []);

  // _renderItem = ({item}) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => reactotron.log('item')}
  //       style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
  //       <Image
  //         style={{height: 50, width: 50, borderRadius: 25}}
  //         source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
  //       />
  //       <Text style={{marginLeft: 10}}>{item.name}</Text>
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <Container>
      <View>
        <FlatList
          data={listChar}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                padding: 10,
                alignItems: 'center',
              }}>
              <Image
                style={{height: 50, width: 50, borderRadius: 25}}
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
              />
              <Text style={{marginLeft: 10}}>{item.name}</Text>
              <Text style={{marginLeft: 10}}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Container>
  );
}
