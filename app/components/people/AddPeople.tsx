import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  EvilIcons,
  AntDesign,
  Foundation,
  MaterialIcons,
} from "@expo/vector-icons";
import Button from "../dButton";
import TagComponent from "../TagComponent";

import Header from "../../layouts/Header";
import CustomNotificationModal from "../CustomNotificationModal";
import ActionMap from "../actions/ActionMap";
import Avatar from "../../assets/person_placeholder.png";
// import * as ImagePicker from "expo-image-picker";
import { CustomTextField } from "../TextFields";
import { CustomButton } from "../Buttons";
const topics = [
  {
    emoji: "+",
    title: "Need follow up",
    status: false,
  },
  {
    emoji: "+",
    title: "Single father",
    status: false,
  },
  {
    emoji: "+",
    title: "2019",
    status: false,
  },
  {
    emoji: "+",
    title: "2020",
    status: false,
  },
  {
    emoji: "+",
    title: "2021",
    status: false,
  },
  {
    emoji: "+",
    title: "2022",
    status: false,
  },
  {
    emoji: "+",
    title: "Need clothes",
    status: false,
  },
  {
    emoji: "+",
    title: "Baby",
    status: false,
  },
  {
    emoji: "+",
    title: "Divorced",
    status: false,
  },
  {
    emoji: "+",
    title: "Single mom",
    status: false,
  },
  {
    emoji: "+",
    title: "Blind in one eye",
    status: false,
  },
];

