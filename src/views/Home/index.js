import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';
import {useDispatch} from 'react-redux';

export default function Home() {
  return (
    <>
      <Container>
        <Text style={{color: '#fff'}}>Tela home</Text>
      </Container>
    </>
  );
}
