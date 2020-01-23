import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  margin: 10px;
  flex-direction: row;
  height: 100px;
`;

export const ViewContainer = styled.View`
  flex-direction: row;
  margin-left: 10px;
`;

export const Thumbnail = styled.Image`
  width: 100px;
  height: 100%;
`;

export const DetailsContainer = styled.View`
  padding-left: 25px;
  width: 250px;
`;

export const NameContainer = styled.View`
  flex-direction: row;
`;

export const TextName = styled.Text`
  font-size: 20px;
  color: #f0f0f0;
  font-family: 'Marvel-Bold';
  text-transform: 'uppercase';
`;
