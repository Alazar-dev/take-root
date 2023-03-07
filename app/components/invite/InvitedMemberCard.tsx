import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Avatar from '../../assets/avatar.jpg';

import { CustomTextField } from '../TextFields';

export default function InvitedMemberCard({ member, deleteMember }) {
  return (
    <View
      key={member.id}
      style={styles.row}>
      <Image
        source={
          member?.photoUrl != null
            ? {
                uri: member?.photoUrl,
              }
            : Avatar
        }
        style={styles.pic}
      />
      <View>
        <View style={styles.nameContainer}>
          <CustomTextField
            label={member.name}
            fontSize={15}
            fontWeight="600"
            marginLeft={15}
          />
        </View>
        <View style={styles.end}>
          <CustomTextField
            label={member.status}
            marginTop={8}
            marginBottom={8}
            marginLeft={5}
            backgroundColor="#D7F8EA"
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          deleteMember(member);
        }}>
        <MaterialCommunityIcons
          color="#21C17C"
          size={20}
          name="trash-can-outline"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 16,
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },

  end: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
  icon: {
    height: 28,
    width: 28,
  },
});
