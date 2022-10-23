import React, { useState } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../../../contexts/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";
import userAvatarDefault from "../../../assets/images/userAvatarDefault.jpg";
import { useNavigate } from "react-router-dom";

const UserAvatar = ({ props }) => {
  const navigate = useNavigate();
  const { userInfo, loading, setLoading } = useAuth();
  const userFunctions = [
    {
      title: "Profile",
      onClick() {
        navigate("/user");
      },
    },
    {
      title: "Sign out",
      onClick() {
        handleSignOut();
      },
    },
  ];
  const handleSignOut = () => {
    setLoading(false);
    signOut(auth);
  };
  return (
    <div className="user" style={{ position: "relative" }}>
      {userInfo === null && loading === false && (
        <>
          {
            <div
              className="authentication"
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              Sign in
            </div>
          }
        </>
      )}
      {userInfo !== null && loading === true && (
        <>
          <img
            src={userAvatarDefault}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "100px",
              cursor: "pointer",
              objectFit: "cover",
            }}
            alt=""
          />
          <div className="user__popover">
            {userFunctions.map((item, index) => (
              <p className="user__function" onClick={item.onClick}>
                {item.title}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

UserAvatar.propTypes = {};

export default UserAvatar;
