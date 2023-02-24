import React, { useContext, useState } from "react";
import {
  View,
  Modal,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const { height } = Dimensions.get("window");

import { sendEmail } from "../../../functions/";
import { CustomTextField } from "../../TextFields";

import { Button } from "../../Buttons";
import { useNavigation } from "@react-navigation/native";
import NotificationModal from "../../NotificationModal";
import { teams } from "../../../data";

export default function ChooseTeam({ inviteName, inviteEmail, photoUrl }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [teamId, setTeamId] = useState(null);
  const navigation = useNavigation();
  const onInviteMember = async () => {
    sendEmail({ inviteName, inviteEmail });
    navigation.navigate("InvitedList");
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.main}>
        <CustomTextField
          label="Choose Team"
          color="#050D22"
          fontSize={16}
          fontWeight="bold"
          alignSelf="center"
          marginBottom={4}
        />
        <FlatList
          data={teams}
          renderItem={({ item, index }) => (
            <View style={styles.team} key={index + item.id}>
              <BouncyCheckbox
                fillColor="#21c17c"
                onPress={() => {
                  setTeamId(item.id);
                }}
              />

              <CustomTextField
                label={item.name}
                color="#222"
                fontSize={15}
                fontWeight="600"
                marginLeft={15}
              />
            </View>
          )}
        />
      </ScrollView>
      <View style={{}}>
        <Button
          onPress={() => {
            onInviteMember().then(() => {});
            setModalVisible(true);
          }}
          backgroundColor="#f57c00"
          title="Confirm"
          titleColor="#fff"
          titleSize={16}
          containerStyle={styles.confirmBtn}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <NotificationModal
          title="Request sent"
          text="Wait for confirmation from the member"
          hideModal={() => setModalVisible(!modalVisible)}
          navigation={navigation}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    height: height / 2.5,
    marginVertical: 16,
    padding: 16,
    borderTopColor: "#EAEDEC",
    borderBottomColor: "#EAEDEC",
    borderBottomWidth: 0.8,
    borderTopWidth: 0.8,
  },
  team: {
    width: "95%",
    flexDirection: "row",
    marginVertical: 16,
    justifyContent: "flex-start",
  },
  confirmBtn: {
    marginHorizontal: 15,
    width: "90%",
    height: 40,
    borderRadius: 16,
    backgroundColor: "#21c17c",
    marginBottom: 30,
  },
});
