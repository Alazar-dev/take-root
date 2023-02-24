import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider";
import moment from "moment";
import { CustomTextField } from "../TextFields";
import { people } from "../../data";

function DashboardMemberDetail({ userData }) {
  const onlineStatus = "#21C17C";

  // @ts-ignore
  const { user } = useContext(AuthenticatedUserContext);
  const titleCase = (str) => {
    if (str != null) return str[0].toUpperCase() + str.substr(1).toLowerCase();
  };
  let date1 = moment();
  let d2 = moment(userData.followupDate.split("/").join("-"));
  let status = d2.diff(date1, "seconds");
  let newStat = status < 0 ? "OverDue" : "Follow Up";
  if (userData.status === "Completed") {
    newStat = "Completed";
  } else if (userData.status === "Draft") {
    newStat = "Draft";
  }

  const [profilePic, setProfilePic] = useState("");

  const bgStatus =
    newStat === "OverDue"
      ? "rgba(255, 0, 46, 0.2)"
      : newStat === "Completed"
      ? "#BDF3DC"
      : "#FFF1CE";
  const textColor =
    newStat === "OverDue"
      ? "#FF002E"
      : newStat === "Completed"
      ? "#21C17C"
      : newStat === "Draft"
      ? "grey"
      : "#FF9F1C";
  const taskIcon =
    newStat === "OverDue" ? (
      <AntDesign name="leftsquare" size={16} color={textColor} />
    ) : newStat === "Completed" ? (
      <AntDesign name="checksquare" size={16} color={textColor} />
    ) : (
      <MaterialCommunityIcons
        name="dots-horizontal-circle"
        size={16}
        color={textColor}
      />
    );
  return (
    <View style={styles.container}>
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
        <CustomTextField
          label={userData.followupDate + " - #63794"}
          lineHeight={20}
          fontSize={14}
          fontWeight="600"
        />
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
          <View style={{ marginRight: 5 }}>{taskIcon}</View>
          <Text style={[styles.topContainerFont, { color: `${textColor}` }]}>
            {newStat}
          </Text>
        </View>
      </View>
      <CustomTextField
        label={userData.note}
        fontWeight="700"
        lineHeight={18}
        marginBottom={3}
        paddingHorizontal={8}
      />
      <View style={{ flexDirection: "row", marginBottom: 8 }}>
        <CustomTextField
          label="Created by: "
          color="#737f8f"
          fontSize={12}
          lineHeight={14.4}
          paddingHorizontal={8}
        />
        <CustomTextField
          label={titleCase(user?.displayName)}
          color="#21c17c"
          fontSize={12}
          fontWeight="600"
          lineHeight={16}
          marginLeft={5}
        />
      </View>
      <View
        style={{
          borderBottomColor: "#EAEDEC",
          borderBottomWidth: 1,
          marginVertical: 10,
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <View style={{ position: "relative", width: 50 }}>
          <Image
            source={
              profilePic
                ? {
                    uri: profilePic,
                  }
                : require("../../assets/avatar.jpg")
            }
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
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 8,
            }}
          >
            <CustomTextField
              label={userData.person.name}
              fontSize={16}
              lineHeight={24}
              marginLeft={3}
            />
            <Text
              style={{
                color: "#21C17C",
                fontWeight: "500",
                fontSize: 14,
                lineHeight: 21,
              }}
            >
              {userData.person.believer}
            </Text>
          </View>

          <CustomTextField
            label={userData.description}
            color="#737F8F"
            fontWeight="400"
            fontSize={12}
            lineHeight={15}
            flexShrink={1}
            marginLeft={12}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    justifyContent: "space-around",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: "900",
    size: 20,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  topContainerFont: {
    color: "#21C17C",
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
    marginVertical: 8,
  },
  topBar: {
    height: 6,
    width: "100%",
    alignSelf: "center",
    borderTopWidth: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
});
export default DashboardMemberDetail;
