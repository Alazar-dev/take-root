import React, { useState } from "react";
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
// import * as ImagePicker from 'expo-image-picker';
import ButtonToggleGroup from "react-native-button-toggle-group";
import { CustomTextField } from "../components/TextFields";
import { InputField } from "../components/Inputs";
import Header from "../layouts/Header";
// @ts-ignore
import Avatar from "../assets/avatar.jpg";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Feather,
  Octicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("John");
  const [position, setPosition] = useState("Team Lead");
  const [email, setEmail] = useState("josh@take_root.app");
  const [phone, setPhone] = useState("+123-123-1434");
  const [address, setAddress] = useState(
    "2118 Thornridge Cir. Syracuse, Connecticut 3564"
  );

  const navigation = useNavigation();
  const [gender, setGender] = useState("Male");
  const [believer, setBeliever] = useState("Unknown");

  const pickImage = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });
    //
    // if (!result.cancelled) {
    //   // @ts-ignore
    //   setImage(result?.uri);
    // }
  };
  return (
    <ScrollView style={{ backgroundColor: "#fafafa" }}>
      <Header label="My Profile" />
      <View style={styles.ppSection}>
        <TouchableOpacity onPress={pickImage}>
          <Image source={require("../assets/Edit.png")} />
        </TouchableOpacity>
        <Image
          style={styles.pp}
          source={image != null ? { uri: image } : Avatar}
        />
        <TouchableOpacity onPress={() => setImage(null)}>
          <Image source={require("../assets/Delete.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 20, marginBottom: 100 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <FontAwesome5 name="user" size={24} color="#21C17C" />
          <CustomTextField paddingLeft={10} label="Name" color="#21c17c" />
        </View>
        <InputField
          value={name}
          onChange={(e) => setName(e.target.value)}
          inputStyle={{
            borderColor: "#21C17C",
            borderWidth: 1,
            borderRadius: 20,
            height: 50,
            paddingHorizontal: 20,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <MaterialCommunityIcons
            name="briefcase-variant-outline"
            size={24}
            color="#21C17C"
          />
          <CustomTextField paddingLeft={10} label="Position" color="#21c17c" />
        </View>
        <InputField
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          inputStyle={{
            borderColor: "#21C17C",
            borderWidth: 1,
            borderRadius: 20,
            height: 50,
            paddingHorizontal: 20,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <MaterialIcons name="mail-outline" size={24} color="#21C17C" />
          <CustomTextField paddingLeft={10} label="Email" color="#21c17c" />
        </View>
        <InputField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputStyle={{
            borderColor: "#21C17C",
            borderWidth: 1,
            borderRadius: 20,
            height: 50,
            paddingHorizontal: 20,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <Feather name="phone-call" size={24} color="#21C17C" />
          <CustomTextField paddingLeft={10} label="Phone" color="#21c17c" />
        </View>
        <InputField
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          inputStyle={{
            borderColor: "#21C17C",
            borderWidth: 1,
            borderRadius: 20,
            height: 50,
            paddingHorizontal: 20,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <Octicons name="location" size={24} color="#21C17C" />
          <CustomTextField paddingLeft={10} label="Address" color="#21c17c" />
        </View>
        <InputField
          multiLine={true}
          numberOfLines={2}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          inputStyle={styles.textInput}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={24}
            color="#21C17C"
          />
          <CustomTextField
            paddingLeft={10}
            label="Date of birth"
            color="#21c17c"
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TextInput
            keyboardType="number-pad"
            maxLength={2}
            placeholder="DD"
            style={{
              borderColor: "#21C17C",
              borderWidth: 1,
              borderRadius: 20,
              height: 50,
              paddingHorizontal: 20,
              fontSize: 18,
              width: "25%",
            }}
          />
          <TextInput
            placeholder="MM"
            keyboardType="number-pad"
            maxLength={2}
            style={{
              borderColor: "#21C17C",
              borderWidth: 1,
              borderRadius: 20,
              height: 50,
              paddingHorizontal: 20,
              fontSize: 18,
              width: "25%",
            }}
          />
          <TextInput
            placeholder="YYYY"
            keyboardType="number-pad"
            maxLength={4}
            style={{
              borderColor: "#21C17C",
              borderWidth: 1,
              borderRadius: 20,
              height: 50,
              paddingHorizontal: 20,
              fontSize: 18,
              width: "30%",
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <MaterialCommunityIcons
            name="gender-male-female"
            size={24}
            color="#21C17C"
          />
          <CustomTextField paddingLeft={10} label="Gender" color="#21c17c" />
        </View>
        <ButtonToggleGroup
          style={styles.groupBtn}
          highlightBackgroundColor={"#21C17C"}
          highlightTextColor={"white"}
          inactiveBackgroundColor={"transparent"}
          inactiveTextColor={"grey"}
          values={["Male", "Female"]}
          value={gender}
          onSelect={(val) => setGender(val)}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <MaterialCommunityIcons name="hands-pray" size={24} color="#21C17C" />
          <CustomTextField label="Believer" color="#21c17c" paddingLeft={10} />
        </View>
        <ButtonToggleGroup
          style={styles.groupBtn}
          highlightBackgroundColor={"#21C17C"}
          highlightTextColor={"white"}
          inactiveBackgroundColor={"transparent"}
          inactiveTextColor={"grey"}
          values={["Unknown", "Yes", "No"]}
          value={believer}
          onSelect={(val) => setBeliever(val)}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={24}
            color="#21C17C"
          />
          <CustomTextField
            label="Description about the person"
            color="#21c17c"
            paddingLeft={10}
          />
        </View>
        <InputField
          placeholder="Start writing description..."
          multiLine={true}
          numberOfLines={15}
          inputStyle={{
            borderColor: "#21C17C",
            borderWidth: 1,
            borderRadius: 20,
            height: 60,
            paddingHorizontal: 20,
            paddingTop: 2,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 15,
            marginRight: 15,
            marginTop: 5,
          }}
        >
          <TouchableOpacity style={styles.save}>
            <Text style={styles.saveText}>Save Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.cancel}
          >
            <Text style={styles.cancelText}>Cancel Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  textInput: {
    borderColor: "#21C17C",
    borderWidth: 1,
    borderRadius: 20,
    height: 60,
    paddingHorizontal: 20,
    paddingTop: 2,
  },
  groupBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#21c17c",
    padding: 5,
  },
  save: {
    backgroundColor: "#21C17C",
    width: "100%",
    padding: 14,
    borderRadius: 10,
  },
  saveText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  cancel: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  cancelText: {
    color: "#21C17C",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
});
