import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

import Header from "../layouts/Header";
import { CustomFacePile } from "../components/Avatars";
import Button from "../components/dButton";
import { CustomTextField } from "../components/TextFields";
import { teams, people, members } from "../data";

export default function TeamAdmin() {
  const [sortBy, setSortBy] = useState("Team");

  return (
    <ScrollView style={styles.main}>
      <Header label="Team" />
      <View style={{ paddingHorizontal: 15 }}>
        <CustomTextField label="Filter Menu" fontSize={16} fontWeight="700" />
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
      <View style={styles.counter}>
        <View>
          <Text style={styles.numbers}>{teams?.length}</Text>
          <Text style={styles.category}>Teams</Text>
        </View>
        <View>
          <Text style={styles.numbers}>{members?.length}</Text>
          <Text style={styles.category}>Members</Text>
        </View>
        <View>
          <Text style={styles.numbers}>{people?.length}</Text>
          <Text style={styles.category}>People</Text>
        </View>
      </View>
      <FlatList
        data={teams}
        renderItem={({ item }) => {
          let data = members?.map((member) => ({
            id: member.id,
            imageUrl:
              "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg",
          }));

          return (
            <CustomFacePile
              navigateTo="Team"
              team={item}
              faces={data}
              label={item.name}
            />
          );
        }}
      />

      <TouchableOpacity style={styles.new}>
        <Text style={styles.newText}>Add New Team</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fafafa",
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
