import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Container, Body, Content} from 'native-base';

import {Header, Perfil, Title} from './styles';

export default function CustomDrawerContent(props) {
  <DrawerContentScrollView>
    <Container>
      <Header>
        <Body>
          <Perfil
            source={require('../../assets/images/marvel-logo-100px.png')}
          />
          <Title>Fulano de Tal</Title>
        </Body>
      </Header>
      <Content>
        <DrawerItemList {...props} />
      </Content>
    </Container>
  </DrawerContentScrollView>;
}

//não esta sendo utilizado ainda.
//TODO: verificar forma de organizar esse componente drawer customizado
