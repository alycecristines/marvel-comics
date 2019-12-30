// import React, {Component, useState} from 'react';
// import {Text, View, Image, FlatList} from 'react-native';
// import {Container} from '../Home/styles';
// import Header from '../../components/Header';
// import { getCharacters } from '../../autenticacao';

// export default class Characters extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }

//   componentDidMount() {
//     this.loadCharacters();
//   }

//   // name,
//   // description,
//   // thumbnail.path
//   // thumbnail.extension
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Text style={{color: '#fff'}}>Tela characters</Text>
//         <View>
//           <FlatList 
//             data={this.state.data} 
//             renderItem={({item}) => (
//               <Image
//                 style={{height: 50, width: 50, borderRadius: 25}}
//                 source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
//               />
//               <Text style={{marginLeft: 10}}>{item.name}</Text>
//               <Text style={{marginLeft: 10}}>{item.description}</Text>
//           )} />
//         </View>
//       </Container>
//     );
//   }
// }
