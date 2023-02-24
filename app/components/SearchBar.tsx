import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { InputField } from './Inputs';
const SearchBar = ({ onFilterClicked, saveSearch }) => {
  const [search, setSearch] = useState('');
  useEffect(() => {
    saveSearch(search);
  }, []);

  return (
    <View style={styles.formContent}>
      <View style={styles.inputContainer}>
        <InputField
          containerStyle={styles.inputs}
          placeholder="Search "
          autoCapitalize="none"
          leftIcon="cloud-search"
          autoCorrect={false}
          textContentType="password"
          rightIcon="glass-wine"
          iconColor="#21C17C"
          value={search}
          handlePasswordVisibility={onFilterClicked}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  formContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    height: 67,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
    padding: 5,
  },
  inputs: {
    fontFamily: 'Poppins-Regular',
    height: 51,
    backgroundColor: '#F8F8F8',
    flex: 1,
    borderRadius: 12,
    marginHorizontal: 8,
  },
});
