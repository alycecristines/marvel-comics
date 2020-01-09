import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../Home/styles';

import { getCharacters } from '../../autenticacao';
import Card from '../../components/Card';

const Characters = () => {
  const { characters } = useSelector(state => state.Characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(700));
  }, [dispatch]);

  useEffect(() => {}, [characters]);

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={item => String(item.id)}
          data={characters}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>
    </Container>
  );
};

export default Characters;
