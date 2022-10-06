import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography
} from '@mui/material'
import { CloseOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import TitleBanner from '../atoms/TitleBanner'
import DropdownButton from '../molecules/DropdownButton/DropdownButton'
import Banner from '../organisms/Banner/Banner'
import FiltersBox from '../organisms/Filters/FiltersBox'
import ProductList from '../organisms/ProductList/ProductList'

const container = window !== undefined ? () => window.document.body : undefined;

const ShoppingList = () => {
    /*     To open filter drawer (only available for mobile size) */
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer)
    }

    return (
        <div>
            {/* Top Banner for Shopping List */}
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

            {/* Box containing FilterBox and ProductList */}
            <Box
                sx={{
                    paddingY: { xs: "20px", md: "50px" },
                    paddingX: "auto",
                    flex: "1",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-evenly",
                    gap: { xs: "20px", md: "0" }
                }}
            >
                {/* Filter and Sort section */}
                <div>
                    {/* FilterBox and Sorting for mobile size */}
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                            justifyContent: "space-evenly",
                            paddingX: { xs: "20px", sm: "50px" },
                            gap: "20px"
                        }}
                    >
                        <DropdownButton
                            style={{ flex: 1 }}
                            onClick={handleDrawerToggle}
                        >
                            Filtering
                        </DropdownButton>
                        <DropdownButton variant='select'>

                        </DropdownButton>

                        <Box
                            sx={{
                                display: { xs: "none", md: "block" }
                            }}
                            component={"aside"}
                        >
                            <Drawer
                                container={container}
                                open={openDrawer}
                                onClose={handleDrawerToggle}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    '& .MuiDrawer-paper': {
                                        boxSizing: 'border-box',
                                        // width: {xs: "85%", md: "60%" },
                                        width: "fit-content"
                                    },
                                }}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                variant="temporary"
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row-reverse",
                                        padding: "10px"
                                    }}
                                >
                                    <CloseOutlined
                                        onClick={handleDrawerToggle}
                                    />
                                </div>
                                <Divider />
                                <FiltersBox
                                    gap={3}
                                    sx={{
                                        margin: "15px 50px",
                                        marginLeft: "25px"
                                    }}
                                />
                            </Drawer>
                        </Box>
                    </Box>

                    {/* FilterBox and Sorting for laptop and above */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            flexDirection: "column",
                            gap: 3,
                            width: "fit-content",
                        }}
                    >
                        <FiltersBox
                            gap={5}
                        />
                        <DropdownButton variant='select'></DropdownButton>
                    </Box>
                </div>

                {/* Product List section */}
                <Box
                    sx={{
                        maxWidth: { xs: "850px", md: "700px", lg: "850px"},
                        paddingX: { xs: "10px", sm: "25px", md: "25px" }
                    }}
                >
                    <ProductList

                    />
                </Box>
            </Box>
        </div>
    )
}

export default ShoppingList
