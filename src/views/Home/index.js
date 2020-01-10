import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';

import Carousel from '../../components/Carousel';

const banners = [banner1, banner2];

export default function Home() {
  return (
    <>
      <Container>{/* <Carousel images={banners} /> */}</Container>
    </>
  );
}
