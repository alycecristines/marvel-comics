import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

export default function SearchBox(item) {
  const [value, setValue] = useState('');

  const updateSearch = () => {
    setValue(item);
  };

  return <SearchBar placeholder="Pesquisar nome..." onChangeText={updateSearch} value={value} />;
}
