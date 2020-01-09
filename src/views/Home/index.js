import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

import Carousel from '../../components/Carousel';

const banners = [
  'https://ap.imagensbrasil.org/image/rkneRu',
  'https://ap.imagensbrasil.org/image/rknwzs',
];

export default function Home() {
  return (
    <>
      <Container>
        {/* <Carousel images={banners} /> */}
      </Container>
    </>
  );
}
