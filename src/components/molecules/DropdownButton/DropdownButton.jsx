import { ArrowDropDown } from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const DropdownButton = ({ children, title, onClick, style }) => {
    
    return (
        <Button
            sx={{
                padding: "16px 24px",
                color: "#2a254b",
                textTransform: "capitalize",
                fontWeight: "400",
                backgroundColor: "#f6f6f6",
                width: "140px",
                ...style
            }}
            title={title}
            onClick={onClick}
            endIcon={<ArrowDropDown />}
        >
            {children}
        </Button>
    )
}

export default DropdownButton