import React from 'react';
import {Text} from 'react-native';
import {Container} from '../Home/styles';
import Header from '../../components/Header';

export default function Series() {
  return (
    <>
      <Container>
        <Header />
        <Text style={{color: '#fff'}}>Tela series</Text>
      </Container>
    </>
  );
}
