import React from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { CustomTextField } from "./TextFields";
import {
  MaterialCommunityIcons,
  Feather,
  Ionicons,
  EvilIcons,
} from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

export default function Header({ hideModal, navigation }) {
  const handleSignOut = async () => {};
  const headers = [
    {
      label: "My Profile",
      link: () => navigation.navigate("Profile"),
      icon: <Feather name="user" size={24} color="#21C17C" />,
    },
    {
      label: "Settings",
      link: () => navigation.navigate("Settings"),
      icon: <Ionicons name="md-settings-outline" size={24} color="#21C17C" />,
    },
    {
      label: "FAQ",
      link: () => navigation.navigate("FAQ"),
      icon: <EvilIcons name="question" size={24} color="#21C17C" />,
    },
    {
      label: "Logout",
      link: () => handleSignOut(),
      icon: <MaterialCommunityIcons name="logout" size={24} color="#21C17C" />,
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
      <View style={styles.modalView}>
        <CustomTextField
          label="Menu"
          fontSize={18}
          fontWeight="700"
          alignSelf="center"
          paddingTop={12}
        />
        <TouchableOpacity
          style={{
            padding: 8,
            position: "absolute",
            right: 20,
            top: 20,
            backgroundColor: "#D7F8EA",
            height: 30,
            width: 30,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            hideModal();
          }}
        >
          <MaterialCommunityIcons name="close" size={16} color="#21c17c" />
        </TouchableOpacity>

        <View style={{ paddingHorizontal: 19, marginTop: 20 }}>
          <View
            style={{ display: "flex", flexDirection: "row", marginBottom: 15 }}
          >
            <Avatar.Image source={require("../assets/avatar.jpg")} />
            <View style={{ paddingLeft: 10 }}>
              <CustomTextField
                label="Cameroon Williamson"
                color="#000"
                fontSize={18}
                fontWeight="500"
                paddingBottom={0}
                paddingTop={6}
              />
              <CustomTextField
                label="Admin"
                color="#737F8F"
                fontSize={14}
                fontWeight="500"
                paddingBottom={10}
              />
            </View>
          </View>

          <FlatList
            data={headers}
            keyExtractor={(item) => item.label}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.label}
                onPress={() => {
                  hideModal();
                  item.link();
                }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderTopWidth: 2,
                  paddingVertical: 13,
                  borderTopColor: "#EAEDEC",
                }}
              >
                <View>{item.icon}</View>
                <CustomTextField
                  label={item.label}
                  fontSize={16}
                  fontWeight="500"
                  paddingLeft={30}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    top: 30,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingBottom: 35,
    paddingTop: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
