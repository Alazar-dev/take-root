import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { CustomTextField } from './TextFields';
import Button from './dButton';
import CustomCalendarPicker from './Calendar';

export default function CustomDateInput({ dateValue, showModal, setShowModal, saveDate, label }) {
  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <AntDesign
          name="calendar"
          size={20}
          color="#84E5C2"
        />
        <CustomTextField
          label={label}
          color="#21C17C"
          marginRight={10}
          marginLeft={10}
        />
      </View>

      <Button
        title={
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <CustomTextField
              label={dateValue}
              color="#84E5C2"
              marginRight={dateValue === '__ / __' ? 280 : 250}
            />
            <AntDesign
              name="calendar"
              size={20}
              color="#84E5C2"
            />
          </View>
        }
        containerStyle={styles.btnBirth}
        onPress={() => setShowModal(true)}
        titleSize={12}
        backgroundColor="white"
        titleColor="green"
      />
      <Modal
        visible={showModal}
        animationType="fade">
        <CustomCalendarPicker saveDate={saveDate} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  btnBirth: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    marginVertical: 20,
    borderRadius: 14,
    padding: 6,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: '600',
    borderColor: '#84E5C2',
    borderWidth: 1,
  },
});
