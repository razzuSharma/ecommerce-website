import React from "react";
import { Navigate } from "react-router";

const Auth = ({ children }) => {
  if (localStorage.getItem("emailData" && "passwordData")) {
    return children;
  }

  if (!localStorage.getItem("islogged")) {
     return <Navigate to="/login" />;
  }

  return <Navigate to="/login" />;
};

export default Auth;
