import { MenuItem } from '@mui/material'
import React, { useState } from 'react'
import TitleBanner from '../atoms/TitleBanner'
import DropdownButton from '../molecules/DropdownButton/DropdownButton'
import StyledMenu from '../molecules/StyledMenu/StyledMenu'
import Banner from '../organisms/Banner/Banner'

const ShoppingList = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Banner>
                <TitleBanner
                    style={{
                        margin: 0,
                        fontFamily: ["Clash Display", "sans-serif"],
                        fontWeight: "400",
                        color: "#fff",
                        fontSize: "28px",
                        textAlign: "center"
                    }}
                >
                    All products
                </TitleBanner>
            </Banner>

            <DropdownButton onClick={handleClick}>
                Filtering
            </DropdownButton>
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    Edit
                </MenuItem>

            </StyledMenu>
            <DropdownButton>
                Sorting
            </DropdownButton>
        </div>
    )
}

export default ShoppingList