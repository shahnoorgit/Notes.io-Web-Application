import React, { createContext, useState } from "react";
import { GloablAuth } from "./Types.ts";

type storedUser = GloablAuth | null;
interface Context {
  authUser: GloablAuth;
  setAuthUser: React.Dispatch<React.SetStateAction<GloablAuth>>;
}
interface AuthProviderProps {
  children: React.ReactNode;
}

const storedUser = JSON.parse(localStorage.getItem("user-chat")!) as storedUser;

export const AuthUserProvider = createContext<Context>({
  authUser: {} as GloablAuth, // Empty object of type GloablAuth
  setAuthUser: () => {},
});
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<GloablAuth>(
    JSON.parse(localStorage.getItem("chat-user")!) || {
      _id: "",
      FullName: "",
      userName: "",
    }
  );
  return (
    <AuthUserProvider.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserProvider.Provider>
  );
};
