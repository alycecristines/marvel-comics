/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Container } from './styles';

import banner from '../../assets/images/banner2.jpg';
import FullBanner from '../../components/FullBanner';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <>
      <Container>
        <FullBanner imageUri={banner} />
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              textTransform: 'uppercase',
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            Marvel Now
          </Text>
          <Text
            style={{
              fontSize: 14,
              textTransform: 'uppercase',
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            See All
          </Text>
          {/* <View style={{ flex: 1 }}>
            <FlatList
              keyExtractor={item => String(item.id)}
              data={characters}
              renderItem={({ item }) => <Card item={item} />}
              onEndReached={loadCharacters}
              onEndReachedThreshold={0.1}
              // TODO: Inserir animação aqui
              // ListFooterComponent={renderFooter}
              // TODO: chamar o refresh da página
              // ListHeaderComponent={}
            />
          </View> */}
        </View>
      </Container>
    </>
  );
}
