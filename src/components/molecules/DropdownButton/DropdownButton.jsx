import { ArrowDropDown } from '@mui/icons-material';
import { Button, MenuItem, Select } from '@mui/material'
import React from 'react'

const DropdownButton = ({ children, title, onClick, style, variant = "button" }) => {

    /* 
        There are 2 variants: button and select
        Default is button
     */
    if (variant === "button") return (
        <Button
            sx={{
                padding: "16px 24px",
                color: "#2a254b",
                textTransform: "capitalize",
                fontWeight: "400",
                backgroundColor: "#f6f6f6",
                ...style
            }}
            title={title}
            onClick={onClick}
            endIcon={<ArrowDropDown />}
        >
            {children}
        </Button>
    )
    else if (variant === "select") return (
        <Select
            variant='outlined'
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            style= {{ ...style }}
            sx={{
                textTransform: "capitalize",
                fontSize: "15px",
                flex: "1 1 0",
                ".MuiSelect-outlined": {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#f6f6f6",
                    padding: "16px 32px",
                    paddingRight: "45px!important",
                    borderRadius: "0",
                    borderColor: "none",
                },
                ".MuiOutlinedInput-notchedOutline": {
                    borderWidth: "0!important"
                }
            }}
        >
            <MenuItem>Sorting</MenuItem>
            {children}
        </Select>
    )
}

export default DropdownButton