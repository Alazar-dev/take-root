import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
function TeamMemberCard({ taskStatus }) {
  const [onlineStatus, setOnlineStatus] = useState("#21C17C");
  const userData = {
    name: "Brooklyn Simmons",
    position: "Member",
    task: "Contact Darrell, ask if he needs food or clothes. Offer other help.",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png",
    comment: "",
    age: 34,
  };
  const bgStatus =
    taskStatus === "Overdue"
      ? "rgba(255, 0, 46, 0.2)"
      : taskStatus === "Completed"
      ? "#BDF3DC"
      : "#FFF1CE";
  const textColor =
    taskStatus === "Overdue"
      ? "#FF002E"
      : taskStatus === "Completed"
      ? "#21C17C"
      : "#FF9F1C";
  const taskIcon =
    taskStatus === "Overdue" ? (
      <AntDesign name="leftsquare" size={16} color={textColor} />
    ) : taskStatus === "Completed" ? (
      <AntDesign name="checkcircle" size={16} color={textColor} />
    ) : (
      <Entypo name="dots-three-horizontal" size={16} color={textColor} />
    );
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View
        style={[
          styles.topBar,
          {
            backgroundColor: `${textColor}`,
            borderColor: `${textColor}`,
          },
        ]}
      />
      <View style={styles.topContainer}>
        <Text>#63722</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 3,
            borderRadius: 8,
            paddingHorizontal: 15,
            backgroundColor: `${bgStatus}`,
            alignItems: "center",
          }}
        >
          <View>{taskIcon}</View>
          <Text style={[styles.topContainerFont, { color: `${textColor}` }]}>
            {taskStatus}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <View style={{ position: "relative", width: 50 }}>
          <Image
            source={{
              uri: userData.image,
            }}
            style={styles.logo}
          />

          <View
            style={{
              backgroundColor: `${onlineStatus}`,
              borderRadius: 50,
              width: 10,
              height: 10,
              borderColor: "white",
              borderWidth: 1,
              position: "absolute",
              top: 0,
              right: 0,
            }}
          />
        </View>
        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text>{userData.name}</Text>
            <Text style={{ color: "#21C17C" }}>{userData.age}y</Text>
          </View>
          <Text style={{ color: "#737F8F" }}>{userData.position}</Text>
        </View>
      </View>
      <Text style={styles.bottomText}>{userData.task} </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#737F8F", fontSize: 12, fontWeight: "400" }}>
          Appointed by:
        </Text>
        <Text style={{ color: "#21C17C", fontSize: 12, fontWeight: "400" }}>
          Brooklyn Simmons
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 3,
    borderRadius: 5,
    justifyContent: "space-around",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    fontSize: 14,
    fontWeight: "900",
    size: 20,
  },
  topContainerFont: {
    color: "#FF002E",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    marginLeft: 2,
  },
  logo: {
    width: 52,
    height: 52,
    borderRadius: 45,
  },
  bottomText: {
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 16,
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5.32,

    elevation: 1,
  },
  topBar: {
    height: 6,

    width: 350,
    alignSelf: "center",
    borderTopWidth: 1,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
});
export default TeamMemberCard;
