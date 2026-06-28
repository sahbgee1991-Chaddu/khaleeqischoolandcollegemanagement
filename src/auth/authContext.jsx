// =============================================
// File Purpose: Authentication Context
// Sprint: 14
// =============================================

import {
  createContext,
  useState
} from "react";

import authService from "./authService";

export const AuthContext =
  createContext();

export function AuthProvider({
  children
}) {

  const [user, setUser] = useState(
    authService.getCurrentUser()
  );

  function login(userData) {

    authService.login(userData);

    setUser(userData);

  }

  function logout() {

    authService.logout();

    setUser(null);

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}