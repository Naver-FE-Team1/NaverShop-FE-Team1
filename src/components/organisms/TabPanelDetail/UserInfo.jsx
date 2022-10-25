/**
 * User Info tab for User Profile
 * file: UserInfo.jsx
 */

import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Formik, Form, Field } from "formik";
import React, { useEffect, useRef, useState } from "react";
import OutlinedInput from "../../molecules/TextField/OutlinedInput";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase-config";
import AvatarButton from "../AvatarButton/AvatarButton";
import MuiCustomButton from "../../atoms/Button/MuiCustomButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const errorStyle = {
    marginTop: "5px",
    marginLeft: "15px",
    color: "red",
};

const UserInfo = (props) => {
    const tabletMatches = useMediaQuery("(min-width: 768px)");

    const navigate = useNavigate();

    const [accountInfo, setAccountInfo] = useState({
        fullname: "",
        age: 0,
        email: "",
        address: "",
        phonenumber: "",
        avatarId: "link",
    });

    const formRef = useRef()

    const handleSubmit = async () => {
        const data = formRef.current?.values

        const userRef = doc(db, "users", auth.currentUser?.uid)
        await updateDoc(userRef, {
            ...data
        })

        toast.success("Cập nhật thông tin thành công!")
    }

    /**
     * To wait for UserInfo render,
     * then wait for state changing from auth,
     * (with onAuthStateChanged, this will return auth the currentUser.uid),
     * unsubcribe the listener
     * finally, get the data from the auth.currentUser.uid
     */
    useEffect(() => {
        const unSub = auth.onAuthStateChanged((user) => {
            unSub();
            if (!user) {
                navigate("/");
            } else {
                const userRef = doc(db, "users", auth.currentUser.uid);
                const result = getDoc(userRef)
                    .then((res) => setAccountInfo({ ...res.data() }))
                    .catch((err) => console.log(err));
            }
        });
    }, []);

    return (
        <div className="user-tab">
            <Typography variant="h3">My Account</Typography>
            <Formik
                innerRef={formRef}
                enableReinitialize
                initialValues={accountInfo}
                validate={(values) => {
                    const errors = {};

                    //regex for fullname
                    if (
                        values.fullname &&
                        !/^[a-zA-Z0-9ỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ' ]+$/.test(
                            values.fullname
                        )
                    ) {
                        errors.fullname = "Invalid name";
                    }

                    if (values.age && !/^\d+$/.test(values.age)) {
                        errors.age = "Age can only be contained of numbers";
                    }

                    //regex for email
                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = "Invalid email address";
                    }

                    //regex for phonenumber
                    if (values.phonenumber && !/^\d+$/.test(values.phonenumber)) {
                        errors.phonenumber =
                            "Phone number can only be contained of numbers";

                    }

                    return errors;
                }}
            >
                {(props) => (
                    <Form
                        style={{
                            width: "100%",
                            marginTop: "15px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "25px",
                            }}
                        >
                            <AvatarButton data={props.values.avatarId} />
                            <Stack sx={{ width: "100%" }} spacing={3}>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: tabletMatches ? "row" : "column",
                                        gap: tabletMatches ? "10px" : "25px",
                                    }}
                                >
                                    <Field name="fullname">
                                        {({ field, form, meta }) => (
                                            <div style={{ width: "100%" }}>
                                                <OutlinedInput
                                                    label="Full name"
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                />
                                                {meta.touched && meta.error && (
                                                    <div style={errorStyle}>{meta.error}</div>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="age">
                                        {({ field, form, meta }) => (
                                            <div>
                                                <OutlinedInput
                                                    label="Age"
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    {...field}
                                                />
                                                {meta.touched && meta.error && (
                                                    <div style={errorStyle}>{meta.error}</div>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <Field name="email">
                                    {({ field, form, meta }) => (
                                        <>
                                            <OutlinedInput
                                                label="Email"
                                                type="email"
                                                disabled={true}
                                                {...field}
                                            />
                                            {meta.touched && meta.error && (
                                                <div style={errorStyle}>{meta.error}</div>
                                            )}
                                        </>
                                    )}
                                </Field>
                                <Field name="address">
                                    {({ field, form, meta }) => (
                                        <>
                                            <OutlinedInput label="Address" type="text" {...field} />
                                            {meta.touched && meta.error && (
                                                <div style={{ ...errorStyle }}>{meta.error}</div>
                                            )}
                                        </>
                                    )}
                                </Field>
                                <Field name="phonenumber">
                                    {({ field, form, meta }) => (
                                        <>
                                            <OutlinedInput
                                                label="Phone Number"
                                                type="text"
                                                {...field}
                                            />
                                            {meta.touched && meta.error && (
                                                <div style={{ ...errorStyle }}>{meta.error}</div>
                                            )}
                                        </>
                                    )}
                                </Field>
                            </Stack>
                        </div>

                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <MuiCustomButton onClick={handleSubmit} type="submit">
                                Save
                            </MuiCustomButton>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserInfo;
