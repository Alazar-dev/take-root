import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { CustomTextField } from '../components/TextFields';
import InvitedList from '../components/invite/InvitedList';
import Header from '../layouts/Header';

const Invite = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <Header label="Invite" />
      <InvitedList />
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {
            backgroundColor: '#21C17C',
            width: 150,
            marginBottom: 20,
            borderRadius: 16,
          },
        ]}
        onPress={() => navigation.navigate('InvitationForm')}>
        <View style={styles.socialButtonContent}>
          <CustomTextField
            color="#fff"
            label="send Invites"
          />
          <Image
            source={require('../assets/group.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              marginLeft: 4,
              tintColor: '#fff',
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Invite;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    right: 10,
    bottom: 80,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
