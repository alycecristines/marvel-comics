import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getSeries } from '../../requests';
import CardVerticalBox from '../../components/CardVerticalBox';

import { Container } from '../Home/styles';
import LoadingScreen from '../../components/Loading';

const Series = () => {
  const { series, isLoading } = useSelector(state => state.Series);
  const [offset, setOffset] = useState(0);
  const [loadItems, setLoadItems] = useState(false);
  const dispatch = useDispatch();

  const loadSeries = () => {
    dispatch(getSeries(offset));
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
    loadSeries();
  }, [dispatch]);

  useEffect(() => {
    setLoadItems(false);
  }, [series]);

  if (isLoading) return <LoadingScreen />;

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={item => String(item.id)}
          data={series}
          horizontal={false}
          numColumns={2}
          renderItem={({ item }) => <CardVerticalBox item={item} />}
          onEndReached={loadSeries}
          onEndReachedThreshold={1}
          ListFooterComponent={renderFooter}
        />
      </View>
    </Container>
  );
};

export default Series;
