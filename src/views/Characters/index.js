import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../Home/styles';

import { getCharacters } from '../../autenticacao';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

const Characters = () => {
  const { characters } = useSelector(state => state.Characters);
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    dispatch(getCharacters(200));

    return () => {
      setLoading(true);
    };
  }, [dispatch]);

  useEffect(() => {}, [characters]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            keyExtractor={item => String(item.id)}
            data={characters}
            renderItem={({ item }) => <Card item={item} />}
          />
        </View>
      )}
    </Container>
  );
};

export default Characters;
