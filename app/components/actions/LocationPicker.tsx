import React from "react";
import { View } from "react-native";
import LocationView from "react-native-location-view";

export default function LocationPicker() {
  return (
    <View style={{ flex: 1 }}>
      <LocationView
        apiKey={"MY_GOOGLE_API_KEY"}
        initialLocation={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
      />
    </View>
  );
}
