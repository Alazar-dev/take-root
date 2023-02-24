import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { CustomTextField } from '../TextFields';

export default function MemberCard({ teamMember }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 14,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '95%',
        marginTop: 10,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('TeamMemberDetail', { teamMember: teamMember })}
        style={styles.main}>
        <View style={styles.avatarInner}>
          <Avatar
            size={52}
            rounded
            source={{
              uri: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.name}>{teamMember.name}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '64%',
              }}>
              <Text style={styles.status}>{teamMember.status}</Text>
              <CustomTextField
                label={moment(teamMember.createdAt).format('ll')}
                color="#21C17C"
                fontSize={14}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  avatarInner: {
    flexDirection: 'row',
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  people: {
    fontFamily: 'Poppins-Regular',
    color: '#737F8F',
  },
  status: {
    fontFamily: 'Poppins-Regular',
    color: '#979797',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: '500',
  },
});
