import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Ionicons, Octicons, Entypo, FontAwesome5, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ToggleInput } from '../Inputs';
import DropdownComponent from '../DropDownComponent';
import { CustomTextField } from '../TextFields';
import CustomTypeModal from '../CustomTypeModal';

export default function Settings() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [team, setTeam] = useState('');
  const [customTypeModal, setCustomTypeModal] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView style={{ backgroundColor: '#fafafa' }}>
      <View style={styles.cloud}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons
            name="md-cloud-outline"
            size={24}
            color="#21C17C"
          />
          <CustomTextField
            label="Cloud"
            color="#21C17C"
            fontSize={14}
            paddingLeft={7}
          />
        </View>
        <ToggleInput
          isEnabled={isEnabled}
          toggleSwitch={toggleSwitch}
          label="Sync to cloud"
        />
      </View>
      <View style={[styles.cloud, { zIndex: 1 }]}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Octicons
            name="shield-lock"
            size={24}
            color="#21C17C"
          />
          <CustomTextField
            label="Default privacy setting"
            color="#21C17C"
            fontSize={14}
            paddingLeft={7}
          />
        </View>
        <DropdownComponent
          data={[
            { label: 'Myself', value: 'myself' },
            { label: 'My Team', value: 'my_team' },
            { label: 'My organization', value: 'my_organization' },
          ]}
          value={team}
          setValue={setTeam}
          borderWidth={0.5}
          borderRadius={12}
          borderColor="#21C17C"
          mt={10}
          mb={20}
          w={345}
          pt={8}
          pb={8}
          pl={10}
          iconColor="#21C17C"
          itemTextFontSize={16}
        />
      </View>
      <View style={[styles.cloud, { zIndex: 1 }]}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Octicons
            name="shield-lock"
            size={24}
            color="#21C17C"
          />
          <CustomTextField
            label="Custom Type"
            color="#21C17C"
            fontSize={14}
            paddingLeft={7}
          />
          <View style={{ marginLeft: 40, marginRight: 10 }}>
            <TouchableOpacity onPress={() => setCustomTypeModal(true)}>
              <FontAwesome5
                name="edit"
                size={20}
                color="#000"
              />
            </TouchableOpacity>
          </View>
          <Feather
            name="plus-circle"
            size={20}
            color="#000"
          />
        </View>
        <DropdownComponent
          data={[{ label: 'Bible Study', value: 'bible_study' }]}
          value={team}
          setValue={setTeam}
          itemTextFontSize={16}
          borderWidth={0.5}
          borderRadius={12}
          borderColor="#21C17C"
          mt={10}
          mb={20}
          w={345}
          pt={8}
          pb={8}
          pl={10}
          iconColor="#21C17C"
        />
      </View>
      <View style={styles.cloud}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons
            name="people-outline"
            size={24}
            color="#21C17C"
          />
          <CustomTextField
            label="My Team"
            color="#21c17c"
            fontSize={14}
            paddingLeft={7}
            fontWeight="500"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('TeamAdmin')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            borderWidth: 0.5,
            borderRadius: 16,
            borderColor: '#21C17C',
            marginTop: 5,
          }}>
          <CustomTextField
            label="Manage Team"
            fontSize={16}
          />
          <Entypo
            name="chevron-small-right"
            size={24}
            color="#21C17C"
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginLeft: 15,
          marginRight: 15,
          marginTop: '2%',
          marginBottom: '55%',
          backgroundColor: '#fff',
          padding: 10,
        }}>
        <TouchableOpacity style={styles.save}>
          <CustomTextField
            label="Save Changes"
            fontWeight="600"
            color="#fff"
            textAlign="center"
            fontSize={18}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cancel}>
          <CustomTextField
            label="Cancel Changes"
            fontWeight="600"
            color="#21C17C"
            textAlign="center"
            fontSize={18}
          />
        </TouchableOpacity>
      </View>

      <Modal
        visible={customTypeModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setCustomTypeModal(!customTypeModal);
        }}
        style={{ width: '90%' }}>
        <CustomTypeModal
          hideModal={() => setCustomTypeModal(false)}
          navigation={navigation}
          text="Bible Study"
          title="Custom Type"
        />
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cloud: {
    backgroundColor: '#fff',
    marginTop: 14,
    padding: 10,
    marginRight: 12,
    marginLeft: 12,
    borderRadius: 16,
  },
  save: {
    backgroundColor: '#21C17C',
    width: '100%',
    padding: 14,
    borderRadius: 10,
  },
  cancel: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#21C17C',
  },
});
