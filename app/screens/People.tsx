import React, { useContext, useState, useEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import Header from "../layouts/Header";
import PeopleListItem from "../components/people/PeopleListItem";
import { CustomTextField } from "../components/TextFields";
import Button from "../components/dButton";
import { people } from "../data";

const People = ({ navigation }) => {
  const [sortBy, setSortBy] = useState("Team");

  return (
    <>
      <ScrollView style={{ backgroundColor: "#fafafa" }}>
        <Header label="People" />
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
        <View style={styles.container}>
          <FlatList
            data={people}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={[styles.card]}>
                  <PeopleListItem {...item} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.invitationButton]}
        onPress={() => navigation.navigate("AddPeople")}
      >
        <View style={styles.socialButtonContent}>
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
};

export default People;

const styles = StyleSheet.create({
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
  card: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    marginVertical: 2,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    position: "absolute",
    right: 10,
    bottom: 80,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 50,
    borderRadius: 16,
    alignContent: "center",
  },
  invitationButton: {
    backgroundColor: "#21C17C",
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
