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
                "&.MuiButton-root": {
                    justifyContent: "space-between"  
                },
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
            style={{ ...style }}
            sx={{
                maxWidth: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textTransform: "capitalize",
                ".MuiSelect-outlined": {
                    // display: "flex",
                    // flexDirection: "row",
                    // justifyContent: "space-between",
                    backgroundColor: "#f6f6f6",
                    padding: "16px 24px",
                    paddingRight: "60px!important",
                    borderRadius: "0",
                    borderColor: "none",
                },
                ".MuiOutlinedInput-notchedOutline": {
                    borderWidth: "0!important"
                }
            }}
        >
            {children}
        </Select>
    )
}

export default DropdownButton