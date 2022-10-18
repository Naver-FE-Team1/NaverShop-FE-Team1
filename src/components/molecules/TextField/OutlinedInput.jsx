import React from 'react'
import { TextField } from '@mui/material'

const OutlinedInput = (props) => {

    return (
        <TextField
            sx={{
                ".MuiFormLabel-root.MuiInputLabel-root": {
                    fontSize: "13px"
                },
                ".MuiInputBase-root": {
                    fontSize: "14px"
                },
                ...props.style
            }}
            {...props}
        />
    )
}

export default OutlinedInput