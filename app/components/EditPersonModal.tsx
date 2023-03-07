import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { CustomTextField } from './TextFields';
import { AntDesign, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function EditPersonModal({ hideModal, profilePic, people, age }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity
          style={{
            padding: 8,
            position: 'absolute',
            right: 4,
            top: -36,
            backgroundColor: '#D7F8EA',
            height: 30,
            width: 30,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            hideModal();
          }}>
          <MaterialCommunityIcons
            name="close"
            size={13}
            color="#21c17c"
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <View style={{ marginLeft: 100 }} />
          <View style={{ justifyContent: 'flex-start', marginRight: 100 }}>
            <Image
              source={profilePic ? { uri: profilePic } : require('../assets/avatar.jpg')}
              style={styles.image}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
            <CustomTextField
              label={people.believer}
              fontSize={14}
              color="#21c17c"
              marginRight={10}
            />
            <FontAwesome
              name="edit"
              size={13}
              color="black"
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, justifyContent: 'center' }}>
          <CustomTextField
            label={people.name}
            fontWeight="700"
            fontSize={22}
            textAlign="center"
            color="#050D22"
            marginRight={10}
          />
          <FontAwesome
            name="edit"
            size={13}
            color="black"
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={styles.labelContainer}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color="#84E5C2"
            />
            <CustomTextField
              label=" Email: "
              color="#21C17C"
              fontSize={14}
              marginHorizontal={10}
            />
            <CustomTextField
              label={people.email}
              lineHeight={21}
              fontSize={14}
              color="#050d22"
            />
          </View>
          <FontAwesome
            name="edit"
            size={13}
            color="black"
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={styles.labelContainer}>
            <Feather
              name="phone-call"
              size={20}
              color="#84E5C2"
            />
            <CustomTextField
              label=" Phone number: "
              color="#21c17c"
              marginHorizontal={10}
            />
            <CustomTextField
              label={people.phone}
              lineHeight={21}
              fontSize={14}
              textAlign="left"
              color="#050d22"
            />
          </View>
          <FontAwesome
            name="edit"
            size={13}
            color="black"
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={styles.labelContainer}>
            <Ionicons
              name="ios-location-outline"
              size={25}
              color="#84E5C2"
            />
            <CustomTextField
              label=" Address: "
              color="#21c17c"
              marginHorizontal={10}
            />
            <CustomTextField
              label={people.location}
              lineHeight={21}
              fontSize={14}
              textAlign="left"
              color="#050d22"
            />
          </View>
          <FontAwesome
            name="edit"
            size={13}
            color="black"
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={styles.labelContainer}>
            <AntDesign
              name="calendar"
              size={20}
              color="#84E5C2"
            />
            <CustomTextField
              label=" Age/DOB: "
              color="#21c17c"
              marginHorizontal={10}
            />
            <CustomTextField
              label={age}
              lineHeight={21}
              fontSize={14}
              textAlign="left"
              color="#050d22"
            />
          </View>
          <FontAwesome
            name="edit"
            size={13}
            color="black"
            style={{ fontWeight: '700' }}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={styles.labelContainer}>
            <FontAwesome5
              name="church"
              size={20}
              color="#84E5C2"
            />
            <CustomTextField
              label=" Believer: "
              color="#21c17c"
              marginHorizontal={10}
            />
            <CustomTextField
              label={people.believer}
              lineHeight={21}
              fontSize={14}
              textAlign="left"
              color="#050d22"
            />
          </View>
          <FontAwesome
            name="edit"
            size={13}
            color="black"
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={styles.labelContainer}>
            <Ionicons
              name="ios-male-female-sharp"
              size={20}
              color="#84E5C2"
            />
            <CustomTextField
              label=" Gender: "
              color="#21c17c"
              marginHorizontal={10}
            />
            <CustomTextField
              label={people.gender}
              lineHeight={21}
              fontSize={14}
              textAlign="left"
              color="#050d22"
            />
          </View>
          <FontAwesome
            name="edit"
            size={13}
            color="black"
          />
        </View>
        <View style={{ marginVertical: 8 }}>
          <CustomTextField
            label="Description"
            fontSize={14}
            fontWeight="700"
            marginBottom={3}
          />
          <CustomTextField
            label={people.description}
            color="#737F8"
            fontSize={12}
            fontWeight="400"
            width="97%"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
  },
  profileContainer: {
    marginTop: 142,
    marginBottom: 42,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 16,
    // flex: 1,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    maxWidth: '80%',
    marginVertical: 8,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
  image: {
    width: 94,
    height: 94,
    borderRadius: 72,
    position: 'absolute',
    top: -24,
  },
});
