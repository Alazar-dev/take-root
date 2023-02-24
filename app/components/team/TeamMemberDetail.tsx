import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { MaterialCommunityIcons, Feather, EvilIcons } from "@expo/vector-icons";
import Header from "../../layouts/Header";
import { CustomTextField } from "../TextFields";
import Button from "../dButton";
import ListActions from "../dasboard/ListActions";
import { CustomFacePile } from "../Avatars";
import { members } from "../../data";

export default function TeamMemberDetail({ route, navigation }) {
  const { teamMember, profilePic } = route.params;
  const [sortBy, setSortBy] = useState("Team");
  const [actions, setActions] = useState([]);

  const getActions = async () => {};

  return (
    <ScrollView style={styles.container}>
      <Header label="Team" />
      <View style={styles.profileContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#21C17C", marginHorizontal: 10 }}>
              Member
            </Text>
          </View>
          <View style={{ justifyContent: "flex-start", marginLeft: -90 }}>
            <Image
              source={
                profilePic
                  ? { uri: profilePic }
                  : require("../../assets/avatar.jpg")
              }
              style={styles.image}
            />
          </View>
          <Text style={{ color: "#21C17C", marginHorizontal: 10 }}>
            06 Jun, 22
          </Text>
        </View>
        <Text
          style={{
            lineHeight: 33,
            fontWeight: "700",
            fontSize: 22,
            flex: 1,
            textAlign: "center",
            color: "#050D22",
            marginTop: 20,
          }}
        >
          {teamMember?.name}
        </Text>
        <View style={styles.labelContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color="#84E5C2"
          />
          <Text style={{ color: "#21C17C", marginHorizontal: 10 }}>Email:</Text>
          <Text style={styles.labelText}>{teamMember?.email}</Text>
        </View>
        <View style={styles.labelContainer}>
          <Feather name="phone-call" size={20} color="#84E5C2" />
          <Text style={{ color: "#21C17C", marginHorizontal: 10 }}>
            Phone number:
          </Text>
          <Text style={styles.labelText}>{teamMember?.phone}</Text>
        </View>
        <View style={styles.labelContainer}>
          <EvilIcons name="location" size={20} color="#84E5C2" />
          <Text style={{ color: "#21C17C", marginHorizontal: 10 }}>
            Address:
          </Text>
          <Text style={styles.labelText}>{teamMember?.address}</Text>
        </View>
        <View style={{ marginVertical: 8 }}>
          <CustomTextField
            label="Associated team members"
            fontSize={14}
            fontWeight="700"
          />
          <CustomFacePile
            navigateTo="MyTeam"
            team={members}
            faces={members
              .filter((member) => member.teamId == teamMember.teamId)
              .map((member) => ({
                id: member.id,
                imageUrl: "https://bootdey.com/img/Content/avatar/avatar1.png",
              }))}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            flexDirection: "row",
            paddingVertical: 15,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Button
            title="Team"
            containerStyle={styles.btnContainer}
            onPress={() => setSortBy("Team")}
            titleSize={12}
            backgroundColor={sortBy == "Team" ? "#21C17C" : "#F8F8F8"}
            titleColor={sortBy == "Team" ? "white" : "#737F8F"}
          />
          <Button
            title="Members"
            containerStyle={styles.btnContainer}
            onPress={() => setSortBy("Members")}
            titleSize={12}
            backgroundColor={sortBy == "Members" ? "#21C17C" : "#F8F8F8"}
            titleColor={sortBy == "Members" ? "white" : "#737F8F"}
          />
          <Button
            title="Date"
            containerStyle={styles.btnContainer}
            onPress={() => setSortBy("Date")}
            titleSize={12}
            backgroundColor={sortBy == "Date" ? "#21C17C" : "#F8F8F8"}
            titleColor={sortBy == "Date" ? "white" : "#737F8F"}
          />
        </View>
      </View>
      <ListActions
        actionStatus="Status"
        actions={actions}
        navigation={navigation}
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
          {
            title: "2020",
          },
          {
            title: "2021",
          },
          {
            title: "2022",
          },
        ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    flex: 1,
  },
  profileContainer: {
    marginVertical: 42,
    backgroundColor: "white",
    flex: 1,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    maxWidth: "80%",
    marginVertical: 8,
    alignItems: "flex-start",
    alignContent: "flex-start",
  },

  cardDetail: {
    paddingHorizontal: 8,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
  },
  labelText: {
    lineHeight: 21,
    fontWeight: "700",
    fontSize: 14,
    flex: 1,
    textAlign: "left",
    color: "#050D22",
  },
  image: {
    width: 94,
    height: 94,
    borderRadius: 72,
    position: "absolute",
    top: -35,
  },
  btnTag: {
    height: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    marginVertical: 40,
    borderRadius: 12,
    padding: 6,
    alignSelf: "center",
    fontSize: 12,
    fontWeight: "600",
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
  btnContainer: {
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
});
