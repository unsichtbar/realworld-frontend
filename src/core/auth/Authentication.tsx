import React from "react";
import { UserModel } from "../../models/UserModel";

const initialUser: UserModel | null = null;

const AuthContext = React.createContext({
  user: null,
  setUser: (user: UserModel | null) => {},
});

export const AuthenticationProvider: React.FC<{}> = (props) => {
  const [user, setUser] = React.useState(initialUser);
  return (
    <>
      <AuthContext.Provider value={{ user, setUser: setUser as any }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export const AuthenticationContext = AuthContext;
