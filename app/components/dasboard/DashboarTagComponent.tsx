import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
// import Steve from 'react-native-steve'

export default function DashboarTagComponent({ topics }) {
  const {
    topicContainer,
    topicText,

    container,
    steveContainer,
  } = styles;

  const renderTopic = ({ item }) => {
    return (
      <View style={topicContainer}>
        <Text style={topicText}> {item.title}</Text>
      </View>
    );
  };

  return (
    <View style={container}>
      {/*<Steve*/}
      {/*  isRTL={false}*/}
      {/*  data={topics}*/}
      {/*  renderItem={renderTopic}*/}
      {/*  itemStyle={{ margin: 5 }}*/}
      {/*  containerStyle={steveContainer}*/}
      {/*  keyExtractor={(item) => item.title}*/}
      {/*/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    width: "100%",
  },
  topicContainer: {
    borderColor: " white",
    color: "#FF9F1C",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFF1CE",
  },
  topicText: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 5,
    color: "#FF9F1C",
  },
  title: {
    fontSize: 13,
    color: "rgb(134,130,119)",
    marginBottom: 5,
    marginLeft: 15,
    fontWeight: "600",
  },
  steveContainer: { marginHorizontal: 5, width: "100%", height: "100%" },
});
