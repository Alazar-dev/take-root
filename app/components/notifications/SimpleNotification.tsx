import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { CustomTextField } from '../TextFields';
import { useNavigation } from '@react-navigation/native';

const data = {
  name: 'Alazar',
  description: 'A simple notification',
  imageUrl: '../../assets/avatar.jpg',
  believer: 'Yes',
};

export default function SimpleNotification() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 15,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 16,
      }}>
      <Image
        style={[styles.image]}
        source={require('../../assets/avatar.jpg')}
      />
      <View style={styles.detail}>
        <Text style={styles.name}>{data.name}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('InvitationForm')}
          style={{ backgroundColor: '#D7F8EA', padding: 5 }}>
          <CustomTextField
            label="Add New Team Member"
            color="#21C17C"
            fontSize={12}
            fontWeight="600"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 36,
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 12,
    fontWeight: '200',
    lineHeight: 14,
    marginHorizontal: 8,
    marginTop: 5,
    color: '#737F8F',
  },
  detail: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
  },
});
