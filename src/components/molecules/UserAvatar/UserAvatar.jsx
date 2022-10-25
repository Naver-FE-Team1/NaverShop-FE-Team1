import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { resetLocal } from "../../../store/reducers/basketSlice";
import { useNavigate } from "react-router-dom";
import userAvatarDefault from "../../../assets/images/userAvatarDefault.jpg";
import { useAuth } from "../../../contexts/auth-context";
import { auth } from "../../../firebase/firebase-config";

const UserAvatar = ({ props }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    localStorage.removeItem("cartItem");
    localStorage.removeItem("totalAmount");
    localStorage.removeItem("totalQuantity");
    const removeLocal = {
      cartItem: [],
      totalAmount: 0,
      totalQuantity: 0,
    };
    dispatch(resetLocal(removeLocal));
  };
  return (
    <div className="user" style={{ position: "relative" }}>
      {userInfo === null && loading === false && (
        <div
          className="authentication"
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          Sign in
        </div>
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
              <p key={index} className="user__function" onClick={item.onClick}>
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
