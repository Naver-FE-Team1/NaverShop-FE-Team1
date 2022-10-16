import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'

const PasswordInput = (props) => {
    const { label, id } = props

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <FormControl variant='outlined'>
            <InputLabel style={{ fontSize: "14px" }} htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput
                sx={{ fontSize: "14px" }}
                id={`outlined-adornment-${id}password`}
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
                {...props}
            />
        </FormControl>
    )
}

export default PasswordInput