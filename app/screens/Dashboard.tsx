import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  Modal,
} from "react-native";
import moment from "moment";
import DropdownComponent from "../components/DropDownComponent";

import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import Header from "../layouts/Header";

import { useNavigation } from "@react-navigation/native";
import ListActions from "../components/dasboard/ListActions";
import PinLocation from "../components/PinLocation";
import CustomDatePicker from "../components/CustomDatePicker";
import { CustomTextField } from "../components/TextFields";
import { Ionicons } from "@expo/vector-icons";
import { teams, actions } from "../data";

const topics = [
  {
    title: "Need follow up",
  },
  {
    title: "Single father",
  },
  {
    title: "2019",
  },
  {
    title: "2020",
  },
  {
    title: "2021",
  },
  {
    title: "2022",
  },
];
const Dashboard = () => {
  // @ts-ignore
  const { user } = useContext(AuthenticatedUserContext);
  const [locationModal, setLocationModal] = useState(false);
  const [datePickerModal, setDatePickerModal] = useState(false);
  const [location, setLocation] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [team, setTeam] = useState("");
  const [actionStatus, setActionStatus] = useState("");
  const [peopleTags, setPeopleTags] = useState("");

  const navigation = useNavigation();

  const saveLocation = (data) => setLocation(data);
  moment.suppressDeprecationWarnings = true;

  const titleCase = (str) => {
    if (str != null) return str[0].toUpperCase() + str.substr(1).toLowerCase();
  };
  let currentHour = new Date().getHours();
  const welcomeMessage =
    currentHour < 12 && currentHour > 6
      ? "Good morning."
      : currentHour < 18 && currentHour > 12
      ? "Good afternoon."
      : "Good evening.";

  return (
    <SafeAreaView style={styles.container}>
      <Header label="Home" />
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <CustomTextField label="Hello " lineHeight={39} fontSize={26} />
          <CustomTextField
            label={titleCase(user?.displayName)}
            fontWeight="700"
            fontSize={26}
            lineHeight={39}
            color="#21C17C"
          />
        </View>
        <CustomTextField
          label={welcomeMessage}
          fontWeight="600"
          fontSize={14}
          lineHeight={21}
        />
      </View>

      <ScrollView>
        <View style={{ zIndex: 10 }}>
          <View style={{ paddingLeft: 20, marginTop: 30 }}>
            <CustomTextField
              label="Filter Actions"
              fontWeight="700"
              fontSize={16}
              lineHeight={24}
            />

            <View
              style={{
                flexDirection: "row",
                marginLeft: -10,
              }}
            >
              <CustomDatePicker
                datePickerModal={datePickerModal}
                setDatePickerModal={setDatePickerModal}
              />

              <PinLocation
                locationModal={locationModal}
                setLocationModal={setLocationModal}
                saveLocation={saveLocation}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingRight: 30,
              marginBottom: 40,
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 10, zIndex: 10 }}>
              <DropdownComponent
                value={team}
                setValue={setTeam}
                data={teams.map((team) => ({
                  label: team.name,
                  value: team.id,
                }))}
                bgColor="#21C17C"
                selectedTextColor="#fff"
                placeholder="My Actions"
                placeholderColor="#fff"
                iconColor="#fff"
                containerWidth={100}
                paddingVertical={1}
                placeholderTextAlign="center"
              />
            </View>
            <View style={{ marginRight: 10, zIndex: 10 }}>
              <DropdownComponent
                value={actionStatus}
                setValue={setActionStatus}
                data={["Completed", "Follow Up", "OverDue", "Draft"].map(
                  (v) => ({
                    label: v,
                    value: v,
                  })
                )}
                bgColor="#F8F8F8"
                selectedTextColor="#737F8F"
                placeholder="Status"
                placeholderColor="#737F8F"
                iconColor="#21C17C"
                containerWidth={112}
                paddingVertical={1}
                placeholderTextAlign="center"
              />
            </View>
            <DropdownComponent
              data={["Medical", "Follow Up", "Money", "Shelter"].map(
                (person) => ({
                  label: person,
                  value: person,
                })
              )}
              value={peopleTags}
              setValue={setPeopleTags}
              placeholder="Tags"
              bgColor="#F8F8F8"
              placeholderColor="#737F8F"
              selectedTextColor="#737F8F"
              iconColor="#21C17C"
              iconMarginRight={20}
              containerWidth={112}
              paddingVertical={1}
              placeholderTextAlign="center"
            />
            <Ionicons
              name="search-circle-outline"
              size={24}
              color="#21C17C"
              style={{ marginLeft: 1 }}
            />
          </View>
        </View>
        <ListActions
          person=""
          team={team}
          actionStatus={actionStatus}
          actions={actions}
          navigation={navigation}
          topics={topics}
        />
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <PinLocation
          hideModal={() => setModalVisible(!modalVisible)}
          navigation={navigation}
        />
      </Modal>
    </SafeAreaView>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    marginBottom: 100,
  },
  headerContainer: {
    marginTop: 14,
    marginHorizontal: 16,
  },
  headerRow: {
    flexDirection: "row",
  },
});
