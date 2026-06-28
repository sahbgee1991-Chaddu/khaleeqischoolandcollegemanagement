// =============================================
// File Purpose: Custom Hook
// Sprint: 14
// =============================================

import {
  useContext
} from "react";

import {
  AuthContext
} from "./authContext";

export default function useAuth() {

  return useContext(
    AuthContext
  );

}