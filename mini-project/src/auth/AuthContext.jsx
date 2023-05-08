import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(token) {
    Cookies.set("token", token, { expires: 1 });
    const decoded = jwt_decode(token);
    setUser(decoded);
    console.log(user);
  }

  function logout() {
    Cookies.remove("token");
    setUser(null);
  }

  const isAuthenticated = user !== null;
  const value = {
    user,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
