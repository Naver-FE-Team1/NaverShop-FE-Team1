import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    Slider,
    Stack,
} from '@mui/material'
import React from 'react'

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

const ThemedCheckbox = () => {
    return (
        <Checkbox
            sx={{
                color: "#2a254b",
                "&.Mui-checked": {
                    color: "#2a254b"
                }
            }}
        />
    )
}

const FiltersBox = (props) => {
    const styleH3 = {
        fontFamily: ["Clash Display", "sans-serif"],
        color: "#2a254b",
        fontWeight: "400",
        fontSize: "20px",
        marginTop: "0",
        marginBottom: "10px"
    }

    return (
        <Box
            sx={{
                maxWidth: "250px",
                ...props.sx
            }}
        >
            <Stack
                spacing={props.gap ? props.gap : 2}
            >
                {/* Product type filter */}
                <FormControl>
                    <h3
                        style={styleH3}
                    >
                        Product type
                    </h3>
                    {productTypeList.map((item) => (
                        <FormControlLabel
                            control={<ThemedCheckbox />}
                            sx={{
                                marginLeft: "2px"
                            }}
                            label={
                                <span
                                    style={{
                                        fontFamily: ["Satoshi", "sans-serif"],
                                        color: "#2a254b"
                                    }}
                                >
                                    {item}
                                </span>}
                        />
                    ))}
                </FormControl>

                {/* Price range filter */}
                <FormControl>
                    <h3
                        style={styleH3}
                    >
                        Price
                    </h3>
                    <Box
                        sx={{
                            paddingX: "10px"
                        }}
                    >
                        <Slider
                            sx={{
                                color: "#2a254b",
                                "&.MuiSlider-root": {
                                    paddingY: "10px"
                                }
                            }}
                            size='small'
                            valueLabelDisplay='auto'
                            defaultValue={[0, 100]}
                        />
                    </Box>
                </FormControl>

                {/* Brand filter */}
                <FormControl>
                    <h3
                        style={styleH3}
                    >
                        Brand
                    </h3>
                    {brandList.map((item) => (
                        <FormControlLabel
                            control={<ThemedCheckbox />}
                            sx={{
                                marginLeft: "2px"
                            }}
                            label={
                                <span
                                    style={{
                                        fontFamily: ["Satoshi", "sans-serif"],
                                        color: "#2a254b"
                                    }}
                                >
                                    {item}
                                </span>}
                        />
                    ))}
                </FormControl>
            </Stack>
        </Box>
    )
}

export default FiltersBox