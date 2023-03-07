import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../index';
import AdminSetting from './adminSettings';
import PersonalSettings from './personalSettings';
import { CustomTextField } from '../TextFields';
const TabHeader = ({ activeTab, setActiveTab, TabEnum }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setActiveTab(TabEnum.PERSONAL)}
          title={ButtonTitle(TabEnum.PERSONAL)}
          titleColor={activeTab === TabEnum.PERSONAL ? styles.activeButton.color : '#050D22'}
          titleSize={16}
          containerStyle={[styles.button, activeTab === TabEnum.PERSONAL ? styles.activeButton : null]}
        />

        <Button
          onPress={() => setActiveTab(TabEnum.ADMIN)}
          title={ButtonTitle(TabEnum.ADMIN)}
          titleColor={activeTab === TabEnum.ADMIN ? styles.activeButton.color : '#050D22'}
          titleSize={16}
          containerStyle={[styles.button, activeTab === TabEnum.ADMIN ? styles.activeButton : null]}
        />
      </View>
      <View>{activeTab === TabEnum.PERSONAL ? <PersonalSettings /> : <AdminSetting />}</View>
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  button: {
    width: 'auto',
    height: 30,
    borderRadius: 1,
    backgroundColor: '#F8F8F8',
  },
  activeButton: {
    borderBottomWidth: 1,
    borderBottomColor: '#21c17c',
    color: '#21C17C',
    textDecorationLine: 'underline',
  },
});
const ButtonTitle = (title: string) => (
  <CustomTextField
    label={title}
    fontSize={16}
    fontWeight="900"
    lineHeight={24}
  />
);
