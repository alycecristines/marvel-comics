import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import deadpool from '../../assets/animations/deadpool.json';

export default function Loading() {
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#9B9B9B' }}>
      <LottieView source={deadpool} autoPlay loop />
    </View>
  );
}
