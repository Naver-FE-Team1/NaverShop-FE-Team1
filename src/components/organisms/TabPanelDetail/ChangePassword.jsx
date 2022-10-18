import { async } from '@firebase/util'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FormControl, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography, useMediaQuery } from '@mui/material'
import { updatePassword } from 'firebase/auth'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { auth } from '../../../firebase/firebase-config'
import { ThemeConfig } from '../../../theme/ThemeConfig'
import PasswordInput from '../../molecules/PasswordInput/PasswordInput'
import "./Tabs.scss"

const errorStyle = {
    marginTop: "0",
    marginLeft: "15px",
    color: "red"
}

const ChangePassword = () => {
    const smMatches = useMediaQuery("(min-width: 600px)")

    const compare = (a, b) => {
        return a.localeCompare(b) === 0 ? true : false
    }

    return (
        <div className='user-tab'>
            <Typography variant='h3'>Change Password</Typography>

            <Formik
                initialValues={{
                    newpassword: "",
                    reenter: ""
                }}
                validate={(values) => {
                    const errors = {}

                    //regex for password 
                    if (!values.newpassword) {
                        errors.newpassword = "Please enter your new password"
                    }
                    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(values.newpassword)) {
                        errors.newpassword = "Password must only be contained of at least one digit, one lowercase and one uppercase letter and 6 letter-long"
                    }

                    //regex for reenter password
                    if (!values.reenter) {
                        errors.reenter = "Please re enter your password to be able to process"
                    }
                    else if (!compare(values.newpassword, values.reenter)) {
                        errors.reenter = "Password entered is not correct"
                    }

                    return errors
                }}
                onSubmit={async (values) => {
                    if (compare(values.newpassword, values.reenter)) {
                        updatePassword(auth.currentUser, values.newpassword)
                            .then(() => {
                                console.log("updated!");
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                        console.log("okey")
                    }
                    else {
                        console.log("no")
                    }
                }}
            >
                {(props) => (
                    <Form
                        style={{
                            margin: "15px 0",
                            display: "flex",
                            flexDirection: 'column',
                            gap: "15px"
                        }}
                    >
                        <Field
                            name="newpassword"
                        >
                            {({ field, form, meta }) => (
                                <>
                                    <PasswordInput
                                        label="New Password"
                                        id="new"
                                        {...field}
                                    />
                                    {meta.touched &&
                                        meta.error && <div style={errorStyle}>{meta.error}</div>}
                                </>
                            )}
                        </Field>
                        <Field
                            name="reenter"
                        >
                            {({ field, form, meta }) => (
                                <>
                                    <PasswordInput
                                        label="Re-enter Password"
                                        id="reenter"
                                        {...field}
                                    />
                                    {meta.touched &&
                                        meta.error && <div style={errorStyle}>{meta.error}</div>}
                                </>
                            )}
                        </Field>

                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button
                                onClick={props.submitForm}
                                type='submit'
                                style={{
                                    flex: 1,
                                    maxWidth: smMatches ? "150px" : "100%",
                                    padding: "10px 0",
                                    marginTop: "5px",
                                    borderRadius: "3px",
                                    backgroundColor: ThemeConfig.palette.primary.main,
                                    color: "#fff",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    letterSpacing: "1px"
                                }}
                            >
                                Confirm
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ChangePassword