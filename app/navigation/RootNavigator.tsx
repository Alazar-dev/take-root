import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Main";

// import AuthStack from "./AuthStack";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
