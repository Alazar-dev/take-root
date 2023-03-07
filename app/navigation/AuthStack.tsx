import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";
import Welcome from "../screens/Auth/Welcome";
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
