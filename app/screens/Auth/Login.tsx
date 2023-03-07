import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Realm } from "@realm/react";
import { Button } from "../../components";
import { ErrorMessage } from "../../components";
import { InputField } from "../../components/Inputs";
import styles from "./style";
import { CustomTextField } from "../../components/TextFields";
import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider";
const config = { id: "take-root-meurx" };

export default function Login({ navigation }) {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const app = new Realm.App(config);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [hidePassword, setHidePassword] = useState("show");
  const [loginError, setLoginError] = useState("");

  const handlePasswordVisibility = () => {
    if (hidePassword === "show") {
      setHidePassword("hide");
      setPasswordVisibility(!passwordVisibility);
    } else if (hidePassword === "hide") {
      setHidePassword("show");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  async function login() {
    const credentials = Realm.Credentials.emailPassword(email, password);
    try {
      const user = await app.logIn(credentials);
      console.log("Successfully logged in!", user);
      setUser(user);
      return user;
    } catch (err) {
      if (err instanceof Error) {
        console.error("Failed to log in", err.message);
      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Image
        style={styles.bgImage}
        source={require("../../assets/splash.png")}
      />
      <View style={styles.header}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/Logo.png")}
        />
      </View>
      <View style={styles.content}>
        <CustomTextField
          color="#000"
          fontSize={18}
          fontWeight="bold"
          label="Login"
          marginTop={20}
          paddingBottom={24}
          alignSelf="center"
        />
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
              marginRight: 18,
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
            rightText={hidePassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
            handlePasswordVisibility={handlePasswordVisibility}
          />
        </View>
        {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}
        <Button
          onPress={login}
          backgroundColor="#f57c00"
          title="Login"
          titleColor="#fff"
          titleSize={20}
          containerStyle={styles.loginButton}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text
            style={{
              color: "#16574E",
              fontSize: 16,
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Create account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
