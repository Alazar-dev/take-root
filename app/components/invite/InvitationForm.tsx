import React, { useState } from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { CustomTextField } from '../TextFields';
import styles from '../../screens/Auth/style';
import { Button } from '../index';
import { InputField } from '../Inputs';
import Header from '../../layouts/Header';
const InvitationForm = ({ navigation }) => {
  const [inviteName, setInviteName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  return (
    <>
      <Header label="Invite New Member" />
      <View style={[styles.container, { backgroundColor: '#fff' }]}>
        <View style={styles.content}>
          <View style={styles.formGroup}>
            <View style={styles.labelContainer}>
              <MaterialIcons
                name="person-outline"
                size={20}
                color="#84E5C2"
                style={styles.rightIcon}
              />
              <CustomTextField label="Name" />
            </View>
            <InputField
              inputStyle={styles.inputStyle}
              containerStyle={{
                backgroundColor: '#fff',
                marginBottom: 20,
              }}
              placeholder="Enter name"
              autoCapitalize="none"
              keyboardType="default"
              textContentType="name"
              autoFocus={true}
              value={inviteName}
              onChangeText={(text) => setInviteName(text)}
            />
          </View>
          <View style={styles.formGroup}>
            <View style={styles.labelContainer}>
              <MaterialCommunityIcons
                name="email-outline"
                size={20}
                color="#84E5C2"
                style={styles.rightIcon}
              />
              <CustomTextField label="Email" />
            </View>
            <InputField
              inputStyle={styles.inputStyle}
              containerStyle={{
                backgroundColor: '#fff',
                marginBottom: 20,
              }}
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={inviteEmail}
              onChangeText={(text) => setInviteEmail(text)}
            />
          </View>

          <Button
            onPress={() =>
              inviteName !== ' ' &&
              inviteEmail !== '' &&
              navigation.navigate('InvitationPortal', {
                inviteName: inviteName,
                inviteEmail: inviteEmail,
              })
            }
            backgroundColor="#f57c00"
            title="Invite"
            titleColor="#fff"
            titleSize={20}
            containerStyle={[styles.loginButton, { marginBottom: 10 }]}
          />
        </View>
      </View>
    </>
  );
};

export default InvitationForm;
