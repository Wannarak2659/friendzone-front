import { createContext, useState } from "react";
import * as authApi from "../apis/auth-api";
import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  ); //
  // #[authenticateUser = login user / null = not login

  // # dont need to catch err cause we handle in login form
  const login = async (email, password) => {
    const res = await authApi.login({ email, password });
    console.log(res.data);
    // #res will be token / sent request to db via authapi
    setAccessToken(res.data.accessToken); // # add token to local storage
    setAuthenticatedUser(true);
    // jwtDecode(res.data.accessToken)
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, authenticatedUser }}>
      {children}
    </AuthContext.Provider>
  );
}
