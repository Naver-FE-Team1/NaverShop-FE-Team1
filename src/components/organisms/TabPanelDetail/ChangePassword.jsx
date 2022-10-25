/**
 * Change Password tab for User Profile
 * file: ChangePassword.jsx
 */

import { Typography } from '@mui/material'
import { updatePassword } from 'firebase/auth'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'
import { auth } from '../../../firebase/firebase-config'
import MuiCustomButton from '../../atoms/Button/MuiCustomButton'
import PasswordInput from '../../molecules/PasswordInput/PasswordInput'

const errorStyle = {
    marginTop: "0",
    marginLeft: "15px",
    color: "red"
}

const ChangePassword = () => {

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
                    else if (!/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/.test(values.newpassword)) {
                        errors.newpassword = "Password must only be contained of at least one digit, one lowercase or one uppercase letter and 6 letter-long"
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
                                console.log("Password updated!");
                                toast.success("Cập nhật mật khẩu thành công!")
                            })
                            .catch((err) => {
                                toast.error("Đã xảy ra lỗi! Xin vui lòng thử lại!")
                            })
                    }
                    else {
                        toast.error("2 mật khẩu vừa nhập không trùng nhau, vui lòng nhập lại!")
                        console.log("Error while changing password")
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
                            <MuiCustomButton
                                onClick={props.submitForm}
                                type="submit"
                            >
                                Confirm
                            </MuiCustomButton>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ChangePassword