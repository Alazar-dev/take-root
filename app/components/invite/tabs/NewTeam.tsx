import React, { useContext, useState } from "react";
import { Dimensions, Modal, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Button } from "../../index";
import { InputField } from "../../Inputs";
import { CustomTextField } from "../../TextFields";
import CustomNotificationModal from "../../CustomNotificationModal";

const { height, width } = Dimensions.get("window");

export default function NewTeam() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);

  const onCreateNewTeam = async () => {
    if (!name.trim()) {
      setNameErr(true);
      return;
    }
    setNotificationModal(true);
  };

  return (
    <View style={styles.container}>
      <CustomTextField
        label="New Team"
        color="#050D22"
        fontSize={16}
        fontWeight="700"
        alignSelf="center"
        marginBottom={20}
      />
      <View style={styles.formGroup}>
        <View style={styles.labelContainer}>
          <Feather
            name="edit"
            size={20}
            color="#84E5C2"
            style={styles.rightIcon}
          />

          <CustomTextField
            label="Team Name"
            color="#21C17C"
            fontSize={14}
            fontWeight="700"
            alignSelf="center"
          />
        </View>
        <InputField
          inputStyle={styles.inputStyle}
          containerStyle={{
            backgroundColor: "#fff",
            marginBottom: nameErr ? 0 : 20,
          }}
          placeholder="Enter name"
          autoCapitalize="none"
          keyboardType="default"
          textContentType="default"
          autoFocus={true}
          value={name}
          onChangeText={(text) => {
            setNameErr(false);
            setName(text);
          }}
        />
        {nameErr ? (
          <CustomTextField
            label="Name field is required!"
            color="red"
            paddingLeft={20}
          />
        ) : null}
      </View>
      <View style={styles.footer}>
        <Button
          onPress={() => onCreateNewTeam()}
          backgroundColor="#f57c00"
          title="Confirm"
          titleColor="#fff"
          titleSize={16}
          containerStyle={styles.confirmButton}
        />
      </View>
      <Modal
        visible={notificationModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setNotificationModal(!notificationModal);
        }}
      >
        <CustomNotificationModal
          hideModal={() => setNotificationModal(false)}
          title="New Team"
          text={`Team ${name} has been created`}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height / 2.5,
    marginVertical: 16,
    padding: 16,
    borderTopColor: "#EAEDEC",
    borderBottomColor: "#EAEDEC",
    borderBottomWidth: 0.8,
    borderTopWidth: 0.8,
    alignItems: "center",
  },
  formGroup: {
    marginHorizontal: 8,
    width: width - 50,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rightIcon: {
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  footer: {
    position: "absolute",
    bottom: 1,
    width: "100%",
    height: 50,
  },
  confirmButton: {
    marginHorizontal: 15,
    width: "90%",
    height: 40,
    borderRadius: 16,
    backgroundColor: "#21c17c",
    marginBottom: 30,
  },
});
