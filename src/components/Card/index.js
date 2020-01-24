import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { getCharacterInfo } from '../../actions/characters';
import {
  CardContainer,
  ViewContainer,
  Thumbnail,
  DetailsContainer,
  NameContainer,
  TextName,
  DescriptionContainer,
  TextDescription,
} from './styles';

const Card = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <CardContainer
      onPress={() => {
        dispatch(getCharacterInfo(item));
        navigation.navigate('CharacterDetails');
      }}
    >
      <ViewContainer>
        <Thumbnail
          resizeMode="cover"
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          }}
        />
        <DetailsContainer>
          <NameContainer>
            <TextName>{item.name}</TextName>
          </NameContainer>
          <DescriptionContainer>
            <TextDescription numberOfLines={2}>
              {item.description !== '' ? item.description : 'A Marvel Character!'}
            </TextDescription>
          </DescriptionContainer>
        </DetailsContainer>
      </ViewContainer>
    </CardContainer>
  );
};

export default Card;
