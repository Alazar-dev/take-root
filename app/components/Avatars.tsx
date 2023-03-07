import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import FacePile from "react-native-face-pile";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CustomTextField } from "./TextFields";

export function CustomFacePile({ label, navigateTo, team, faces }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      // @ts-ignore
      onPress={() => navigation.navigate(navigateTo, { team: team })}
      style={styles.main}
    >
      <View style={styles.titleContainer}>
        <CustomTextField
          label={label}
          color="#21C17C"
          fontSize={16}
          paddingLeft={10}
        />
        <AntDesign
          name="right"
          size={12}
          color="#21C17C"
          style={{ marginTop: 12, marginLeft: 22 }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <FacePile
          hideOverflow={false}
          circleSize={24}
          numFaces={10}
          faces={faces}
          overlap={0.9}
          circleStyle={{ border: 10, width: 90 }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    // paddingHorizontal: 10,
    marginVertical: 26,
    borderTopWidth: 2,
    borderColor: "#EAEDEC",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
