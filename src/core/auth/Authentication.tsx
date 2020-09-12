import React from "react";
import { UserModel } from "../../models/UserModel";

const initialUser = null;

const AuthContext = React.createContext<UserModel | null>(initialUser);

export const AuthenticationProvider: React.FC<{}> = (props) => {
  const [user, setUser] = React.useState(initialUser);
  return (
    <>
      <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
    </>
  );
};

export const AuthenticationContext = AuthContext;
