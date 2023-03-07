import React, { useEffect, useState } from "react";
import { View, TextInput, Image, TouchableOpacity, Modal } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { CustomTextField } from "../components/TextFields";
import Header from "../layouts/Header";
import UserComponent from "../components/team/UserComponent";
import { CustomButton } from "../components/Buttons";

export default function Team({ route }) {
  const navigation = useNavigation();
  const { team } = route.params;
  const [editTeamNameModal, setEditTeamNameModal] = useState(false);

  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [bgColor, setBgColor] = useState("#898A8D");

  async function updateTeamName() {
    navigation.navigate("TeamAdmin");
  }
  async function deleteTeam() {
    setEditTeamNameModal(false);
    navigation.navigate("TeamAdmin");
  }

  return (
    <View style={{ margin: 6, flex: 1, backgroundColor: "#fafafa" }}>
      <Header label="Team" />
      <CustomTextField
        label="Team"
        fontSize={16}
        fontWeight="700"
        marginTop={10}
        marginLeft={13}
      />
      <View
        style={{
          backgroundColor: "#fff",
          paddingVertical: 8,
          marginVertical: 10,
        }}
      >
        <TextInput
          value={searchQuery}
          onChangeText={(e) => setSearchQuery(e)}
          style={{
            textAlign: "center",
            color: "#737F8F",
            backgroundColor: "#F8F8F8",
            marginHorizontal: 20,
          }}
          placeholder="Search..."
        />
      </View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <CustomTextField
          label={team.name}
          color="#21C17C"
          fontSize={14}
          marginRight={10}
          marginLeft={10}
        />
        <TouchableOpacity onPress={() => setEditTeamNameModal(true)}>
          <FontAwesome name="pencil-square-o" size={24} color="#21C17C" />
        </TouchableOpacity>
        <CustomButton
          label="Selection Menu"
          backgroundColor={bgColor}
          color="#fff"
          fontSize={12}
          padding={1}
          w={150}
          br={6}
          ml={10}
        />
      </View>

      {members
        .filter((member) => member.name.includes(searchQuery))
        .map((member) => (
          <UserComponent
            setBgColor={setBgColor}
            key={member.id}
            teamMember={member}
          />
        ))}
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 10,
          bottom: 40,
          height: 45,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#21C17C",
          width: 60,
          marginBottom: 20,
          borderRadius: 16,
        }}
        onPress={() => navigation.navigate("InvitationForm")}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/group.png")}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              marginLeft: 4,
              tintColor: "#fff",
            }}
          />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={editTeamNameModal}
        onRequestClose={() => setEditTeamNameModal(!editTeamNameModal)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 20,
              paddingHorizontal: 16,
              paddingBottom: 10,
              paddingTop: 12,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 8,
                position: "absolute",
                right: 10,
                top: 7,
                backgroundColor: "#D7F8EA",
                height: 30,
                width: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setEditTeamNameModal(false)}
            >
              <MaterialCommunityIcons name="close" size={16} color="#21c17c" />
            </TouchableOpacity>
            <CustomTextField
              label="Change Team name"
              color="#050D22"
              fontSize={16}
              fontWeight="700"
              alignSelf="center"
              paddingBottom={25}
            />
            <CustomTextField
              label="Once updated, this will reflect on all team member accounts."
              color="#737F8F"
              fontSize={14}
              fontWeight="500"
              alignSelf="center"
              paddingBottom={25}
              textAlign="center"
            />
            <TextInput
              value={teamName}
              onChangeText={(e) => setTeamName(e)}
              style={{
                borderWidth: 1,
                borderColor: "#21C17C",
                borderRadius: 12,
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                padding: 12,
              }}
            />

            <CustomButton
              label="Confirm"
              backgroundColor="#21C17C"
              color="#fff"
              fontSize={18}
              mt={20}
              onPress={updateTeamName}
              w={360}
            />
            <CustomButton
              label="Delete Team"
              backgroundColor="#FF3D00"
              color="#fff"
              fontSize={18}
              mt={20}
              onPress={deleteTeam}
              w={360}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
