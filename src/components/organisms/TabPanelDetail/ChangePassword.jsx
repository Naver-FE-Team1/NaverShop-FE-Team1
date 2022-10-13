import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, FormControl, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { ThemeConfig } from '../../../theme/ThemeConfig'
import Button from '../../atoms/Button/index'
import "./Tabs.scss"


const ChangePassword = () => {
    const smMatches = useMediaQuery("(min-width: 600px)")

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = (e) => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='user-tab'>
            <Typography variant='h3'>Change Password</Typography>

            <Box
                component="form"
                sx={{
                    margin: "15px 0"
                }}
            >
                <FormGroup
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                        gap: "15px"
                    }}
                >
                    <FormControl variant='outlined'>
                        <InputLabel htmlFor="outlined-adornment-old-password">Old Password</InputLabel>
                        <OutlinedInput
                            id='outlined-adornment-old-password'
                            label="Old Password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        onClick={handleShowPassword}
                                    >
                                        { showPassword ? <VisibilityOff /> : <Visibility /> }
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <FormControl variant='outlined'>
                        <InputLabel htmlFor="outlined-adornment-new-password">New Password</InputLabel>
                        <OutlinedInput
                            id='outlined-adornment-new-password'
                            label="New Password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        onClick={handleShowPassword}
                                    >
                                        { showPassword ? <VisibilityOff /> : <Visibility /> }
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <FormControl variant='outlined'>
                        <InputLabel htmlFor="outlined-adornment-reenter-password">Re-enter password</InputLabel>
                        <OutlinedInput
                            id='outlined-adornment-reenter-password'
                            label="Re-enter Password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        onClick={handleShowPassword}
                                    >
                                        { showPassword ? <VisibilityOff /> : <Visibility /> }
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </FormGroup>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        style={{
                            flex: 1,
                            maxWidth: smMatches ? "150px" : "100%",
                            padding: "10px 0",
                            marginTop: "15px",
                            borderRadius: "3px",
                            backgroundColor: ThemeConfig.palette.primary.main,
                            color: "#fff",
                            fontWeight: "500",
                            letterSpacing: "1px"
                        }}
                    >
                        CONFIRM
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default ChangePassword