import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Button } from "../../Buttons";
import styles from "./style";
import { InputField } from "../../Inputs";
import { CustomTextField } from "../../TextFields";
import {
  Feather,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const NewOrg = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState(null);
  const setActiveBarBG = (_role) => (role === _role ? "#21C17C" : "#F8F8F8");
  const setActiveTabColor = (_role) => (role === _role ? "#FFF" : "#737F8F");

  const onCreateNewOrg = async () => {};

  return (
    <View style={styles.container}>
      <CustomTextField
        label="New Organization"
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
            label="Name of the organization"
            color="#21C17C"
            fontSize={14}
            fontWeight="500"
          />
        </View>
        <InputField
          inputStyle={styles.inputStyle}
          containerStyle={{
            backgroundColor: "#fff",
          }}
          editable={!orgInfo?.name}
          placeholder="Enter name"
          autoCapitalize="none"
          keyboardType="default"
          textContentType="default"
          autoFocus={true}
          value={orgInfo !== null ? orgInfo?.name : name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={[styles.formGroup, { marginTop: 8 }]}>
        <View style={styles.labelContainer}>
          <Feather
            name="user"
            size={20}
            color="#84E5C2"
            style={styles.rightIcon}
          />
          <CustomTextField
            label="Role in the team"
            color="#21C17C"
            fontSize={14}
            fontWeight="500"
          />
        </View>
        <View style={styles.tabs}>
          <Button
            onPress={() => setRole(RoleEnum.MEMBER)}
            backgroundColor={setActiveBarBG(RoleEnum.MEMBER)}
            titleColor={setActiveTabColor(RoleEnum.MEMBER)}
            title="Member"
            titleSize={12}
            containerStyle={styles.tabButton}
            disabled={orgInfo != null}
          />
          <Button
            onPress={() => setRole(RoleEnum.ADMIN)}
            backgroundColor={setActiveBarBG(RoleEnum.ADMIN)}
            titleColor={setActiveTabColor(RoleEnum.ADMIN)}
            title="Admin"
            titleSize={12}
            containerStyle={styles.tabButton}
            disabled={orgInfo != null}
          />
        </View>
      </View>
      <View style={[styles.formGroup, { marginTop: 20 }]}>
        <View style={styles.labelContainer}>
          <MaterialCommunityIcons
            name="security"
            size={20}
            color="#84E5C2"
            style={styles.rightIcon}
          />
          <CustomTextField
            label="Default privacy settings"
            color="#21C17C"
            fontSize={14}
            fontWeight="500"
          />
        </View>
        <View style={styles.tabs}>
          <CustomTextField
            label="My team"
            color="#222"
            fontSize={14}
            fontWeight="700"
            marginLeft={15}
          />
          <SimpleLineIcons
            name="arrow-down"
            size={20}
            color="#84E5C2"
            style={styles.rightIcon}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          disabled={orgInfo != null}
          onPress={() => onCreateNewOrg()}
          backgroundColor="#f57c00"
          title="Confirm"
          titleColor="#fff"
          titleSize={16}
          containerStyle={styles.confirmButton}
        />
      </View>
    </View>
  );
};

export default NewOrg;
