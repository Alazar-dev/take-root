import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Button from "../dButton";
import Header from "../../layouts/Header";
import Constants from "expo-constants";

const ActionMap = ({ saveLocation, hideModal }) => {
  const [height, setHeight] = useState("100%");
  const [location, setLocation] = useState(
    "4517 Washington Ave. Manchester, Kentucky 39495"
  );
  useEffect(() => {
    saveLocation(location);
  }, [location]);
  return (
    <SafeAreaView style={styles.container}>
      <Header label="Location" />
      <GooglePlacesAutocomplete
        placeholder="Type a place"
        listViewDisplayed={false}
        keepResultsAfterBlur={true}
        query={{ key: Constants.manifest.extra.mapApi }}
        styles={{
          container: {
            zIndex: 1,
            elevation: 4,
            width: "90%",
            top: 10,
            marginHorizontal: 16,
            height: 48,
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
        title="Confirm"
        containerStyle={[styles.btnSave, { bottom: 150 }]}
        onPress={() => hideModal()}
        titleSize={18}
        backgroundColor="#21C17C"
        titleColor="white"
      />
    </SafeAreaView>
  );
};

export default ActionMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    bottom: 300,
    flex: 0,
    position: "absolute",
    width: "90%",
    zIndex: 1,
    marginHorizontal: 16,
    height: 54,
  },
});
