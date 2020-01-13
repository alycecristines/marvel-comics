import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { getCharacterInfo } from '../../actions/characters';

export default function Card({ item }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(getCharacterInfo(item));
        navigation.navigate('CharacterDetails');
      }}
      style={{
        margin: 10,
        flexDirection: 'row',
        height: 100,
      }}
    >
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <Image
          resizeMode="cover"
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          }}
          style={{
            width: 100,
            height: '100%',
          }}
        />
        <View style={{ paddingLeft: 25, width: 250 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                fontSize: 20,
                color: '#f0f0f0',
                fontFamily: 'Marvel-Bold',
                textTransform: 'uppercase',
              }}
            >
              {item.name}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text
              numberOfLines={2}
              style={{
                fontSize: 14,
                color: '#cecece',
              }}
            >
              {item.description !== '' ? item.description : 'A Marvel Character!'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
