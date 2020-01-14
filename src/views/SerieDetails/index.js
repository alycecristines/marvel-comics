import React from 'react';
import { View, Image, Button, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Container } from '../Home/styles';

import reactotron from 'reactotron-react-native';

const SerieDetails = () => {
  const { seriesInfo } = useSelector(state => state.Series);

  return (
    <Container>
      <View>
        <Image
          source={{
            uri: `${seriesInfo.thumbnail.path}.${seriesInfo.thumbnail.extension}`,
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
          {seriesInfo.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#cecece',
            padding: 20,
          }}
        >
          {seriesInfo.description !== '' ? seriesInfo.description : ''}
        </Text>
        <View style={{ padding: 20 }}>
          <Text style={{ marginBottom: 10, fontSize: 16, color: '#fefefe' }}>
            Informações Adicionais:
          </Text>
          <Text style={{ fontSize: 14, color: '#fefefe' }}>
            Ano de Início: {seriesInfo.startYear}
          </Text>
          <Text style={{ fontSize: 14, color: '#fefefe' }}>
            Ano de Término: {seriesInfo.endYear}
          </Text>
          <Text style={{ fontSize: 14, color: '#fefefe' }}>Tipo de Edição: {seriesInfo.type}</Text>
        </View>
      </View>
    </Container>
  );
};

export default SerieDetails;
