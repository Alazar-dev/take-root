import React, { useState, useContext } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { InputField, ToggleInput } from "../Inputs";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { Button } from "../index";
import { CustomTextField } from "../TextFields";
import { useNavigation } from "@react-navigation/native";
import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider";

const user = { name: "Alazar" };

export default function PersonalSettings() {
  // const { user } = useContext(AuthenticatedUserContext);
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);
  const [teamNotifications, setTeamNotifications] = useState(false);
  const [peopleNotifications, setPeopleNotifications] = useState(false);

  const navigation = useNavigation();

  const toggleFaceId = () =>
    setFaceIdEnabled((previousState) => !previousState);
  const toggleTeamNotifications = () =>
    setTeamNotifications((previousState) => !previousState);
  const togglePeopleNotifications = () =>
    setPeopleNotifications((previousState) => !previousState);

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 20,
          paddingBottom: 10,
        }}
      >
        <Image source={require("../../assets/photo.png")} />
      </View>
      <CustomTextField textAlign="center" label={user.email} fontSize={10} />
      <View style={{ zIndex: 1, marginVertical: 20 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Ionicons name="ios-person-outline" size={24} color="#84E5C2" />
          <CustomTextField label="Name" color="#21c17c" marginLeft={5} />
        </View>
        <InputField
          containerStyle={{
            borderWidth: 1,
            borderColor: "#21C17C",
            borderRadius: 14,
            marginTop: 10,
          }}
          value={user.displayName || "Full Name"}
        />
      </View>
      <View style={{ zIndex: 1, marginVertical: 20 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Feather name="mail" size={24} color="#84E5C2" />
          <CustomTextField label="Email" color="#21c17c" marginLeft={5} />
        </View>
        <InputField
          containerStyle={{
            borderWidth: 1,
            borderColor: "#21C17C",
            borderRadius: 14,
            marginTop: 10,
          }}
          value={user.email}
        />
      </View>
      <View style={{ zIndex: 1, marginVertical: 20 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Feather name="phone-call" size={24} color="#84E5C2" />
          <CustomTextField
            label="Phone number"
            color="#21c17c"
            marginLeft={5}
          />
        </View>
        <InputField
          containerStyle={{
            borderWidth: 1,
            borderColor: "#21C17C",
            borderRadius: 14,
            marginTop: 10,
          }}
          value={user.phoneNumber || "123-456-7890"}
        />
      </View>
      <View style={[styles.card, styles.shadowProp]}>
        <View style={styles.cardContent}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={24}
            color="#21C17C"
          />
          <CustomTextField
            label="Account"
            color="#21C17C"
            fontSize={16}
            fontWeight="500"
            marginLeft={10}
          />
        </View>
        <ToggleInput
          isEnabled={faceIdEnabled}
          toggleSwitch={toggleFaceId}
          label="Use Face ID"
        />
        <View style={styles.cardContainer}>
          <CustomTextField
            label="Change Password"
            color="#000"
            fontSize={16}
            fontWeight="500"
            marginLeft={10}
          />

          <AntDesign
            name="right"
            size={24}
            color="#21C17C"
            style={{ marginLeft: 22 }}
          />
        </View>
      </View>
      <View style={[styles.card1, styles.shadowProp]}>
        <View style={styles.cardContent}>
          <Fontisto name="bell" size={24} color="#21C17C" />
          <CustomTextField
            label="Notification"
            color="#21C17C"
            fontSize={16}
            fontWeight="500"
            marginLeft={10}
          />
        </View>
        <ToggleInput
          isEnabled={teamNotifications}
          toggleSwitch={toggleTeamNotifications}
          label="Team Notification"
        />
        <ToggleInput
          isEnabled={peopleNotifications}
          toggleSwitch={togglePeopleNotifications}
          label="People Notification"
        />
      </View>
      <View style={[styles.card2, styles.shadowProp]}>
        <View style={styles.cardContent}>
          <AntDesign name="setting" size={24} color="#21C17C" />
          <CustomTextField
            label="General"
            color="#21C17C"
            fontSize={16}
            fontWeight="500"
            marginLeft={10}
          />
        </View>
        <View style={styles.cardContainer}>
          <CustomTextField
            label="Timezone"
            fontSize={16}
            fontWeight="500"
            marginLeft={10}
          />

          <CustomTextField
            label="GMT-4 (Washington)"
            color="#21C17C"
            fontSize={16}
            fontWeight="500"
            marginLeft={10}
          />
          <AntDesign
            name="right"
            size={20}
            color="#21C17C"
            style={{ marginLeft: 22 }}
          />
        </View>
      </View>
      <View style={[styles.buttonGroup, styles.shadowProp]}>
        <Button
          title="Save Changes"
          titleColor="white"
          backgroundColor="#21C17C"
          onPress={() => alert("dilu")}
          width="100%"
          containerStyle={styles.button}
          titleSize={16}
        />
        <Button
          title="Cancel changes"
          titleColor="#21C17C"
          backgroundColor="white"
          onPress={() => navigation.goBack()}
          width="100%"
          containerStyle={styles.button}
          titleSize={16}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 8,
    backgroundColor: "#fff",
    flexDirection: "column",
    marginVertical: 2,
    borderRadius: 16,
    height: 146,
    marginBottom: 16,
    elevation: 1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0.5 * 30 },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 30,
  },
  container: {
    padding: 16,
    backgroundColor: "#fafafa",
  },

  card1: {
    padding: 8,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    marginVertical: 2,
    borderRadius: 16,
    height: 154,
    marginBottom: 16,
  },
  card2: {
    padding: 8,
    backgroundColor: "#fff",
    flexDirection: "column",
    marginVertical: 2,
    borderRadius: 16,
    height: 92,
    marginBottom: 16,
  },

  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5.32,
    elevation: 0,
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    borderColor: "#21C17C",
    borderWidth: 1,
    marginBottom: 16,
  },
  cardContentFont: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 24,
    color: "#21C17C",
    marginLeft: 10,
  },
  buttonGroup: {
    padding: 8,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    marginVertical: 2,
    borderRadius: 16,
    height: 133,
    marginBottom: 250,
  },
});
