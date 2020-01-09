import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getSeries } from '../../autenticacao';
import CardVerticalBox from '../../components/CardVerticalBox';

import { Container } from '../Home/styles';

const Series = () => {
  const { series } = useSelector(state => state.Series);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeries(1));
  }, [dispatch]);

  useEffect(() => {}, [series]);

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={item => String(item.id)}
          data={series}
          horizontal={false}
          numColumns={2}
          renderItem={({ item }) => <CardVerticalBox item={item} />}
        />
      </View>
    </Container>
  );
};

export default Series;
