import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
// import Steve from "react-native-steve";

export default function TagComponent({ topics, saveTags }) {
  const { topicContainer, topicText, container, steveContainer } = styles;
  const [tags, setTags] = useState(topics);
  const updateTag = (text) => {
    const data = [];
    tags.map((val) => {
      if (val.title == text) {
        const emojiText = val.emoji === "+" ? "×" : "+";
        data.push({ emoji: emojiText, title: val.title, status: !val.status });
      } else data.push(val);
    });
    setTags(data);
    saveTags(data);
  };
  useEffect(() => {}, [tags]);
  const renderTopic = ({ item }) => {
    const { emoji, title, status } = item;
    return (
      <Pressable
        style={[
          topicContainer,
          status && { backgroundColor: "#FF9F1C", padding: 10 },
        ]}
        onPress={() => updateTag(title)}
      >
        <Text style={[topicText, status && { color: "white" }]}> {title}</Text>
        <Text style={[topicText, status && { color: "white" }]}>{emoji}</Text>
      </Pressable>
    );
  };

  return (
    <View style={container}>
      {/*<Steve*/}
      {/*  isRTL={false}*/}
      {/*  data={tags}*/}
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
    borderWidth: 1,
    borderColor: "#ecd9d9",
    borderBottomWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFF",
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
