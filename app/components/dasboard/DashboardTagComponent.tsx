import React from "react";
import { StyleSheet, View } from "react-native";
// import Steve from 'react-native-steve';

import { CustomTextField } from "../TextFields";

export default function DashboardTagComponent({ topics }) {
  const { topicContainer, container, steveContainer } = styles;

  const renderTopic = ({ item }) => {
    return (
      <View style={topicContainer}>
        <CustomTextField
          label={item.title}
          color="#FF9F1C"
          fontSize={14}
          fontWeight="700"
          marginRight={5}
        />
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
      {/*  keyExtractor={(item) => item.text}*/}
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
  steveContainer: { marginHorizontal: 5, width: "100%", height: "100%" },
});
