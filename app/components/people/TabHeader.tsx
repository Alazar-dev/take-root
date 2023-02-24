import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "../index";

export enum TabEnum {
  "PEOPLE" = "People",
  "ACTION" = "All My Actions",
}

const TabHeader = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setActiveTab(TabEnum.PEOPLE)}
          title={TabEnum.PEOPLE}
          titleColor="#050D22"
          titleSize={16}
          containerStyle={[
            styles.button,
            activeTab === TabEnum.PEOPLE ? styles.activeButton : null,
          ]}
        />

        <Button
          onPress={() => setActiveTab(TabEnum.ACTION)}
          title={TabEnum.ACTION}
          titleColor="#050D22"
          titleSize={16}
          containerStyle={[
            styles.button,
            activeTab === TabEnum.ACTION ? styles.activeButton : null,
          ]}
        />
      </View>
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  container: {
    height: 25,
    marginVertical: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: "50%",
    height: 20,
    borderRadius: 16,
    backgroundColor: "#F8F8F8",
  },
  activeButton: {
    borderBottomWidth: 1,
    borderBottomColor: "#21c17c",
  },
});
