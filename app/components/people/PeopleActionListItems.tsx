import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import DashboardTagComponent from "../dasboard/DashboardTagComponent";
import { getAge } from "../../utils/dateHelper";

import { CustomTextField } from "../TextFields";

const PeopleActionListItems = ({ peopleData, item }) => {
  const age = getAge(peopleData[0]?.birthDate?.split("/").join("-"));
  const [profilePic, setProfilePic] = useState("");

  const renderTags = () => {
    return (
      <View style={styles.TagInput}>
        {peopleData && (
          <DashboardTagComponent
            topics={peopleData[0].tags.filter((t) => t.status == true)}
          />
        )}
      </View>
    );
  };
  return (
    <View>
      <View style={styles.cardContent}>
        <Text
          style={{
            position: "absolute",
            right: 10,
            fontSize: 14,
            fontWeight: "500",
            color: "#21C17C",
          }}
        >
          {age}
        </Text>
        <Image
          style={[styles.image]}
          source={
            profilePic
              ? { uri: profilePic }
              : require("../../assets/avatar.jpg")
          }
        />
        <View style={styles.detail}>
          <CustomTextField
            label={item.person.name}
            fontSize={16}
            fontWeight="400"
            alignSelf="flex-start"
            marginTop={5}
            marginLeft={10}
          />

          <CustomTextField
            label={item.description}
            fontSize={12}
            fontWeight="200"
            marginRight={8}
            marginLeft={8}
          />
        </View>
      </View>
      <View style={[styles.cardContent, styles.tagsContent]}>
        {renderTags()}
      </View>
      <View>
        <View style={styles.labelContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color="#84E5C2"
            style={styles.rightIcon}
          />
          <CustomTextField
            label={peopleData[0].email}
            fontSize={14}
            fontWeight="400"
          />
        </View>
        <View style={styles.labelContainer}>
          <MaterialCommunityIcons
            name="phone-outline"
            size={20}
            color="#84E5C2"
            style={styles.rightIcon}
          />
          <CustomTextField
            label={peopleData[0].phone}
            fontSize={14}
            fontWeight="400"
          />
        </View>
        <View style={styles.labelContainer}>
          <EvilIcons
            name="location"
            size={20}
            color="#84E5C2"
            style={styles.rightIcon}
          />
          <Text
            style={{
              flexWrap: "wrap-reverse",
              width: "70%",
              fontWeight: "400",
              fontSize: 14,
            }}
          >
            {item.location}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PeopleActionListItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 16,
    backgroundColor: "#F8F8F8",
  },
  card: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    marginVertical: 2,
    borderRadius: 16,
  },
  cardContent: {
    flexDirection: "row",
    marginLeft: 10,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: "wrap",
    paddingBottom: 8,
    borderBottomColor: "#EAEDEC",
    borderBottomWidth: 1,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 36,
  },

  detail: {
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: 8,
  },
  btnColor: {
    padding: 5,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: "#FFF1CE",
    marginTop: 5,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 4,
  },
  rightIcon: {
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  TagInput: {
    marginHorizontal: 0,

    flex: 1,
    textAlign: "center",
    marginBottom: 10,
  },
});
