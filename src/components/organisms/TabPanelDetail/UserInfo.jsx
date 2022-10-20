import { Stack, Typography } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import React, { useEffect, useState } from 'react'
import OutlinedInput from '../../molecules/TextField/OutlinedInput'
import "./Tabs.scss"
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../../firebase/firebase-config'
import AvatarButton from '../AvatarButton/AvatarButton'
import MuiCustomButton from '../../atoms/Button/MuiCustomButton'

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
        phonenumber: "",
    })
    
    useEffect(() => {
        (async function () {
            const userRef = doc(db, "users", auth.currentUser?.uid)
            const userInfoSnap = await getDoc(userRef)
            if (userInfoSnap.exists()) {
                setAccountInfo({ ...userInfoSnap.data() })
            }
            else {
                return
            }
        })()
    }, [])


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

                    const userRef = doc(db, "users", auth.currentUser?.uid)
                    await updateDoc(userRef, {
                        ...values
                    })
                }}
            >
                {(props) => (
                    <Form
                        style={{
                            width: "100%",
                            marginTop: "15px"
                        }}
                    >
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "25px"
                        }}>
                            <AvatarButton /> 
                            <Stack sx={{ width: "100%" }} spacing={3}>
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
                        </div>


                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <MuiCustomButton
                                onClick={props.submitForm}
                                type="submit"
                            >
                                Save
                            </MuiCustomButton>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default UserInfo