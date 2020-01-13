import React from 'react';
import { View, Image, Button, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Container } from '../Home/styles';

import reactotron from 'reactotron-react-native';

const CharacterDetails = () => {
  const { charInfo } = useSelector(state => state.Characters);

  // const navigation = useNavigation();
  // const goBack = () => {
  //   navigation.goBack();
  // };

  return (
    <Container>
      <View>
        <Image
          source={{
            uri: `${charInfo.thumbnail.path}.${charInfo.thumbnail.extension}`,
          }}
          style={{
            height: 200,
            width: 200,
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 20,
          }}
        />
        <Text style={{ padding: 20, fontSize: 20, color: '#fefefe', alignSelf: 'center' }}>
          {charInfo.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#cecece',
            padding: 20
          }}
        >
          {charInfo.description !== '' ? charInfo.description : 'A Marvel Character!'}
        </Text>
        <Button title="teste" onPress={() => reactotron.log(charInfo)}></Button>
      </View>
    </Container>
  );
};

export default CharacterDetails;
