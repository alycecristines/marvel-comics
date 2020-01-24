import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { getSerieInfo } from '../../actions/series';
import { CardContainer, ViewContainer, Thumbnail, ContainerDescription, TextTitle } from './styles';

const CardVerticalBox = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <CardContainer
      onPress={() => {
        dispatch(getSerieInfo(item));
        navigation.navigate('SerieDetails');
      }}
    >
      <ViewContainer>
        <Thumbnail
          resizeMode="contain"
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          }}
        />
        <ContainerDescription>
          <TextTitle>{item.title}</TextTitle>
        </ContainerDescription>
      </ViewContainer>
    </CardContainer>
  );
};

export default CardVerticalBox;
