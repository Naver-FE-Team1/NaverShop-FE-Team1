import { Chip } from '@mui/material'
import React from 'react'

const StatusChip = (props) => {
    const { status, label } = props

    return (
        <Chip
            
            label={label}
            sx={{
                backgroundColor: "green",
            }}
        />
    )
}

export default StatusChip