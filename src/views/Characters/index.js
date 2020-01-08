import React, { useEffect } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import reactotron from 'reactotron-react-native';
import { Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../Home/styles';

import { getCharacters } from '../../autenticacao';
import Card from '../../components/Card';

const Characters = () => {
  // name,
  // description,
  // thumbnail.path
  // thumbnail.extension

  const { characters } = useSelector(state => state.Characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(300));
  }, [dispatch]);

  useEffect(() => {}, [characters]);

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={item => String(item.id)}
          data={characters}
          renderItem={({ item }) => <Card item={item} />}
          // renderItem={({ item }) => (
          //   <>
          //     <TouchableOpacity
          //       onPress={() => reactotron.log(item)}
          //       style={{
          //         flexDirection: 'row',
          //         padding: 10,
          //       }}
          //     >
          //       <Image
          //         style={{ height: 70, width: 70, borderRadius: 20 }}
          //         source={{
          //           uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          //         }}
          //       />
          //       <Text style={{ marginLeft: 20, color: '#fff', fontSize: 15 }}>{item.name}</Text>
          //     </TouchableOpacity>
          //   </>
          // )}
        />
      </View>
    </Container>
  );
};

export default Characters;
