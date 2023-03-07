import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Button } from "../Buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ChooseTeam from "./tabs/ChooseTeam";
import NewTeam from "./tabs/NewTeam";
import Avatar from "../../assets/avatar.jpg";
// import * as ImagePicker from "expo-image-picker";
const { width } = Dimensions.get("window");

interface ITabContent {
  tab: string;
  children: React.ReactNode;
}
const InvitationPortal = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = useState("TabEnum.CURRENT");
  const setActiveBarBG = (tab) => (activeTab === tab ? "#21C17C" : "#F8F8F8");
  const setActiveTabColor = (tab) => (activeTab === tab ? "#FFF" : "#737F8F");
  const [photo, setPhoto] = useState(null);
  const ConditionalHOC = ({ tab, children }: ITabContent) => {
    return <>{tab === activeTab && <>{children}</>}</>;
  };

  const pickImage = async () => {
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
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={require("../../assets/blur-bg.png")}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.userIcon}>
            <Image
              source={require("../../assets/group.png")}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor: "#84E5C2",
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={() => navigation.navigate("InvitationForm")}
          >
            <MaterialCommunityIcons name="close" size={16} color="#21c17c" />
          </TouchableOpacity>
          <Text style={styles.title}>Invite Member</Text>
          <View style={styles.info}>
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={photo != null ? { uri: photo } : Avatar}
                style={styles.pic}
              />
            </TouchableOpacity>
            <Text style={styles.nameTxt}>{route.params.inviteName}</Text>
          </View>
        </View>
        <View style={[styles.tabs, { ...styles.shadow }]}>
          <Button
            onPress={() => setActiveTab(TabEnum.CURRENT)}
            backgroundColor={setActiveBarBG(TabEnum.CURRENT)}
            titleColor={setActiveTabColor(TabEnum.CURRENT)}
            title="Current"
            titleSize={12}
            containerStyle={styles.tabButton}
          />
          <Button
            onPress={() => setActiveTab(TabEnum.NEW_TEAM)}
            backgroundColor={setActiveBarBG(TabEnum.NEW_TEAM)}
            titleColor={setActiveTabColor(TabEnum.NEW_TEAM)}
            title="New Team"
            titleSize={12}
            containerStyle={styles.tabButton}
          />
        </View>
        <View>
          <ConditionalHOC
            {...{
              tab: TabEnum.CURRENT,
              children: (
                <ChooseTeam
                  inviteName={route.params.inviteName}
                  inviteEmail={route.params.inviteEmail}
                  photoUrl={photo}
                />
              ),
            }}
          />
          <ConditionalHOC
            {...{
              tab: TabEnum.NEW_TEAM,
              children: <NewTeam />,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default InvitationPortal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  content: {
    height: "82%",
    width: width - 20,
    backgroundColor: "white",
    bottom: 10,
    top: 30,
    left: 10,
    right: 10,
    zIndex: 500,
    borderRadius: 16,
  },
  header: {
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#050D22",
  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 15,
  },
  info: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    height: 80,
    width: 80,
    top: -25,
    borderRadius: 16,
    backgroundColor: "#F8F8F8",
  },
  closeIcon: {
    padding: 8,
    position: "absolute",
    right: 4,
    top: 2,
    backgroundColor: "#D7F8EA",
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  tabs: {
    height: 40,
    width: width - 70,
    backgroundColor: "#FFF",
    alignSelf: "center",
    marginTop: 4,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 0.9,
    borderColor: "#F8F8F8",
  },
  tabButton: {
    width: "33%",
    height: 26,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
