/**
 * Logout tab (for User Profile page)
 * file Logout.jsx
 */

import { Modal, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase/firebase-config'
import { ThemeConfig } from '../../../theme/ThemeConfig'
import MuiCustomButton from '../../atoms/Button/MuiCustomButton'

const Logout = (props) => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(true)

    const handleCloseModal = () => {
        setOpenModal(false)
        props.setTabValue(0)
    }

    const handleSignOut = () => {
        if (auth.currentUser) {
            auth.signOut()
        }
        navigate('/')
    }

    return (
        <Modal
            open={openModal}
            onClose={handleCloseModal}
        >
            <Paper
                style={{
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: 'translate(-50%, -50%)',
                    width: "300px",
                    height: "150px",
                    overflow: "auto",
                    padding: "20px 30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div style={{ flex: 1 }}>
                    <h1 style={{
                        textAlign: "center",
                        fontSize: "18px"
                    }}>
                        Do you want to sign out?
                    </h1>

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "15px",
                        marginTop: "10px"
                    }}>
                        <MuiCustomButton
                            onClick={handleCloseModal}
                            style={{
                                backgroundColor: "#fff",
                                color: ThemeConfig.palette.primary.main  
                            }}
                        >
                            Cancel
                        </MuiCustomButton>

                        <MuiCustomButton
                            onClick={handleSignOut}
                        >
                            Sign out
                        </MuiCustomButton>
                    </div>
                </div>
            </Paper>
        </Modal>
    )
}

export default Logout