const profilePics = [
  { src: require("../../assets/Frame_36839.png") },
  { src: require("../../assets/Frame_36840.png") },
  { src: require("../../assets/Frame_36841.png") },
  { src: require("../../assets/Frame_36842.png") },
];
const AddPeople = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [profilePicModal, setProfilePicModal] = useState(false);

  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [believer, setBeliever] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const saveTags = (data) => setTags(data);
  const saveLocation = (data) => setLocation(data);

  const { newTags } = route?.params || {};
  if (newTags != undefined) {
    topics.unshift(...newTags);
  }

  async function addPerson() {
    navigation.navigate("People");
  }
  const pickImage = async () => {
    // setProfilePicModal(false);
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });
    // if (!result.cancelled) {
    //   setPhoto(result.uri);
    // }
  };

  return (
    <ScrollView>
      <Header label="Add People" />
      <View style={styles.container}>
        <View style={styles.ppSection}>
          <TouchableOpacity
            // onPress={pickImage}
            onPress={() => setProfilePicModal(true)}
          >
            <Image
              style={styles.pp}
              source={photo != null ? { uri: photo } : Avatar}
            />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <Ionicons name="ios-person-outline" size={20} color="#84E5C2" />
              <Text style={{ color: "#21C17C", marginHorizontal: 10 }}>
                Name
              </Text>
            </View>

            <TextInput
              value={name}
              onChangeText={(e) => setName(e)}
              placeholder="John Smith"
              style={styles.inputs}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <MaterialCommunityIcons
                name="email-outline"
                size={20}
                color="#84E5C2"
              />
              <Text style={{ color: "#21C17C", marginHorizontal: 10 }}>
                Email
              </Text>
            </View>

            <TextInput
              value={email}
              onChangeText={(e) => setEmail(e)}
              placeholder="John_Smith@gmail.com"
              style={styles.inputs}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <Feather name="phone-call" size={20} color="#84E5C2" />
              <Text style={{ color: "#21C17C", marginHorizontal: 10 }}>
                Phone Number
              </Text>
            </View>

            <TextInput
              value={phone}
              onChangeText={(e) => setPhone(e)}
              placeholder="555-456-1265"
              style={styles.inputs}
            />
          </View>
          <View style={styles.inputContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <EvilIcons name="location" size={20} color="#84E5C2" />
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
              style={styles.inputs}
              value={location ? location : { locationInput }}
              onChangeText={(e) => setLocationInput(e)}
              placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
              multiline={true}
              textAlignVertical="top"
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <AntDesign name="calendar" size={20} color="#84E5C2" />
              <Text style={{ color: "#21C17C", marginHorizontal: 10 }}>
                Date of birth
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1 }}>
                <TextInput
                  value={birthDate}
                  onChangeText={(e) => setBirthDate(e)}
                  placeholder="DD"
                  style={styles.dateInput}
                />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  value={birthMonth}
                  onChangeText={(e) => setBirthMonth(e)}
                  placeholder="MM"
                  style={styles.dateInput}
                />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  value={birthYear}
                  onChangeText={(e) => setBirthYear(e)}
                  placeholder="YYYY"
                  style={styles.dateInput}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <MaterialCommunityIcons
              name="gender-male-female"
              size={24}
              color="#21C17C"
            />
            <CustomTextField label="Gender" color="#21c17c" paddingLeft={10} />
          </View>
          <View style={styles.genderButton}>
            <Button
              title={maleTitle}
              containerStyle={styles.buttonContainer}
              onPress={() => setGender("male")}
              titleSize={12}
              backgroundColor={gender == "male" ? "#21C17C" : "#F8F8F8"}
              titleColor={gender == "male" ? "white" : "black"}
            />
            <Button
              title={femaleTitle}
              containerStyle={styles.buttonContainer}
              onPress={() => setGender("female")}
              titleSize={12}
              backgroundColor={gender == "female" ? "#21C17C" : "#F8F8F8"}
              titleColor={gender == "female" ? "white" : "black"}
            />
          </View>
          <View style={styles.inputContainer}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <MaterialCommunityIcons
                name="hands-pray"
                size={24}
                color="#21C17C"
              />
              <CustomTextField
                label="Believer"
                color="#21c17c"
                paddingLeft={10}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Button
                title="Unknown"
                containerStyle={styles.buttonContainer}
                onPress={() => setBeliever("Unknown")}
                titleSize={12}
                backgroundColor={believer == "Unknown" ? "#21C17C" : "#F8F8F8"}
                titleColor={believer == "Unknown" ? "white" : "black"}
              />
              <Button
                title="Yes"
                containerStyle={styles.buttonContainer}
                onPress={() => setBeliever("Believer")}
                titleSize={12}
                backgroundColor={believer == "Believer" ? "#21C17C" : "#F8F8F8"}
                titleColor={believer == "Believer" ? "white" : "black"}
              />
              <Button
                title="No"
                containerStyle={styles.buttonContainer}
                onPress={() => setBeliever("Non Believer")}
                titleSize={12}
                backgroundColor={
                  believer == "Non Believer" ? "#21C17C" : "#F8F8F8"
                }
                titleColor={believer == "Non Believer" ? "white" : "black"}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <MaterialIcons name="description" size={20} color="#84E5C2" />

              <Text style={{ color: "#21C17C", marginHorizontal: 10 }}>
                Description
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1 }}>
                <TextInput
                  value={description}
                  onChangeText={(e) => setDescription(e)}
                  multiline={true}
                  placeholder="Start writing description"
                  style={styles.descriptionInput}
                  textAlignVertical="top"
                />
              </View>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <EvilIcons name="tag" size={20} color="#84E5C2" />
              <Text style={{ color: "#21C17C", marginHorizontal: 10 }}>
                Add tags
              </Text>
            </View>

            <Button
              title="Add new tag"
              containerStyle={styles.btnMap}
              onPress={() => navigation.navigate("AddTag")}
              titleSize={12}
              backgroundColor="#21C17C"
              titleColor="white"
            />
          </View>
        </View>
        <View style={styles.TagInput}>
          <TagComponent topics={topics} saveTags={saveTags} />
        </View>
        <Button
          title="Save"
          containerStyle={styles.btnSave}
          onPress={() =>
            addPerson().then(() => {
              setModalVisible(true);
            })
          }
          titleSize={18}
          backgroundColor="#21C17C"
          titleColor="white"
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
            text="People saved successfully"
          />
        </Modal>
        <Modal
          visible={profilePicModal}
          animationType="fade"
          transparent={true}
          onRequestClose={() => {
            setProfilePicModal(!profilePicModal);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 22,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingBottom: 10,
                paddingTop: 12,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <CustomTextField
                label="Add Profile Picture"
                color="#050D22"
                fontSize={16}
                fontWeight="700"
                alignSelf="center"
                paddingBottom={25}
              />
              <View style={{ flexDirection: "row" }}>
                {profilePics.map((pic) => (
                  <Image style={styles.profilePics} source={pic.src} />
                ))}
              </View>
              <CustomButton
                label="Open Gallery"
                backgroundColor="#21C17C"
                color="#fff"
                fontSize={18}
                mt={20}
                onPress={pickImage}
                w={350}
              />
              <CustomButton
                label="Cancel"
                backgroundColor="#fff"
                color="#21C17C"
                borderWidth={2}
                borderColor="#21C17C"
                fontSize={18}
                mt={20}
                onPress={() => setProfilePicModal(false)}
                w={350}
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};
const maleTitle = (
  <Text>
    <Foundation name="male-symbol" size={14} color="white" /> Male
  </Text>
);
const femaleTitle = (
  <Text>
    <Foundation name="female-symbol" size={14} color="#737F8F" /> Female
  </Text>
);

export default AddPeople;
const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
  ppSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  pp: {
    width: 182,
    height: 182,
    borderRadius: 20,
  },
  inputs: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#21C17C",
    borderRadius: 16,
    marginVertical: 12,
    flex: 1,
    marginBottom: 10,
    flexWrap: "wrap",
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#21C17C",
    borderRadius: 16,
  },
  inputContainer: {
    flex: 1,
    marginVertical: 10,
  },
  inputLocation: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#84E5C2",
    borderRadius: 16,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  btnMap: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",

    width: 152,
    borderRadius: 6,
    padding: 6,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: "600",
  },
  btnSave: {
    height: 54,
    justifyContent: "center",
    alignItems: "center",

    marginVertical: 20,

    borderRadius: 12,
    padding: 6,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: "600",
  },
  buttonContainer: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",

    width: 102,
    borderRadius: 6,
    padding: 6,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 10,
  },
  dateInput: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#21C17C",
    borderRadius: 16,
    flex: 1,
    textAlign: "center",
    marginBottom: 10,
  },
  descriptionInput: {
    height: 160,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#84E5C2",
    borderRadius: 16,
    flex: 1,
    marginBottom: 10,
    flexWrap: "wrap",
  },
  genderButton: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    borderRadius: 15,
    borderColor: "green",
    padding: 15,
    borderWidth: 1,
    alignItems: "center",

    marginBottom: 10,
  },
  TagInput: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#21C17C",
    borderRadius: 16,
    flex: 1,
    textAlign: "center",
    marginBottom: 10,
  },
  profilePics: {
    height: 80,
    width: 80,
    marginHorizontal: 5,
  },
});
