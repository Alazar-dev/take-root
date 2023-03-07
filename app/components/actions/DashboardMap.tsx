import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Button from "../dButton";
import Constants from "expo-constants";

export default function DashboardMap({ saveLocation, hideModal }) {
  const [height, setHeight] = useState("70%");
  const [location, setLocation] = useState(
    "4517 Washington Ave. Manchester, Kentucky 39495"
  );
  useEffect(() => {
    saveLocation(location);
  }, [location]);

  return (
    <SafeAreaView style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Type a place"
        listViewDisplayed={false}
        keepResultsAfterBlur={true}
        query={{ key: Constants.manifest.extra.mapApi }}
        styles={{
          container: {
            zIndex: 1,
            width: "100%",
            top: -70,
            height: 48,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "#84E5C2",
            position: "absolute",
          },
          listView: { backgroundColor: "white" },
        }}
        textInputProps={{ onChange: () => setHeight("50%") }}
        fetchDetails={true}
        onPress={(data) => {
          setHeight("100%");
          setLocation(data.description);
        }}
      />
      <MapView
        style={{ height: height }}
        initialRegion={{
          latitude: 37.15281138269485,
          longitude: -83.78452340089918,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      />

      <Button
        title="Search"
        containerStyle={styles.btnSave}
        onPress={() => hideModal()}
        titleSize={18}
        backgroundColor="#21C17C"
        titleColor="white"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    height: "35%",
    top: 80,
  },
  btnSave: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 12,
    padding: 6,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: "600",
    top: 320,
    flex: 0,
    width: "50%",
    zIndex: 1,
    marginHorizontal: 16,
    height: 54,
    position: "absolute",
  },
});
