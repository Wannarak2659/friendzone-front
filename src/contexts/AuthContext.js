import { createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  return (
    <AuthContext.Provider value={"AuthContext"}>
      {children}
    </AuthContext.Provider>
  );
}
