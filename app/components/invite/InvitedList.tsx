import React, { useContext, useState, useEffect } from "react";
import { View, ScrollView, Modal, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import InvitedMemberCard from "./InvitedMemberCard";
import NotificationModal from "../NotificationModal";
import { CustomTextField } from "../TextFields";
import Header from "../../layouts/Header";

import { members } from "../../data";

export default function InvitedList() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  function deleteMember(member) {
    setModalVisible(true);
  }

  if (!members) {
    return <CustomTextField label="Loading..." />;
  }
  return (
    <>
      <Header label="Invites" />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <FlatList
            data={members}
            renderItem={({ item }) => (
              <InvitedMemberCard
                key={item.id}
                member={item}
                deleteMember={deleteMember}
              />
            )}
          />
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
              text="Member deleted successfully"
              hideModal={() => setModalVisible(!modalVisible)}
              navigation={navigation}
            />
          </Modal>
        </View>
      </ScrollView>
    </>
  );
}
