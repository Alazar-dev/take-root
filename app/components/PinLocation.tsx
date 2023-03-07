import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import DashboardMap from './actions/DashboardMap';
import { Ionicons } from '@expo/vector-icons';
import { CustomButton } from './Buttons';

export default function PinLocation({ locationModal, setLocationModal, saveLocation }) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.locationContainer}>
        <CustomButton
          icon={
            <Ionicons
              name="md-location-outline"
              size={24}
              color="#21C17C"
            />
          }
          label="Pin Drop Search"
          borderColor="#84E5C2"
          br={6}
          // @ts-ignore
          onPress={() => setLocationModal(true)}
          fontSize={12}
          color="#000"
          ml={-10}
          pl={10}
        />
        <Modal
          visible={locationModal}
          animationType="fade">
          <DashboardMap
            saveLocation={saveLocation}
            hideModal={() => setLocationModal(!locationModal)}
          />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
