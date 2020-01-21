import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const FullBanner = ({ imageUri }) => {
  return (
    <View style={styles.box}>
      <Image
        style={{
          height: `100%`,
          resizeMode: `cover`,
          // height: 220,
        }}
        source={imageUri}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 220,
  },
});

export default FullBanner;
