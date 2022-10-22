import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LayoutAuthentication from "../../../molecules/LayoutAuthentication/LayoutAuthentication";
import Button from "../../../atoms/Button/Button";
import FormAuthentication from "../../../organisms/Form/FormAuthentication";
import InputUser from "../../../molecules/Input/InputUser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { auth, db } from "../../../../firebase/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import IconEyeOpen from "../../../../assets/icons/IconEyes/IconEyeOpen";
import IconEyeClose from "../../../../assets/icons/IconEyes/IconEyeClose";
import ButtonSignIn from "../../../atoms/Button/ButtonSignIn";
import Google from "../../../../assets/icons/icons svg/Google";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useAuth } from "../../../../contexts/auth-context";
import { toast } from "react-toastify";
import { collection, getDocs } from "firebase/firestore";

const SignInPage = (props) => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  //get users
  useEffect(() => {
    const colRef = collection(db, "users");
    getDocs(colRef).then((snapshot) => {
      let listUsers = [];
      snapshot.docs.forEach((doc) => {
        listUsers.push({ id: doc.id, ...doc.data() });
      });
      setUsers(listUsers);
    });
  }, []);
  // console.log(users);

  //Bias redux
  const [togglePassword, setTogglePassword] = useState(false);
  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };
  //function check user status
  function statusUser(email, users) {
    let checkUser = true;
    users.forEach((user) => {
      console.log(user);
      if (user.email === email && user.status === "passive") {
        checkUser = false;
        return;
      }
    });
    return checkUser;
  }
  //Handle sign in
  const handleSignIn = async (values) => {
    try {
      if (statusUser(values.email, users) === false) {
        toast.error("User is not active");
        console.log("asdd");
        return;
      }
      // await signInWithEmailAndPassword(auth, values.email, values.password);
      // navigate("/");
    } catch (errors) {
      console.log(errors);
      toast.error("Your email or password is incorrect");
    }
  };
  //Sign in with google
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {}
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .email("Invalid email address")
            .required("Email is required"),
          password: yup.string().required("Password is required"),
        })}
        onSubmit={handleSignIn}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => {
          {
            console.log(errors);
          }
          return (
            <LayoutAuthentication
              title="Sign In"
              text="Don't have an account?"
              access="Sign up"
              forget="Forget password?"
              content="Sign up"
              navigate="/sign-up"
            >
              <FormAuthentication>
                <ButtonSignIn
                  icon={<Google></Google>}
                  text="Sign in with Google"
                  onClick={googleSignIn}
                ></ButtonSignIn>
                <InputUser
                  type="email"
                  name="email"
                  id="email"
                  label="Email"
                  placeholder="Enter your gmail..."
                ></InputUser>

                <InputUser
                  name="password"
                  id="password"
                  label="Password"
                  placeholder="Enter your password..."
                  type={togglePassword ? "text" : "password"}
                  icon={
                    togglePassword ? (
                      <IconEyeOpen onClick={handleTogglePassword}></IconEyeOpen>
                    ) : (
                      <IconEyeClose
                        onClick={handleTogglePassword}
                      ></IconEyeClose>
                    )
                  }
                ></InputUser>
                <div></div>
                <Button
                  content="Sign in"
                  backgroundColor="#2a254b"
                  width="100%"
                  height="52px"
                  radius="10"
                  color="white"
                  borderColor="white"
                  type="submit"
                ></Button>
              </FormAuthentication>
            </LayoutAuthentication>
          );
        }}
      </Formik>
    </>
  );
};

SignInPage.propTypes = {};

export default SignInPage;
