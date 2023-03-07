import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PeopleListItem = (data) => {
  const { name, description, imageUrl, believer } = data;
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.cardContent}
      onPress={() =>
        navigation.navigate("PeopleDetails", {
          people: data,
          profilePic: imageUrl,
        })
      }
    >
      <Text
        style={{
          position: "absolute",
          right: 10,
          fontSize: 14,
          fontWeight: "500",
          color: "#21C17C",
        }}
      >
        {believer === "Yes"
          ? "Believer"
          : believer === "No"
          ? "Non Believer"
          : "Unknown"}
      </Text>
      <Text
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
          fontSize: 14,
          fontWeight: "500",
          color: "#21C17C",
        }}
      >
        09 JUn,22
      </Text>
      <Image
        style={[styles.image]}
        source={
          imageUrl
            ? {
                uri: imageUrl,
              }
            : require("../../assets/avatar.jpg")
        }
      />
      <View style={styles.detail}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>
          {description.length > 10
            ? description.substring(0, 30) + "..."
            : description}
        </Text>
      </View>
    </Pressable>
  );
};

export default PeopleListItem;

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    marginLeft: 10,
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
    marginTop: 5,
    color: "#737F8F",
  },
  detail: {
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: 8,
  },
});
