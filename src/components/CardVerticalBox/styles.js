import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const CardContainer = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width / 2 - 10}px;
  height: 250px;
  border-radius: 6px;
  background-color: #cecece;
  padding: 6px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-horizontal: 5px;
  margin-vertical: 3px;
`;

export const ViewContainer = styled.View`
  padding-top: 15px;
`;

export const Thumbnail = styled.Image`
  height: 120px;
  border-radius: 25px;
`;

export const ContainerDescription = styled.View`
  padding-left: 10px;
  width: ${Dimensions.get('window').width / 2 - 25}px;
  align-items: center;
  margin-top: 15px;
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  font-family: 'Marvel-Bold';
`;
