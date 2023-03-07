import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Modal,
  Image,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { CustomButton } from "../Buttons";
import { CustomTextField } from "../TextFields";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import DropdownComponent from "../DropDownComponent";
import Header from "../../layouts/Header";
import DashboardMemberDetail from "../dasboard/DashboardMemberDetail";
import DashboardTagComponent from "../dasboard/DashboardTagComponent";
import Button from "../dButton";
import CustomNotificationModal from "../CustomNotificationModal";
import ActionMap from "./ActionMap";

const ActionDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [completeModalVisible, setCompleteModalVisible] = useState(false);
  const [method, setMethod] = useState(item?.method);
  const [encounterDate, setEncounterDate] = useState(item?.encounterDate);
  const [encounterModal, setEncounterModal] = useState(false);
  const [followUpDate, setFollowUpDate] = useState(item?.followupDate);
  const [followUpModal, setFollowUpModal] = useState(false);
  const [comment, setComment] = useState(item?.note);
  const [location, setLocation] = useState(item?.location);
  const [locationInput, setLocationInput] = useState("");
  const [actionType, setActionType] = useState(item?.actionType);

  const saveLocation = (data) => setLocation(data);
  const bgRequired = "#84E5C2";

  async function updateInfo() {
    navigation.navigate("Dashboard");
  }
  async function completeAction() {
    navigation.navigate("Dashboard");
  }

  async function deleteAction() {
    navigation.navigate("Dashboard");
  }
  function clearAll() {
    setMethod("");
    setLocation("");
    // @ts-ignore
    setEncounterDate("");
    // @ts-ignore
    setFollowupDate("");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header label="Action Details" />
        <View>
          <View style={{ margin: 8 }}>
            <DashboardMemberDetail userData={item} />
          </View>
          <DashboardTagComponent
            topics={[
              {
                title: "Need follow up",
              },
              {
                title: "Single father",
              },
              {
                title: "2019",
              },
            ]}
          />
        </View>
        <View style={[styles.inputContainer, { zIndex: 1 }]}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="ios-person-outline" size={20} color="#84E5C2" />
            <CustomTextField label="Method" color="#21c17c" marginLeft={5} />
          </View>
          <DropdownComponent
            placeholder="Method"
            data={[
              { label: "In person", value: "In person" },
              { label: "Email", value: "Email" },
              { label: "Phone call", value: "Phone call" },
            ]}
            value={method}
            setValue={setMethod}
            itemTextFontSize={16}
            mt={5}
            borderWidth={0.5}
            borderRadius={12}
            borderColor="#21C17C"
            w={385}
            pt={8}
            pb={8}
            pl={10}
            iconColor="#21C17C"
          />
        </View>
        <View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <AntDesign name="calendar" size={20} color="#84E5C2" />
            <CustomTextField
              label="Date of Encounter"
              color="#21c17c"
              marginLeft={5}
            />
          </View>

          <Button
            title={
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <CustomTextField
                  label={encounterDate}
                  color="#000"
                  fontSize={16}
                  fontWeight="600"
                  marginRight={250}
                />

                <AntDesign name="calendar" size={20} color="#84E5C2" />
              </View>
            }
            containerStyle={{
              justifyContent: "center",
              alignItems: "flex-end",
              width: "100%",
              marginBottom: 20,
              marginTop: 10,
              borderRadius: 12,
              paddingHorizontal: 6,
              lineHeight: 16,
              fontSize: 12,
              fontWeight: "600",
              borderColor: "#84E5C2",
              borderWidth: 1,
              paddingTop: 12,
              paddingBottom: 12,
            }}
            onPress={() => setEncounterModal(true)}
            titleSize={12}
            backgroundColor="white"
            titleColor="green"
          />
          <Modal visible={encounterModal} animationType="fade">
            <Calendar
              style={{ borderRadius: 10, elevation: 4, margin: 40 }}
              onDayPress={(date) => {
                setEncounterDate(date.dateString);
                setEncounterModal(false);
              }}
            />
          </Modal>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.commentContainer}>
            <Image source={require("../../assets/action_type.png")} />
            <CustomTextField
              label="Action Type"
              color="#21c17c"
              marginLeft={5}
            />
          </View>
          <TextInput
            style={{
              borderColor: `${bgRequired}`,
              marginTop: 10,
              marginBottom: 12,
              borderWidth: 1,
              padding: 12,
              borderColor: "#84E5C2",
              borderRadius: 12,
              fontSize: 16,
              paddingLeft: 20,
              fontWeight: "600",
            }}
            placeholder="Start writing a comment or notes"
            textAlignVertical="top"
            value={actionType}
            onChangeText={setActionType}
          />
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="calendar" size={20} color="#84E5C2" />
            <CustomTextField
              label="Follow-up Date"
              color="#21c17c"
              marginLeft={5}
            />
          </View>
          <Button
            title={
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <CustomTextField
                  label={followUpDate}
                  color="#000"
                  fontSize={16}
                  fontWeight="600"
                  marginRight={250}
                />

                <AntDesign name="calendar" size={20} color="#84E5C2" />
              </View>
            }
            containerStyle={{
              justifyContent: "center",
              alignItems: "flex-end",
              width: "100%",
              marginTop: 10,
              marginBottom: 20,
              borderRadius: 6,
              paddingHorizontal: 6,
              paddingVertical: 12,
              lineHeight: 16,
              fontSize: 12,
              fontWeight: "600",
              borderColor: "#84E5C2",
              borderWidth: 1,
            }}
            onPress={() => setFollowUpModal(true)}
            titleSize={12}
            backgroundColor="white"
            titleColor="green"
          />
          <Modal visible={followUpModal} animationType="fade">
            <Calendar
              style={{ borderRadius: 10, elevation: 4, margin: 40 }}
              onDayPress={(date) => {
                setFollowUpDate(date.dateString);
                setFollowUpModal(false);
              }}
            />
          </Modal>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.commentContainer}>
            <MaterialCommunityIcons
              name="note-edit-outline"
              size={20}
              color="#84E5C2"
            />
            <CustomTextField
              label="Comment or notes"
              color="#21c17c"
              marginLeft={5}
            />
          </View>
          <TextInput
            style={[styles.input, { borderColor: `${bgRequired}` }]}
            placeholder="Start writing a comment or notes"
            multiline={true}
            textAlignVertical="top"
            value={comment}
            onChangeText={setComment}
          />
        </View>

        <View style={styles.inputContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="ios-location-outline" size={24} color="#84E5C2" />
              <CustomTextField
                label="Location"
                color="#21C17C"
                marginRight={10}
                marginLeft={10}
              />
            </View>
            <Button
              title="Select on the map"
              containerStyle={styles.btnMap}
              // @ts-ignore
              onPress={() => setLocationModal(true)}
              titleSize={12}
              backgroundColor="#21C17C"
              titleColor="white"
            />
            <Modal visible={locationModal} animationType="fade">
              <ActionMap
                saveLocation={saveLocation}
                hideModal={() => setLocationModal(!locationModal)}
              />
            </Modal>
          </View>
          <TextInput
            style={styles.input}
            // @ts-ignore
            value={location ? location : { locationInput }}
            onChangeText={(e) =>
              location ? setLocation(e) : setLocationInput(e)
            }
            placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
            multiline={true}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.buttons}>
          <CustomButton
            label="Update info"
            backgroundColor="#21C17C"
            color="#fff"
            fontSize={18}
            onPress={() =>
              updateInfo().then(() => {
                setModalVisible(true);
                clearAll();
              })
            }
            w="46%"
          />
          <CustomButton
            label="Completed"
            backgroundColor="#21C17C"
            color="#fff"
            fontSize={18}
            onPress={() =>
              completeAction().then(() => {
                setCompleteModalVisible(true);
                clearAll();
              })
            }
            w="46%"
          />
        </View>
        <CustomButton
          label="Delete"
          backgroundColor="#FF3D00"
          color="#fff"
          fontSize={18}
          mt={10}
          onPress={() =>
            deleteAction().then(() => {
              setDeleteModal(true);
              clearAll();
            })
          }
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CustomNotificationModal
          hideModal={() => setModalVisible(!modalVisible)}
          title="Done"
          text="Updated action successfully"
        />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModal}
        onRequestClose={() => {
          setModalVisible(!deleteModal);
        }}
      >
        <CustomNotificationModal
          hideModal={() => setDeleteModal(!deleteModal)}
          title="Done"
          text="Deleted action successfully"
        />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={completeModalVisible}
        onRequestClose={() => {
          setCompleteModalVisible(!completeModalVisible);
        }}
      >
        <CustomNotificationModal
          hideModal={() => setCompleteModalVisible(!completeModalVisible)}
          title="Done"
          text="Completed action"
        />
      </Modal>
    </ScrollView>
  );
};

export default ActionDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 16,
    padding: 8,
  },
  input: {
    height: 160,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#84E5C2",
    borderRadius: 12,
    fontSize: 16,
    fontWeight: "600",
  },
  inputLocation: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#84E5C2",
    borderRadius: 16,
  },
  inputContainer: {
    marginVertical: 20,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  commentContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnMap: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    marginBottom: 20,
    borderColor: "#84E5C2",
    borderRadius: 6,
    padding: 6,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: "600",
  },
});
