import { createContext, useEffect, useState } from "react";
import * as authApi from "../apis/auth-api";
import jwtdecode from "jwt-decode";
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

  // ## use interceptor
  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getUser();
        // #if token expire it will throw error
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    fetchAuthUser();
  }, []);
  // # dont need to catch err cause we handle in login form
  const login = async (email, password) => {
    const res = await authApi.login({ email, password });
    console.log(res.data);
    // #res will be token / sent request to db via authapi
    setAccessToken(res.data.accessToken); // # add token to local storage
    setAuthenticatedUser(jwtdecode(res.data.accessToken));
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  const updateProfile = async (data) => {
    setAuthenticatedUser({ ...authenticatedUser, ...data });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        updateProfile,
        authenticatedUser,
        setAuthenticatedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
