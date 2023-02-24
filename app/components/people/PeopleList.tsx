import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import PeopleListItem from "./PeopleListItem";
import { people } from "../../data";

export default function PeopleList() {
  return (
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
  );
}

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
});
