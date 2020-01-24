import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const FullBanner = ({ imageUri }) => {
  return (
    <View style={styles.box}>
      <Image style={styles.banner} source={imageUri} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 220,
  },
  banner: {
    height: `100%`,
    resizeMode: `cover`,
  },
});

export default FullBanner;
