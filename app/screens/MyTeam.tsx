import React, { useContext, useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CustomTextField } from "../components/TextFields";
import Header from "../layouts/Header";
import Button from "../components/dButton";
import MemberCard from "../components/team/MemberCard";

import { teams, members } from "../data";

export default function MyTeam() {
  const navigation = useNavigation();
  const [sortBy, setSortBy] = useState("Team");

  return (
    <>
      <Header label="My Team" />
      <ScrollView style={{ backgroundColor: "#fafafa" }}>
        <View style={{ paddingHorizontal: 10 }}>
          <CustomTextField label="Filter Menu" fontSize={16} fontWeight="700" />
          <View
            style={{
              flex: 1,
              marginTop: 10,
              justifyContent: "space-between",
              flexDirection: "row",
              paddingTop: 8,
              paddingHorizontal: 10,
              backgroundColor: "#fff",
              borderRadius: 7,
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

        {teams.map((team) => {
          return (
            <View style={{ paddingLeft: 20, marginBottom: 30 }}>
              <CustomTextField
                label={team.name}
                color="#21C17C"
                fontSize={16}
                fontWeight="700"
                paddingBottom={10}
                textDecorationLine="underline"
              />
              {members
                .filter((member) => member.teamId == team.id)
                .map((member) => (
                  <MemberCard teamMember={member} />
                ))}
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 10,
          bottom: 80,
          height: 45,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#21C17C",
          width: 60,
          marginBottom: 20,
          borderRadius: 16,
        }}
        onPress={() => navigation.navigate("InvitationForm")}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/group.png")}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              marginLeft: 4,
              tintColor: "#fff",
            }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: "100%",
  },
  counter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  numbers: {
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    fontSize: 22,
    color: "#21C17C",
  },
  category: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
  },
  new: {
    backgroundColor: "#D7F8EA",
    width: "100%",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 110,
  },
  newText: {
    color: "#21C17C",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Poppins-Medium",
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
