import { Box, FormGroup, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { ThemeConfig } from '../../../theme/ThemeConfig'
import Button from "../../atoms/Button/index"
import "./Tabs.scss"


const UserInfo = () => {
    const smMatches = useMediaQuery("(min-width: 600px)")

    return (
        <div className='user-tab'>
            <Typography variant='h3'>My Account</Typography>

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
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "5px"
                        }}
                    >
                        <TextField
                            placeholder='First name'
                            label="First name"
                            sx={{ flex: 1 }}
                        />
                        <TextField
                            placeholder='Last name'
                            label="Last name"
                            sx={{ flex: 1 }}
                        />
                    </div>

                    <TextField
                        placeholder='Email'
                        label="Email"
                    />
                    <TextField
                        placeholder='Address'
                        label="Address"
                    />
                    <TextField
                        placeholder='Phone number'
                        label="Phone number"
                    />
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
                        SAVE
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default UserInfo