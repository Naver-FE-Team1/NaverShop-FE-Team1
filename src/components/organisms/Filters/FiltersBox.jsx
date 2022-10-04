import {
    Box,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    Slider,
    Stack,
    Typography
} from '@mui/material'
import { CloseOutlined } from '@mui/icons-material'
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

const FiltersBox = (props) => {

    return (
        <Box
            sx={{ maxWidth: "200px" }}
        >
            <Stack
                spacing={2}
                sx={{
                    paddingX: "20px",
                    paddingY: "15px",
                }}
            >
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
                                        fontFamily: ["Satoshi", "sans-serif"],
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
                    <Slider
                        valueLabelDisplay='auto'
                        defaultValue={[0, 100]}
                    />
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
        </Box>
    )
}

export default FiltersBox