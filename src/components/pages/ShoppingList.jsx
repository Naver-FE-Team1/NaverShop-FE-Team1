import { CheckBox } from '@mui/icons-material'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Slider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import TitleBanner from '../atoms/TitleBanner'
import DropdownButton from '../molecules/DropdownButton/DropdownButton'
import StyledMenu from '../molecules/StyledMenu/StyledMenu'
import Banner from '../organisms/Banner/Banner'
import ProductList from '../organisms/ProductList/ProductList'

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
            <DropdownButton>
                Sorting
            </DropdownButton>


            <Stack spacing={3}>
                <FormControl>
                    <Typography
                        sx={{
                            fontFamily: ["Clash Display", "sans-serif"],
                            color: "#2a254b"
                        }}
                    >
                        Product type
                    </Typography>
                    {productTypeList.map((item) => (
                        <FormControlLabel
                            control={<Checkbox />}
                            label={
                                <span
                                    style={{
                                        fontFamily: ["Clash Display", "sans-serif"],
                                        color: "#2a254b"
                                    }}
                                >
                                    {item}
                                </span>}
                        />
                    ))}
                </FormControl>

                <FormControl>
                    <Typography
                        sx={{
                            fontFamily: ["Clash Display", "sans-serif"],
                            color: "#2a254b"
                        }}
                    >
                        Price
                    </Typography>
                    <Slider defaultValue={50}/>
                </FormControl>

                <FormControl>
                    <Typography
                        sx={{
                            fontFamily: ["Clash Display", "sans-serif"],
                            color: "#2a254b"
                        }}
                    >
                        Brand
                    </Typography>
                    {brandList.map((item) => (
                        <FormControlLabel
                            control={<Checkbox />}
                            label={
                                <span
                                    style={{
                                        fontFamily: ["Clash Display", "sans-serif"],
                                        color: "#2a254b"
                                    }}
                                >
                                    {item}
                                </span>}
                        />
                    ))}
                </FormControl>
            </Stack>
            {/* <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    Edit
                </MenuItem>

            </StyledMenu> */}


            <ProductList />
        </div>
    )
}

export default ShoppingList


const productTypeList = [
    "Furniture",
    "Homeware",
    "Sofas",
    "Light fittings",
    "Accessories"
]

const brandList = [
    "Robert Smith",
    "Liam Gallagher",
    "Robert Smith",
    "Liam Gallagher",
]