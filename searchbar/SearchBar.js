import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
 
export default function SearchBar ({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Your Blood request"
        onChangeText={(text) => setQuery(text)}
        value={query}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
     padding:10
    },
    input: {
      height: 40,
      width:200,
      borderColor: 'gray',
      borderWidth: 1,
      paddingLeft: 10,
      borderRadius:20
    },
  });
  

