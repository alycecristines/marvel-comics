import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';

export default function CardVerticalBox({ item }) {
  return (
    <TouchableOpacity
      style={{
        width: Dimensions.get('window').width / 2 - 10,
        height: 250,
        borderRadius: 6,
        backgroundColor: '#cecece',
        padding: 6,
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 3,
        marginVertical: 1.5,
      }}
    >
      <View style={{ paddingVertical: 15 }}>
        <Image
          resizeMode="contain"
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          }}
          style={{
            height: 120,
            borderRadius: 25,
          }}
        />
        <View
          style={{
            paddingLeft: 10,
            width: Dimensions.get('window').width / 2 - 25,
            alignItems: 'center',
          }}
        >
          <View style={{ marginTop: 15 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Marvel-Bold',
              }}
            >
              {item.title}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
