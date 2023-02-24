import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { CustomButton } from "../../components/Buttons";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={require("../../assets/splash.png")}
      />
      <View style={styles.getStarted}>
        <CustomButton
          onPress={() => navigation.navigate("Login")}
          backgroundColor="#FFFFFF"
          shadowColor="#808080"
          color="#21C17C"
          fontSize={20}
          fontWeight="700"
          label="Get Started"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  getStarted: {
    position: "absolute",
    height: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    bottom: 50,
    width: 300,
    borderRadius: 16,
    backgroundColor: "transparent",
  },
});
