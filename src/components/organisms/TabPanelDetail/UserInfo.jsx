import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import React, { useEffect, useState } from 'react'
import { ThemeConfig } from '../../../theme/ThemeConfig'
import OutlinedInput from '../../molecules/TextField/OutlinedInput'
import "./Tabs.scss"
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../../firebase/firebase-config'

const errorStyle = {
    marginTop: "5px",
    marginLeft: "15px",
    color: "red"
}

const UserInfo = (props) => {
    const [accountInfo, setAccountInfo] = useState({
        fullname: "",
        email: "",
        address: "",
        phonenumber: ""
    })

    useEffect(() => {
        (async function () {
            const userRef = doc(db, "users", auth.currentUser.uid)
            const userInfoSnap = await getDoc(userRef)

            if (userInfoSnap.exists()) {
                setAccountInfo({ ...userInfoSnap.data() })
            }
            else {
                return
            }
        })()
    }, [])

    // const handleChangeInput = (e) => {
    //     setAccountInfo({
    //         ...accountInfo,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const smMatches = useMediaQuery("(min-width: 600px)")

    return (
        <div className='user-tab'>
            <Typography variant='h3'>My Account</Typography>

            <Formik
                enableReinitialize
                initialValues={accountInfo}
                validate={(values) => {
                    const errors = {};

                    //regex for fullname
                    if (values.fullname && !/^[a-zA-Z ]+$/.test(values.fullname)) {
                        errors.fullname = "Full name can only be consisted of lowercase and uppercase letters"
                    }

                    //regex for email
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    //regex for phonenumber
                    if (values.phonenumber && !/^\d+$/.test(values.phonenumber)) {
                        errors.phonenumber = "Phone number can only be contained of numbers"

                        // if (values.phonenumber.length < 10 || values.phonenumber.length > 11) {
                        //     errors.phonenumber = "Phone number can only be consisted of 10 or 11 numbers"
                        // }
                    }

                    return errors;
                }}
                onSubmit={async (values) => {
                    /*
                    If onSubmit is async, 
                    then Formik will automatically set isSubmitting to false on your behalf 
                    once it has resolved
                    */

                    const usersRef = doc(db, "users", auth.currentUser.uid)

                    await updateDoc(usersRef, {
                        ...values
                    })

                    alert("done")
                }}
            >
                {(props) => (
                    <Form
                        style={{
                            width: "100%",
                            marginTop: "15px"
                        }}
                    >
                        <Stack spacing={3}>
                            <Field
                                name="fullname"
                            >
                                {({ field, form, meta }) => (
                                    <>
                                        <OutlinedInput
                                            label="Full name"
                                            type="text"
                                            {...field}
                                        />
                                        {meta.touched &&
                                            meta.error && <div style={errorStyle}>{meta.error}</div>}
                                    </>
                                )}
                            </Field>
                            <Field
                                name="email"
                            >
                                {({ field, form, meta }) => (
                                    <>
                                        <OutlinedInput
                                            label="Email"
                                            type="email"
                                            disabled={true}
                                            {...field}
                                        />
                                        {meta.touched &&
                                            meta.error && <div style={errorStyle}>{meta.error}</div>}
                                    </>
                                )}
                            </Field>
                            <Field
                                name="address"
                            >
                                {({ field, form, meta }) => (
                                    <>
                                        <OutlinedInput
                                            label="Address"
                                            type="text"
                                            {...field}
                                        />
                                        {meta.touched &&
                                            meta.error && <div style={{ ...errorStyle }}>{meta.error}</div>}
                                    </>
                                )}
                            </Field>
                            <Field
                                name="phonenumber"
                            >
                                {({ field, form, meta }) => (
                                    <>
                                        <OutlinedInput
                                            label="Phone Number"
                                            type="text"
                                            {...field}
                                        />
                                        {meta.touched &&
                                            meta.error && <div style={{ ...errorStyle }}>{meta.error}</div>}
                                    </>
                                )}
                            </Field>

                        </Stack>

                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button
                                onClick={props.submitForm}
                                type='submit'
                                style={{
                                    flex: 1,
                                    maxWidth: smMatches ? "150px" : "100%",
                                    padding: "10px 0",
                                    marginTop: "10px",
                                    borderRadius: "3px",
                                    backgroundColor: ThemeConfig.palette.primary.main,
                                    color: "#fff",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    letterSpacing: "1px"
                                }}
                            >
                                Save
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default UserInfo