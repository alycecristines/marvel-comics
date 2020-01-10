import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Button } from 'react-native';
import { useSelector, useDispatch, useNavigation } from 'react-redux';
import { Container } from '../Home/styles';

import { getCharacter } from '../../autenticacao';
import reactotron from 'reactotron-react-native';

const CharacterDetails = () => {
  const { charInfo } = useSelector(state => state.Characters);

  // const navigation = useNavigation();
  // const dispatch = useDispatch();

  // const goBack = () => {
  //   navigation.goBack();
  // };

  // useEffect(() => {
  //   const id = navigation.getParam('id');
  //   dispatch(getCharacter(id));
  //   // dispatch(getCharComicsRequest(id))
  // }, [charInfo]);

  return (
    <Container>
      <View>
        {/* <Image
          source={{
            uri: `${charInfo.thumbnail.path}.${charInfo.thumbnail.extension}`,
          }}
          style={{ width: '100%', height: 250 }}
        /> */}
        <Button title="teste" onPress={() => reactotron.log(charInfo)}></Button>
      </View>
    </Container>
  );
};

export default CharacterDetails;
