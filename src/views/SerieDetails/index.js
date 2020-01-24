import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../Home/styles';

import {
  Thumbnail,
  Title,
  Description,
  AdicionalInfoContainer,
  InfoTitle,
  InfoItem,
} from './styles';

const SerieDetails = () => {
  const { seriesInfo } = useSelector(state => state.Series);

  return (
    <Container>
      <Thumbnail
        source={{
          uri: `${seriesInfo.thumbnail.path}.${seriesInfo.thumbnail.extension}`,
        }}
      />
      <Title>{seriesInfo.title}</Title>
      <Description>{seriesInfo.description !== '' ? seriesInfo.description : ''}</Description>
      <AdicionalInfoContainer>
        <InfoTitle>Informações Adicionais:</InfoTitle>
        <InfoItem>Ano de Início: {seriesInfo.startYear}</InfoItem>
        <InfoItem>Ano de Término: {seriesInfo.endYear}</InfoItem>
        <InfoItem>Tipo de Edição: {seriesInfo.type}</InfoItem>
      </AdicionalInfoContainer>
    </Container>
  );
};

export default SerieDetails;
