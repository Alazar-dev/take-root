import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserComponent({ teamMember, setBgColor }) {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setBgColor("#21C17C");
    } else {
      setBgColor("#898A8D");
    }
  }, [checked]);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        backgroundColor: "#fff",
        marginHorizontal: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: "95%",
        marginTop: 10,
      }}
    >
      <Checkbox value={checked} onValueChange={setChecked} />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TeamMemberDetail", { teamMember: teamMember })
        }
        style={styles.main}
      >
        <View style={styles.avatarInner}>
          <Avatar
            size={52}
            rounded
            source={{
              uri: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg",
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.name}>{teamMember.name}</Text>
            <Text style={styles.status}>{teamMember.status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
  },
  avatarInner: {
    display: "flex",
    flexDirection: "row",
  },
  name: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  people: {
    fontFamily: "Poppins-Regular",
    color: "#737F8F",
  },
  status: {
    fontFamily: "Poppins-Regular",
    color: "#979797",
    borderRadius: 6,
    fontSize: 12,
    fontWeight: "500",
  },
});
