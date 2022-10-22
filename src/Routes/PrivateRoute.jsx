import React from "react";
import { Route, useNavigate } from "react-router-dom";
import Header from "../components/organisms/Header";
import { useAuth } from "../contexts/auth-context";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  if (!userInfo) {
    navigate("/sign-in");
  }
  return <>{children}</>;
};

export default PrivateRoute;
