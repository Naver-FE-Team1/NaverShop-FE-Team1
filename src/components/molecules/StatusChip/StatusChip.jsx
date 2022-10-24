import { Chip } from '@mui/material'
import React, { useState } from 'react'

const StatusChip = (props) => {
    const { label } = props

    const [bgColor, setBgColor] = useState(() => {
        switch (label.toLowerCase()) {
            case "pending":
                return "#06d6a0"
            case "cancelled":
                return "#e63946"
            case "dispatch":
                return "#00b4d8"
            case "completed":
                return "#f9c74f"
            default:
                return "#000"
        }
    })

    return (
        <Chip

            label={label}
            sx={{
                backgroundColor: `${bgColor}`,
                color: "#495057",
                fontSize: '10px',
                fontWeight: "600",
                width: "80px",
                textTransform: "capitalize"
            }}
        />
    )
}

export default StatusChip