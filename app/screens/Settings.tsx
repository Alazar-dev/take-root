import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TabHeader from '../components/settings/TabHeader';
import Header from '../layouts/Header';
export enum TabEnum {
  'PERSONAL' = 'Personal Settings',
  'ADMIN' = 'Admin Settings',
}
export default function Settings() {
  const [activeTab, setActiveTab] = useState(TabEnum.PERSONAL);

  return (
    <View style={styles.container}>
      <Header label="Settings" />
      <TabHeader
        TabEnum={TabEnum}
        {...{ activeTab, setActiveTab }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topHeader: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    marginTop: 12,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fafafa',
  },
});
