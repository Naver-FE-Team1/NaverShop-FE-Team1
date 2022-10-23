import React from "react";
import { Route, useNavigate, Outlet } from "react-router-dom";
import Header from "../components/organisms/Header";
import { useAuth } from "../contexts/auth-context";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  return <>{userInfo ? <Outlet></Outlet> : navigate("/sign-in")}</>;
};

export default PrivateRoute;
