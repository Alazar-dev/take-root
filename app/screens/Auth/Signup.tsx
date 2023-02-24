import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { Button } from "../../components";
import { ErrorMessage } from "../../components";
import { InputField } from "../../components/Inputs";
import styles from "./style";
import { CustomTextField } from "../../components/TextFields";

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(true);
  const [signupError, setSignupError] = useState("");
  const [hidePassword, setHidePassword] = useState("show");
  const [hideConfirmPassword, setHideConfirmPassword] = useState("show");

  const handlePasswordVisibility = () => {
    if (hidePassword === "show") {
      setHidePassword("hide");
      setPasswordVisibility(!passwordVisibility);
    } else if (hidePassword === "hide") {
      setHidePassword("show");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const handleConfirmPasswordVisibility = () => {
    if (hideConfirmPassword === "show") {
      setHideConfirmPassword("hide");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (hideConfirmPassword === "hide") {
      setHideConfirmPassword("show");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Image
        style={styles.bgImage}
        source={require("../../assets/splash.png")}
      />
      <View style={[styles.content, { marginTop: 30 }]}>
        <CustomTextField
          color="#000"
          fontSize={18}
          fontWeight="bold"
          label="Create new account"
          marginTop={20}
          paddingBottom={24}
          alignSelf="center"
        />
        <View style={styles.formGroup}>
          <View style={styles.labelContainer}>
            <MaterialIcons
              name="person-outline"
              size={20}
              color="#84E5C2"
              style={styles.rightIcon}
            />
            <CustomTextField
              color="#21C17C"
              fontSize={14}
              fontWeight="500"
              label="Name"
            />
          </View>
          <InputField
            inputStyle={styles.inputStyle}
            containerStyle={{
              backgroundColor: "#fff",
              marginBottom: 20,
            }}
            placeholder="Enter name"
            autoCapitalize="none"
            keyboardType="default"
            textContentType="emailAddress"
            autoFocus={true}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.formGroup}>
          <View style={styles.labelContainer}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color="#84E5C2"
              style={styles.rightIcon}
            />
            <CustomTextField
              color="#21C17C"
              fontSize={14}
              fontWeight="500"
              label="Email"
            />
          </View>
          <InputField
            inputStyle={styles.inputStyle}
            containerStyle={{
              backgroundColor: "#fff",
              marginBottom: 20,
            }}
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.formGroup}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <View style={styles.labelContainer}>
              <MaterialCommunityIcons
                name="lock-open-outline"
                size={20}
                color="#84E5C2"
                style={styles.rightIcon}
              />
              <CustomTextField
                color="#21C17C"
                fontSize={14}
                fontWeight="500"
                label="Password"
              />
            </View>
            <TouchableOpacity onPress={handlePasswordVisibility}>
              <CustomTextField label={hidePassword} />
            </TouchableOpacity>
          </View>

          <InputField
            inputStyle={styles.inputStyle}
            containerStyle={{
              backgroundColor: "#fff",
              marginBottom: 20,
            }}
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={passwordVisibility}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            handlePasswordVisibility={handlePasswordVisibility}
          />
        </View>
        <View style={styles.formGroup}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <View style={styles.labelContainer}>
              <MaterialCommunityIcons
                name="lock-open-outline"
                size={20}
                color="#84E5C2"
                style={styles.rightIcon}
              />
              <CustomTextField
                color="#21C17C"
                fontSize={14}
                fontWeight="500"
                label="Confirm Password"
              />
            </View>
            <TouchableOpacity onPress={handleConfirmPasswordVisibility}>
              <CustomTextField label={hideConfirmPassword} />
            </TouchableOpacity>
          </View>
          <InputField
            inputStyle={styles.inputStyle}
            containerStyle={{
              backgroundColor: "#fff",
              marginBottom: 20,
            }}
            placeholder="confirm password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={confirmPasswordVisibility}
            textContentType="password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            handlePasswordVisibility={handleConfirmPasswordVisibility}
          />
        </View>
        {signupError ? (
          <ErrorMessage error={signupError} visible={true} />
        ) : null}
        <Button
          backgroundColor="#f57c00"
          title="Create"
          titleColor="#fff"
          titleSize={20}
          containerStyle={[styles.loginButton, { marginBottom: 10 }]}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              color: "#16574E",
              fontSize: 16,
              textAlign: "center",
              fontWeight: "600",
              marginTop: 20,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
