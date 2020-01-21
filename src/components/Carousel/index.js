import React from 'react';
import { View, Image, FlatList } from 'react-native';

export const Carousel = images => {
  
  return (
    <View style={{ height: 230 }}>
      <FlatList
        data={images}
        horizontal={true}
        renderItem={image => (
          <Image key={image} source={{ uri: image }} style={{ resizeMode: 'cover' }} />
        )}
        contentContainerStyle={{
          width: 300,
          flex: 1,
        }}
      />
    </View>
  );
};

export default Carousel;
