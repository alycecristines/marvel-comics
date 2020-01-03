import React, {useState, useEffect} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import {Container} from '../Home/styles';

import auth from '../../autenticacao';
import reactotron from 'reactotron-react-native';

export default function Characters() {

  
  // name,
  // description,
  // thumbnail.path
  // thumbnail.extension

  return (
    <Container>
      <Text style={{color: '#fff'}}>Tela characters</Text>
      <View>
        {/* <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <>
              <Image
                style={{height: 50, width: 50, borderRadius: 25}}
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
              />
              <Text style={{marginLeft: 10}}>{item.name}</Text>
              <Text style={{marginLeft: 10}}>{item.description}</Text>
            </>
          )}
        /> */}
      </View>
    </Container>
  );
}
