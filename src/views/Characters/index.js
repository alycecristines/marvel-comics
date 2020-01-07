import React, {useState, useEffect} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import {Container} from '../Home/styles';

import reactotron from 'reactotron-react-native';
import {Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';

import getCharactersRequest from '../../actions/characters';
import {getCharacters} from '../../autenticacao';

export default function Characters() {
  // name,
  // description,
  // thumbnail.path
  // thumbnail.extension
  
  const listChar = useSelector(state => state.character);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(25));
  }, []);

  return (
    <Container>
      
      {/* <Button onPress={() => getCharacters(1)} /> */}
    
      <View style={{flex: 1}}>
        <FlatList
          data={listChar}
          renderItem={({item}) => (
            <>
              <Image
                style={{height: 50, width: 50, borderRadius: 25}}
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
              />
              <Text style={{marginLeft: 10}}>{item.name}</Text>
              <Text style={{marginLeft: 10}}>{item.description}</Text>
            </>
          )}
        />
      </View>
    </Container>
  );
}
