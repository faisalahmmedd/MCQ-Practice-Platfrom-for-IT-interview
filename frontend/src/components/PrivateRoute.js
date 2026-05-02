import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // logged-in user er token

  if (!token) {
    // Guest user ke login page e redirect koro
    return <Navigate to="/login" replace />;
  }

  return children; // logged-in user access
};

export default PrivateRoute;
