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
        </View>
      </Container>
    </>
  );
}
