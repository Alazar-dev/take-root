import React from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function ToggleInput({ isEnabled, toggleSwitch, label }) {
  return (
    <View style={styles.main}>
      <Text style={styles.syncCloudText}>{label}</Text>
      <Switch
        trackColor={{ false: "#D7F8EA", true: "#21C17C" }}
        thumbColor="white"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
      />
    </View>
  );
}

export function InputField({
  leftIcon,
  iconColor = "#000",
  inputStyle,
  containerStyle,
  placeholderTextColor = "#444",
  handlePasswordVisibility,
  multiLine,
  numberOfLines,
  placeholder,
  ...rest
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon ? (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color={iconColor}
          style={styles.leftIcon}
        />
      ) : null}
      <TextInput
        {...rest}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, inputStyle]}
        multiline={multiLine}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  syncCloudText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  container: {
    borderRadius: 4,
    flexDirection: "row",
    padding: 12,
  },
  leftIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    width: "100%",
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  rightIcon: {
    alignSelf: "center",
    marginLeft: 10,
  },
});
