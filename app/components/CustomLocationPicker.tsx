import React from 'react';
import { Modal, StyleSheet, TextInput, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { CustomTextField } from './TextFields';
import Button from './dButton';
import ActionMap from './actions/ActionMap';

export default function CustomLocationPicker({
  locationModal,
  setLocationModal,
  locationInput,
  setLocationInput,
  saveLocation,
  location,
}) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.locationContainer}>
        <View style={{ flexDirection: 'row' }}>
          <EvilIcons
            name="location"
            size={20}
            color="#84E5C2"
          />
          <CustomTextField
            label="Location"
            color="#21C17C"
            marginRight={10}
            marginLeft={10}
          />
        </View>
        <Button
          title="Select on the map"
          containerStyle={styles.btnMap}
          // @ts-ignore
          onPress={() => setLocationModal(true)}
          titleSize={12}
          backgroundColor="#21C17C"
          titleColor="white"
        />
        <Modal
          visible={locationModal}
          animationType="fade">
          <ActionMap
            saveLocation={saveLocation}
            hideModal={() => setLocationModal(!locationModal)}
          />
        </Modal>
      </View>
      <TextInput
        value={location ? location : locationInput}
        style={styles.input}
        onChangeText={(e) => setLocationInput(e)}
        placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
        multiline={true}
        textAlignVertical="top"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 100,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#84E5C2',
    borderRadius: 16,
  },
  inputContainer: {
    flex: 1,
    marginVertical: 10,
  },
  btnMap: {
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    marginBottom: 20,
    borderColor: '#84E5C2',
    borderRadius: 6,
    padding: 6,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
