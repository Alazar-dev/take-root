import React from "react";

import {
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const Button = ({
  title,
  backgroundColor = "#000",
  titleColor = "#fff",
  titleSize = 14,
  onPress,
  width = "100%",
  containerStyle,
  disabled = false,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={(args) => {
        if (args.pressed) {
          return [
            styles.base,
            {
              opacity: 0.5,
              backgroundColor,
              width,
            },
            containerStyle,
          ];
        }

        return [
          styles.base,
          {
            opacity: 1,
            backgroundColor,
            width,
          },
          containerStyle,
        ];
      }}
    >
      <Text style={[styles.text, { color: titleColor, fontSize: titleSize }]}>
        {title}
      </Text>
    </Pressable>
  );
};

export function CustomButton({
  label,
  backgroundColor,
  color,
  borderWidth,
  borderColor,
  fontSize,
  padding,
  mt,
  textAlign,
  fontWeight,
  shadowColor,
  onPress,
  w,
  br,
  justifyContent,
  ml,
  mb,
  icon,
  pl,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        width: w || "100%",
        padding: padding || 14,
        borderRadius: br || 10,
        marginTop: mt || 0,
        marginLeft: ml || 0,
        borderWidth: borderWidth,
        borderColor: borderColor,
        shadowColor: shadowColor,
        justifyContent: justifyContent,
        marginBottom: mb,
      }}
    >
      {icon !== undefined ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {icon}
          <Text
            style={{
              color: color || "#050D22",
              textAlign: textAlign || "center",
              fontSize: fontSize || 18,
              fontFamily: "Poppins-Medium",
              fontWeight: fontWeight,
              paddingLeft: pl,
            }}
          >
            {label}
          </Text>
        </View>
      ) : (
        <Text
          style={{
            color: color || "#050D22",
            textAlign: textAlign || "center",
            fontSize: fontSize || 18,
            fontFamily: "Poppins-Medium",
            fontWeight: fontWeight,
          }}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
  },
  base: {
    alignItems: "center",
    justifyContent: "center",
    Height: 42,
    borderRadius: 4,
    paddingHorizontal: 12,
  },
});
