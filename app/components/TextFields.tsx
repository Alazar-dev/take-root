import React from "react";
import { Text, TextStyle } from "react-native";

interface TextStyleWithLabel extends TextStyle {
  label: string;
}

export function CustomTextField(props: TextStyleWithLabel) {
  return (
    <Text
      style={{
        alignSelf: props.alignSelf,
        backgroundColor: props.backgroundColor,
        color: props.color,
        fontFamily:
          props.fontWeight == "600"
            ? "Poppins-Medium"
            : props.fontWeight == "700"
            ? "Poppins-SemiBold"
            : "Poppins-Regular",
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        marginBottom: props.marginBottom || 0,
        marginLeft: props.marginLeft || 0,
        marginRight: props.marginRight || 0,
        marginTop: props.marginTop,
        paddingBottom: props.paddingBottom,
        paddingLeft: props.paddingLeft,
        paddingTop: props.paddingTop,
        textAlign: props.textAlign,
        textDecorationLine: props.textDecorationLine,
        paddingHorizontal: props.paddingHorizontal,
        width: props.width,
      }}
    >
      {props.label}
    </Text>
  );
}
