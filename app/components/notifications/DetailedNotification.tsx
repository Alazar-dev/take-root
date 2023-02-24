import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import { CustomTextField } from '../TextFields';

const userData = {
  followupDate: 'Dec 8, 2022',
  status: 'OverDue',
  person: { name: 'Alazar' },
};
export default function DetailedNotification() {
  // @ts-ignore

  let date1 = moment();
  let d2 = moment(userData.followupDate.split('/').join('-'));
  let status = d2.diff(date1, 'seconds');
  let newStat = status < 0 ? 'OverDue' : 'Follow Up';
  if (userData.status === 'Completed') {
    newStat = 'Completed';
  } else if (userData.status === 'Draft') {
    newStat = 'Draft';
  }

  const bgStatus = newStat === 'OverDue' ? 'rgba(255, 0, 46, 0.2)' : newStat === 'Completed' ? '#BDF3DC' : '#FFF1CE';
  const textColor =
    newStat === 'OverDue' ? '#FF002E' : newStat === 'Completed' ? '#21C17C' : newStat === 'Draft' ? 'grey' : '#FF9F1C';
  const taskIcon =
    newStat === 'OverDue' ? (
      <AntDesign
        name="leftsquare"
        size={16}
        color={textColor}
      />
    ) : newStat === 'Completed' ? (
      <AntDesign
        name="checksquare"
        size={16}
        color={textColor}
      />
    ) : (
      <MaterialCommunityIcons
        name="dots-horizontal-circle"
        size={16}
        color={textColor}
      />
    );
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.topBar,
          {
            backgroundColor: `${textColor}`,
            borderColor: `${textColor}`,
          },
        ]}
      />
      <View style={styles.topContainer}>
        <Text style={{ lineHeight: 20, fontSize: 14, fontWeight: '600' }}>#63706</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderRadius: 8,
            paddingHorizontal: 15,
            backgroundColor: `${bgStatus}`,
            alignItems: 'center',
          }}>
          <View style={{ marginRight: 5 }}>{taskIcon}</View>
          <Text style={[styles.topContainerFont, { color: `${textColor}` }]}>{newStat}</Text>
        </View>
      </View>
      <CustomTextField
        label="Contact Darrell, ask if he needs food or clothes. Offer other help."
        fontSize={16}
        fontWeight="600"
        paddingLeft={10}
      />
      <View style={{ paddingLeft: 15 }}>
        <View style={{ flexDirection: 'row', marginVertical: 8 }}>
          <CustomTextField
            label="Assign to:"
            color="#737F8F"
            fontSize={12}
          />
          <CustomTextField
            label="Brook Simmons"
            color="#21C17C"
            fontSize={12}
            fontWeight="600"
            paddingLeft={10}
          />
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 8 }}>
          <CustomTextField
            label="Executor:"
            color="#737F8F"
            fontSize={12}
          />
          <CustomTextField
            label="Annette Black"
            color="#FF002E"
            fontSize={12}
            fontWeight="600"
            paddingLeft={10}
          />
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 8 }}>
          <CustomTextField
            label="Person:"
            color="#737F8F"
          />
          <CustomTextField
            label="Darell Steward"
            color="#FF002E"
            fontSize={12}
            fontWeight="600"
            paddingLeft={10}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 0,
    borderRadius: 5,
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 20,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    fontSize: 14,
    fontWeight: '900',
    size: 20,
    marginVertical: 10,
  },
  topContainerFont: {
    color: '#21C17C',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    marginLeft: 2,
  },
  logo: {
    width: 52,
    height: 52,
    borderRadius: 45,
  },
  bottomText: {
    fontWeight: '600',
    lineHeight: 20,
    fontSize: 16,
    marginVertical: 8,
  },
  topBar: {
    height: 6,

    width: '100%',
    alignSelf: 'center',
    borderTopWidth: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
});
