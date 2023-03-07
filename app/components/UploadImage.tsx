import React, { useState } from "react";
import { Image, View, Pressable, StyleSheet, Text } from "react-native";
// import * as ImagePicker from "expo-image-picker";

const UploadUmage = ({ saveImage }) => {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(true);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    setStatus(false);
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });
    //
    // if (!result.cancelled) {
    //   setImage(result.uri);
    //   saveImage(result.uri)
    //
    // }
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {status && (
        <Pressable onPress={pickImage} style={styles.button}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#21C17C", fontSize: 50, lineHeight: 100 }}>
              +
            </Text>
            <Text style={{ color: "#21C17C", fontSize: 16, lineHeight: 24 }}>
              Add profile picture
            </Text>
          </View>
        </Pressable>
      )}
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default UploadUmage;
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D7F8EA",
    borderRadius: 15,
    border: 2,

    color: "black",
    padding: 60,
  },
});
