import React from 'react'
import { TextField } from '@mui/material'

const OutlinedInput = (props) => {
    const { value, name, onChange, placeholder, disabled=false, style, others } = props

    return (
        <TextField
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            sx={{
                ".MuiFormLabel-root.MuiInputLabel-root": {
                    fontSize: "13px"
                },
                ".MuiInputBase-root": {
                    fontSize: "14px"
                },
                ...style
            }}
            {...others}
        />
    )
}

export default OutlinedInput