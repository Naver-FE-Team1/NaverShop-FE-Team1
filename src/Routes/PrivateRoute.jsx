import React from "react";
import { Outlet, Route, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  return <>{userInfo ? <Outlet></Outlet> : navigate("/sign-in")}</>;
};

export default PrivateRoute;
