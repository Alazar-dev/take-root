import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Modal, View } from 'react-native';
import Dates from 'react-native-dates';
import moment from 'moment';
import { CustomButton } from './Buttons';
import Button from './dButton';

export default function CustomDatePicker({ datePickerModal, setDatePickerModal }) {
  const [focus, setFocus] = useState('startDate');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const isDateBlocked = (date) => date.isAfter(moment(), 'day');
  const onDatesChange = ({ startDate, endDate, focusedInput }) => {
    setFocus(focusedInput);
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <View style={styles.container}>
      <CustomButton
        icon={
          <FontAwesome5
            name="calendar-alt"
            size={24}
            color="#21C17C"
          />
        }
        label="Select A Date Range"
        fontSize={12}
        onPress={() => setDatePickerModal(true)}
        pl={10}
      />
      <Modal
        style={{ margin: 100 }}
        visible={datePickerModal}
        animationType="fade">
        <Dates
          onDatesChange={onDatesChange}
          isDateBlocked={isDateBlocked}
          startDate={startDate}
          endDate={endDate}
          focusedInput={focus}
          focusedMonth={moment('05/09/2030', 'DD/MM/YYYY')}
          range
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            title="Select"
            containerStyle={{
              height: 54,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 5,
              borderRadius: 12,
              padding: 6,
              lineHeight: 16,
              fontSize: 12,
              fontWeight: '600',
              marginRight: 30,
            }}
            onPress={() => setDatePickerModal(false)}
            titleSize={18}
            backgroundColor="#21C17C"
            titleColor="white"
            width="35%"
          />
          <Button
            title="Cancel"
            containerStyle={{
              height: 54,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 5,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: '#21C17C',
              padding: 6,
              lineHeight: 16,
              fontSize: 12,
              fontWeight: '600',
            }}
            onPress={() => setDatePickerModal(false)}
            titleSize={18}
            backgroundColor="#fff"
            titleColor="#000"
            width="35%"
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
});
