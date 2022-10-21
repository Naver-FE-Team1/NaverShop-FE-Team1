import React, { useState } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../../../contexts/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";
import userAvatarDefault from "../../../assets/images/userAvatarDefault.jpg";
import { useNavigate } from "react-router-dom";

const User = ({ props }) => {
  const navigate = useNavigate();
  const [popOver, setPopOver] = useState(false);
  const { userInfo, loading, setLoading } = useAuth();

  console.log("🚀 ~ file: User.jsx ~ line 14 ~ User ~ userInfo", userInfo);
  const handleSignOut = () => {
    setLoading(false);
    signOut(auth);
  };
  return (
    <div
      className=""
      style={{ position: "relative" }}
      onClick={() => {
        setPopOver(!popOver);
      }}
    >
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
          {popOver && (
            <div className="popover">
              <p onClick={handleSignOut}>Sign out</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

User.propTypes = {};

export default User;
