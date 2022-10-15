import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { auth } from '../../../firebase/firebase-config'
import { ThemeConfig } from '../../../theme/ThemeConfig'
// import Button from '../../atoms/Button/index'
import "./Tabs.scss"


const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [reenterPassword, setReenterPassword] = useState("")

    const smMatches = useMediaQuery("(min-width: 600px)")

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = (e) => {
        setShowPassword(!showPassword)
    }

    const compare = (a, b) => {
        return a.localeCompare(b) === 0 ? true : false
    }

    const handleConfirm = (e) => {
        e.preventDefault()

        
    }

    return (
        <div className='user-tab'>
            <Typography variant='h3'>Change Password</Typography>

            <form
                style={{
                    margin: "15px 0",
                    display: "flex",
                    flexDirection: 'column',
                    gap: "15px"
                }}
            >
                <FormControl variant='outlined'>
                    <InputLabel htmlFor="outlined-adornment-old-password">Old Password</InputLabel>
                    <OutlinedInput
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        sx={{ fontSize: "14px" }}
                        id='outlined-adornment-old-password'
                        label="Old Password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={handleShowPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl variant='outlined'>
                    <InputLabel htmlFor="outlined-adornment-new-password">New Password</InputLabel>
                    <OutlinedInput
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        sx={{ fontSize: "14px" }}
                        id='outlined-adornment-new-password'
                        label="New Password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={handleShowPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl variant='outlined'>
                    <InputLabel htmlFor="outlined-adornment-reenter-password">Re-enter password</InputLabel>
                    <OutlinedInput
                        value={reenterPassword}
                        onChange={(e) => setReenterPassword(e.target.value)}
                        sx={{ fontSize: "14px" }}
                        id='outlined-adornment-reenter-password'
                        label="Re-enter Password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={handleShowPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        onClick={handleConfirm}
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
            </form>
        </div>
    )
}

export default ChangePassword