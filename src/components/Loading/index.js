import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import deadpool from '../../assets/animations/deadpool.json';

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView source={deadpool} autoPlay loop />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#9B9B9B',
  },
});
