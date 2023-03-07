import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticatedUserContext } from "./AuthenticatedUserProvider";
import Main from "./Main";

import AuthStack from "./AuthStack";

export default function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  return (
    <NavigationContainer>
      {user ? <Main /> : <AuthStack />}
      {/*<Main />*/}
      {/*<AuthStack />*/}
    </NavigationContainer>
  );
}
