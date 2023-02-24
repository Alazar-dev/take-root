import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Modal } from 'react-native';
import { CustomTextField } from '../TextFields';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import EditPersonModal from '../EditPersonModal';

export default function Header({ label, profilePic, people, age, saveTags, tagStatus }) {
  const [editMemberModal, setEditMemberModal] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.headerContainer}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="left"
              size={22}
              color="#84E5C2"
              style={{ marginTop: 12, marginLeft: 22 }}
            />
          </TouchableOpacity>
        </View>
        <CustomTextField
          label={label}
          fontSize={18}
          marginTop={12}
          fontWeight="700"
        />
        <View>
          <TouchableOpacity onPress={() => setEditMemberModal(true)}>
            <Feather
              style={{ marginRight: 20, marginTop: 12 }}
              name="edit-3"
              size={24}
              color="#84E5C2"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        transparent
        visible={editMemberModal}
        onRequestClose={() => setEditMemberModal(!editMemberModal)}
        animationType="slide">
        <EditPersonModal
          profilePic={profilePic}
          people={people}
          age={age}
          saveTags={saveTags}
          tagStatus={tagStatus}
          hideModal={() => setEditMemberModal(false)}
          navigation={navigation}
          title="Title"
          text="This is sample text"
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingTop: 22,
    paddingBottom: 12,
    alignItems: 'center',
  },
});
