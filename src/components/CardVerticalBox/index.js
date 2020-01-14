import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { getSerieInfo } from '../../actions/series';

export default function CardVerticalBox({ item }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(getSerieInfo(item));
        navigation.navigate('SerieDetails');
      }}
      style={{
        width: Dimensions.get('window').width / 2 - 10,
        height: 250,
        borderRadius: 6,
        backgroundColor: '#cecece',
        padding: 6,
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 5,
        marginVertical: 3,
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
