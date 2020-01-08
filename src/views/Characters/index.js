import React, { useState, useEffect } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import reactotron from 'reactotron-react-native';
import { Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../Home/styles';

import { getCharacters } from '../../autenticacao';

const Characters = () => {
  // name,
  // description,
  // thumbnail.path
  // thumbnail.extension

  const { characters } = useSelector(state => state.Characters);
  const dispatch = useDispatch();
  const arrayChar = useSelector(state => state.characters);

  useEffect(() => {
    dispatch(getCharacters(1));
  }, [dispatch]);

  useEffect(() => {}, [characters]);

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={item => String(item.id)}
          data={characters}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity
                onPress={() => reactotron.log('item')}
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  alignItems: 'center',
                }}
              >
                <Image
                  style={{ height: 50, width: 50, borderRadius: 25 }}
                  source={{
                    uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                  }}
                />
                <Text style={{ marginLeft: 10, color: '#fff' }}>{item.name}</Text>
              </TouchableOpacity>
            </>
          )}
        />
      </View>
    </Container>
  );
};

export default Characters;
