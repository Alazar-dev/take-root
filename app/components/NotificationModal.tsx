import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CustomTextField } from './TextFields';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function NotificationModal({ hideModal, navigation, title, text }) {
  return (
    <>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 12,
              height: 80,
              width: 80,
              top: -38,
              borderRadius: 16,
              backgroundColor: '#F8F8F8',
            }}>
            <FontAwesome
              name="send"
              size={32}
              color="#21C17C"
            />
          </View>
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

          <View style={{ paddingHorizontal: 19 }}>
            <CustomTextField
              label={title}
              color="#000"
              fontSize={16}
              fontWeight="700"
              alignSelf="center"
              paddingBottom={10}
            />
            <CustomTextField
              label={text}
              color="#737F8F"
              fontSize={14}
              fontWeight="500"
              alignSelf="center"
              paddingBottom={10}
            />
          </View>
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
});
