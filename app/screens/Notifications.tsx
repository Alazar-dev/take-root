import { View, ScrollView } from 'react-native';
import Header from '../layouts/Header';
import { CustomTextField } from '../components/TextFields';
import SimpleNotification from '../components/notifications/SimpleNotification';
import DetailedNotification from '../components/notifications/DetailedNotification';
export default function Notifications() {
  return (
    <View style={{ backgroundColor: '#fafafa' }}>
      <Header label="Notifications" />
      <ScrollView style={{ padding: 20, marginBottom: 110 }}>
        <CustomTextField
          label="19 Jun, 22"
          color="#9CA9A5"
          fontSize={14}
          fontWeight="500"
          textAlign="right"
        />
        <SimpleNotification />
        <SimpleNotification />
        <DetailedNotification />
        <SimpleNotification />
        <DetailedNotification />
      </ScrollView>
    </View>
  );
}
