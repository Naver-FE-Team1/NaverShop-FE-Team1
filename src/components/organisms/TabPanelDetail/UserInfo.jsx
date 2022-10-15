import { Button, Typography, useMediaQuery } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from "yup"
import React, { useEffect, useState } from 'react'
import { ThemeConfig } from '../../../theme/ThemeConfig'
import OutlinedInput from '../../molecules/TextField/OutlinedInput'
import "./Tabs.scss"
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../../firebase/firebase-config'



const UserInfo = (props) => {
    const [accountInfo, setAccountInfo] = useState({
        //TO DO: GOT TO CAMELCASE THIS IN FIREBASE
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
                setAccountInfo({ ...userInfoSnap.data() })            }
            else {
                return 
            }
        })()
    }, [])

    const handleChangeInput = (e) => {
        setAccountInfo({
            ...accountInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = async (e) => {
        e.preventDefault()

        const dataRef = doc(db, "users", auth.currentUser.uid)

        await updateDoc(dataRef, {
            ...accountInfo
        })

        //TO DO: POP A NOTIFICATION FOR USERS
    }

    const smMatches = useMediaQuery("(min-width: 600px)")

    // const formik = useFormik({
    //     initialValues: {
    //         fullname: data.fullname || "",
    //         email: data.email,
    //         address: data.address || "",
    //         phoneNumber: data.phonenumber || "",
    //     },
    //     validationSchema: Yup.object({
    //         fullname: Yup.string(),
    //         email: Yup.string()
    //             .email("Invalid email address")
    //             .required("Required"),
    //         address: Yup.string(),
    //         phoneNumber: Yup.string()
    //             .min(10, "Must be atleast 10 numbers")
    //             .max(11, "Cannot be higher than 11 numbers")
    //     }),
    //     onSubmit: values => {
    //         alert(JSON.stringify(values, null, 2))
    //     },
    // })

    return (
        <div className='user-tab'>
            <Typography variant='h3'>My Account</Typography>

            <form
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: "15px",
                    margin: "15px 0"
                }}
            >
                <OutlinedInput
                    name="fullname"
                    placeholder="Full name"
                    label="Full name"
                    value={accountInfo.fullname}
                    onChange={handleChangeInput}   
                />

                <OutlinedInput
                    name="email"
                    placeholder='Email'
                    label="Email"
                    value={accountInfo.email}
                    disabled={true}
                />
                <OutlinedInput
                    name="address"
                    placeholder='Address'
                    label="Address"
                    value={accountInfo.address}
                    onChange={handleChangeInput}
                // value={data.address}
                />
                <OutlinedInput
                    name="phonenumber"
                    placeholder='Phone number'
                    label="Phone number"
                    value={accountInfo.phonenumber}
                    onChange={handleChangeInput}
                />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        onClick={handleSave}
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
                        Save
                    </Button>

                </div>
            </form>

        </div>
    )
}

export default UserInfo