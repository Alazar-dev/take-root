import React, { useState, createContext } from "react";
import { Realm } from "@realm/react";
const config = { id: "take-root-meurx" };
export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const app = new Realm.App(config);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser, app }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
