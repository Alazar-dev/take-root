import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../layouts/Header";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Button from "../components/dButton";
import { CustomTextField } from "../components/TextFields";
import CustomNotificationModal from "../components/CustomNotificationModal";
import moment from "moment";
import CustomDateInput from "../components/CustomDateInput";
import CustomLocationPicker from "../components/CustomLocationPicker";
import DropdownComponent from "../components/DropDownComponent";
import Avatar from "../assets/avatar.jpg";
import { CustomButton } from "../components/Buttons";

import { teams, people } from "../data";

const Action = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [draftModalVisible, setDraftModalVisible] = useState(false);
  const [showFollowupModal, setShowFollowupModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);

  const [method, setMethod] = useState("");
  const [person, setPerson] = useState({});
  const [actionType, setActionType] = useState("");
  const [description, setDescription] = useState(null);
  const [location, setLocation] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [encounterDate, setEncounterDate] = useState(0);
  const [followupDate, setFollowupDate] = useState(0);
  const [team, setTeam] = useState("");
  const navigation = useNavigation();

  const saveDate = (data) => setEncounterDate(data);
  const saveLocation = (data) => setLocation(data);
  const saveFollowUpDate = (data) => setFollowupDate(data);
  const displayDate =
    encounterDate == 0 ? "__ / __" : `${moment(encounterDate).format("ll")}`;
  const displayFollowupDate =
    followupDate == 0 ? "__ / __" : `${moment(followupDate).format("ll")}`;
  useEffect(() => {
    setShowModal(false);
    setShowFollowupModal(false);
  }, [encounterDate, encounterDate, followupDate]);

  let currentDate = moment();
  let d2 = moment(displayFollowupDate.split("/").join("-"));
  let status = d2.diff(currentDate, "seconds");

  const payload = {
    method: method,
    person: person,
    actionType: actionType,
    description: description,
    location: location,
    encounterDate: displayDate,
    followupDate: displayFollowupDate,
    team: team,
    status: status < 0 ? "OverDue" : "Follow Up",
    createdAt: Date.now(),
    // userId: currentUserId,
  };
  async function addAction() {
    navigation.navigate("Dashboard");
  }

  async function saveActionDraft() {
    navigation.navigate("Dashboard");
  }

  function clearAll() {
    setMethod("");
    setPerson("");
    setActionType("");
    setDescription("");
    setLocation("");
    // @ts-ignore
    setEncounterDate("");
    // @ts-ignore
    setFollowupDate("");
    setTeam("");
  }

  return (
    <View style={styles.container}>
      <Header label="Action" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={[styles.container]}>
          <View style={styles.topBar} />
          <View style={styles.topContainer}>
            <CustomTextField label="#63722" fontSize={14} fontWeight="600" />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                padding: 3,
                borderRadius: 8,
                paddingHorizontal: 15,
                backgroundColor: "#DFE9E5",
                alignItems: "center",
              }}
            >
              <View style={{ marginRight: 5 }}>
                <FontAwesome name="pencil-square" size={16} color="#050D22" />
              </View>
              <CustomTextField
                label="Draft"
                color="#050D22"
                fontSize={12}
                fontWeight="600"
                marginLeft={2}
              />
            </View>
          </View>
          <View style={[styles.inputContainer, { zIndex: 1 }]}>
            <View style={styles.labelContainer}>
              <Ionicons name="ios-person-outline" size={20} color="#84E5C2" />
              <CustomTextField
                label="Method"
                color="#21C17C"
                fontSize={12}
                fontWeight="600"
                marginRight={10}
                marginLeft={10}
              />
            </View>
            <DropdownComponent
              data={[
                { label: "In person", value: "In person" },
                { label: "Email", value: "Email" },
                { label: "Phone call", value: "Phone call" },
              ]}
              value={method}
              setValue={setMethod}
              borderWidth={0.5}
              borderRadius={8}
              borderColor="#21C17C"
              w={370}
              pt={6}
              pb={6}
              pl={10}
              iconColor="#21C17C"
            />
          </View>
          <View style={[styles.inputContainer, { zIndex: 1 }]}>
            <View style={styles.labelContainer}>
              <FontAwesome5 name="handshake" size={20} color="#84E5C2" />
              <CustomTextField
                label="Person"
                color="#21C17C"
                marginRight={10}
                marginLeft={10}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("AddPeople")}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  padding: 3,
                  borderRadius: 8,
                  paddingHorizontal: 15,
                  backgroundColor: "#DFE9E5",
                  alignItems: "center",
                }}
              >
                <View style={{ marginRight: 5 }}>
                  <FontAwesome name="pencil-square" size={16} color="#050D22" />
                </View>
                <CustomTextField
                  label="Add New Person"
                  color="#050D22"
                  fontSize={12}
                  fontWeight="600"
                  marginLeft={6}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <DropdownComponent
                data={people?.map((person) => ({
                  label: person.name,
                  id: person.id,
                  value: person.id,
                  imageUrl: person.imageUrl,
                  name: person.name,
                  believer: person.believer,
                }))}
                value={person}
                setValue={setPerson}
                borderWidth={0.5}
                borderRadius={8}
                borderColor="#21C17C"
                w={290}
                pt={6}
                pb={6}
                pl={10}
                iconColor="#21C17C"
              />
              <Image style={styles.pp} source={Avatar} />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <MaterialCommunityIcons
                name="note-alert-outline"
                size={20}
                color="#84E5C2"
              />
              <CustomTextField
                label="Type"
                color="#21C17C"
                marginRight={10}
                marginLeft={10}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInput
                value={actionType}
                onChangeText={(e) => setActionType(e)}
                style={styles.descriptionInput}
                placeholder="Action Type"
                multiline={false}
                textAlignVertical="top"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <MaterialIcons name="description" size={20} color="#84E5C2" />
              <CustomTextField
                label="Description"
                color="#21C17C"
                marginRight={10}
                marginLeft={10}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInput
                value={description}
                onChangeText={(e) => setDescription(e)}
                style={styles.descriptionInput}
                placeholder="Met with John, gave him clothes. Offered an overnight stay in the community."
                multiline={true}
                textAlignVertical="top"
              />
            </View>
          </View>
          <CustomLocationPicker
            locationModal={locationModal}
            setLocationModal={setLocationModal}
            locationInput={locationInput}
            setLocationInput={setLocationInput}
            saveLocation={saveLocation}
            location={location}
          />

          <CustomDateInput
            label="Date of Encounter"
            dateValue={displayDate}
            showModal={showModal}
            setShowModal={setShowModal}
            saveDate={saveDate}
          />
          <CustomDateInput
            label="Follow-up Date"
            dateValue={displayFollowupDate}
            showModal={showFollowupModal}
            setShowModal={setShowFollowupModal}
            saveDate={saveFollowUpDate}
          />
          <View style={[styles.inputContainer, { zIndex: 1 }]}>
            <View style={styles.labelContainer}>
              <Ionicons name="md-people-outline" size={20} color="#84E5C2" />
              <CustomTextField
                label="Team"
                color="#21C17C"
                marginRight={10}
                marginLeft={10}
              />
            </View>
            <DropdownComponent
              data={teams?.map((team) => ({
                label: team.name,
                value: team.id,
              }))}
              value={team}
              setValue={setTeam}
              borderWidth={0.5}
              borderRadius={8}
              borderColor="#21C17C"
              w={370}
              pt={6}
              pb={6}
              pl={10}
              iconColor="#21C17C"
            />
          </View>
          <CustomButton
            br={7}
            label="Add Tags"
            w={96}
            padding={4}
            color="#fff"
            fontSize={12}
            backgroundColor="#FF9F1C"
            mt={10}
            mb={12}
          />
          <Button
            title="Submit"
            containerStyle={styles.btnSave}
            onPress={() => {
              addAction().then(() => {
                setModalVisible(true);
                clearAll();
              });
            }}
            titleSize={18}
            backgroundColor="#21C17C"
            titleColor="white"
          />
          <Button
            title="Clear All"
            containerStyle={styles.btnClear}
            onPress={() => clearAll()}
            titleSize={18}
            backgroundColor="#fff"
            titleColor="#21C17C"
          />

          <Button
            title="Save As Draft"
            containerStyle={styles.btnClear}
            onPress={() =>
              saveActionDraft().then(() => {
                setDraftModalVisible(true);
                clearAll();
              })
            }
            titleSize={18}
            backgroundColor="#fff"
            titleColor="#21C17C"
          />
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
              text="Action saved successfully"
            />
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={draftModalVisible}
            onRequestClose={() => {
              setDraftModalVisible(!draftModalVisible);
            }}
          >
            <CustomNotificationModal
              hideModal={() => setDraftModalVisible(!draftModalVisible)}
              title="Done"
              text="Action saved as draft"
            />
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Action;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    backgroundColor: "#fafafa",
    marginBottom: 50,
    borderRadius: 16,
    flex: 1,
  },
  topBar: {
    height: 6,
    width: "100%",
    alignSelf: "center",
    borderTopWidth: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: "#737F8F",
    borderColor: "#737F8F",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    fontSize: 14,
    fontWeight: "900",
    size: 20,
    marginVertical: 10,
  },
  input: {
    height: 100,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#84E5C2",
    borderRadius: 16,
  },
  inputContainer: {
    flex: 1,
    marginVertical: 10,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 6,
  },
  descriptionInput: {
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#84E5C2",
    borderRadius: 16,
    flex: 1,
    marginBottom: 10,
    flexWrap: "wrap",
  },
  btnSave: {
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 14,
    borderRadius: 12,
    padding: 6,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: "600",
  },
  btnClear: {
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#21C17C",
    borderWidth: 1,
    borderRadius: 12,
    padding: 6,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: "600",
  },
  pp: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
