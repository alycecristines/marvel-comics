import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Button, Text, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../Home/styles';
import { Formik } from 'formik';

import reactotron from 'reactotron-react-native';
import { getCharactersResponse, setCharacterInfo, resetStatus } from '../../actions/characters';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CharacterDetails = () => {
  const { charInfo, characters } = useSelector(state => state.Characters);
  const [style, setStyle] = useState({ color: '#fefefe', fontSize: 20 });
  // const [editable, setEditable] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onFocus = () => {
    setStyle({
      backgroundColor: '#fff',
      padding: 10,
      color: '#000',
      fontSize: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
    });
    // setEditable(true);
  };

  const onBlur = () => {
    setStyle({ color: '#fefefe', fontSize: 20 });
    // setEditable(false);
  };

  const onSubmit = values => {
    const newCharInfo = { ...charInfo, name: values.name };
    dispatch(setCharacterInfo(newCharInfo));

    const newArr = characters.map(item => {
      if (item.id === charInfo.id) {
        return newCharInfo;
      } else {
        return item;
      }
    });
    dispatch(resetStatus());
    dispatch(getCharactersResponse([...newArr]));
  };

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
        <Formik initialValues={{ name: charInfo.name }} onSubmit={values => onSubmit(values)}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 20 }}>
              <TextInput
                name="name"
                ref={inputRef}
                style={style}
                onChangeText={handleChange('name')}
                onBlur={() => {
                  handleBlur('name');
                  onBlur();
                }}
                onFocus={onFocus}
                value={values.name}
                onSubmitEditing={handleSubmit}
              />
              <TouchableOpacity
                style={{ margin: 10, marginLeft: 50 }}
                onPress={() => {inputRef.current.focus()}}
              >
                <Icon name="pencil-alt" size={24} style={{ color: '#fff' }} />
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <Text
          style={{
            fontSize: 14,
            color: '#cecece',
            padding: 20,
          }}
        >
          {charInfo.description !== '' ? charInfo.description : 'A Marvel Character!'}
        </Text>
      </View>
    </Container>
  );
};

export default CharacterDetails;
