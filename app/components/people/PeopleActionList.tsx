import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";

import PeopleActionListItems from "./PeopleActionListItems";
import { actions, people } from "../../data";
const PeopleActionList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={actions}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          const newPeople = people.filter((p) => {
            // @ts-ignore
            return p.id === item.person?.id;
          });

          return (
            <TouchableOpacity style={[styles.card]}>
              <PeopleActionListItems item={item} peopleData={newPeople} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default PeopleActionList;

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
  name: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
    marginTop: 5,
    alignSelf: "flex-start",
  },
  description: {
    fontSize: 12,
    fontWeight: "200",
    lineHeight: 14,
    marginHorizontal: 8,
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
  formLabel: {
    fontSize: 14,
    fontWeight: "400",
    color: "#050D22",
  },
  rightIcon: {
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});
