import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CustomTextField } from './TextFields';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { InputField } from './Inputs';
import { CustomButton } from './Buttons';

export default function CustomTypeModal({ hideModal, navigation, title, text }) {
  return (
    <>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={{
              padding: 8,
              position: 'absolute',
              right: 4,
              top: 2,
              backgroundColor: '#D7F8EA',
              height: 30,
              width: 30,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              hideModal();
              navigation.navigate('Invite', { screen: 'InviteList' });
            }}>
            <MaterialCommunityIcons
              name="close"
              size={16}
              color="#21c17c"
            />
          </TouchableOpacity>

          <CustomTextField
            label={title}
            color="#000"
            fontSize={16}
            fontWeight="700"
            alignSelf="center"
            paddingBottom={10}
          />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <CustomTextField
              label="Selection:"
              color="#000"
              fontSize={16}
              fontWeight="700"
              alignSelf="center"
              paddingBottom={10}
            />
            <CustomTextField
              label={text}
              color="#737F8F"
              fontSize={16}
              fontWeight="600"
              alignSelf="center"
              paddingBottom={10}
              paddingTop={5}
              paddingHorizontal={5}
            />
          </View>
          <InputField
            placeholder="Option #1"
            containerStyle={styles.inputs}
            inputStyle={{ textAlign: 'center', fontSize: 16 }}
            placeholderTextColor="#ADB3BC"
          />
          <InputField
            placeholder="Option #2"
            containerStyle={styles.inputs}
            inputStyle={{ textAlign: 'center', fontSize: 16 }}
            placeholderTextColor="#ADB3BC"
          />
          <InputField
            placeholder="Option #3"
            containerStyle={styles.inputs}
            inputStyle={{ textAlign: 'center', fontSize: 16 }}
            placeholderTextColor="#ADB3BC"
          />
          <InputField
            placeholder="Option #4"
            containerStyle={styles.inputs}
            inputStyle={{ textAlign: 'center', fontSize: 16 }}
            placeholderTextColor="#ADB3BC"
          />
          <CustomButton
            label="Confirm"
            color="#fff"
            backgroundColor="#21C17C"
            mt={20}
          />
          <CustomButton
            label="Delete Custom Action"
            color="#fff"
            backgroundColor="#ff3000"
            mt={20}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingBottom: 35,
    paddingTop: 12,
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#21c17c',
    borderRadius: 10,
    width: '100%',
    marginVertical: 5,
  },
});
