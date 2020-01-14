import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../Home/styles';

import { getCharacters } from '../../autenticacao';
import Card from '../../components/Card';
import LoadingScreen from '../../components/Loading';

const Characters = () => {
  const { characters, isLoading } = useSelector(state => state.Characters);
  const [offset, setOffset] = useState(0);
  const [loadItems, setLoadItems] = useState(false);
  const dispatch = useDispatch();

  const loadCharacters = () => {
    dispatch(getCharacters(offset));
    setOffset(offset + 10);
    setLoadItems(true);
  };

  const renderFooter = () => {
    if (!loadItems) return null;

    return (
      <View style={{ alignSelf: 'center', marginVertical: 20 }}>
        <ActivityIndicator />
      </View>
    );
  };

  useEffect(() => {
    loadCharacters();
  }, [dispatch]);

  useEffect(() => {
    setLoadItems(false);
  }, [characters]);

  if (isLoading) return <LoadingScreen />;

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={item => String(item.id)}
          data={characters}
          renderItem={({ item }) => <Card item={item} />}
          onEndReached={loadCharacters}
          onEndReachedThreshold={1}
          ListFooterComponent={renderFooter}
          // TODO: chamar o refresh da página
          // ListHeaderComponent={}
        />
      </View>
    </Container>
  );
};

export default Characters;
