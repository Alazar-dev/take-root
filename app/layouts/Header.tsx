import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import { CustomTextField } from '../components/TextFields';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderModal from '../components/HeaderModal';

export default function Header({ label }) {
  const route = useRoute();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const homeStatus = label == 'Home';

  return (
    <>
      <View style={styles.headerContainer}>
        <View>
          {!homeStatus ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="left"
                size={18}
                color="#21C17C"
                style={{ marginTop: 12, marginLeft: 22 }}
              />
            </TouchableOpacity>
          ) : (
            <CustomTextField marginRight={40} />
          )}
        </View>
        <CustomTextField
          label={label}
          fontSize={18}
          marginTop={12}
          fontWeight="600"
        />
        <View>
          {route.name === 'Dashboard' || route.name === 'Action' ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}
              style={{
                marginTop: 12,
                marginRight: 22,
                paddingHorizontal: 15,
              }}>
              <Ionicons
                name="ios-notifications"
                size={21}
                color="#21C17C"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image
                source={require('../assets/menu.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 5,
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={{ position: 'absolute', top: 0 }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <HeaderModal
            hideModal={() => setModalVisible(!modalVisible)}
            navigation={navigation}
          />
        </Modal>
      </View>
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
