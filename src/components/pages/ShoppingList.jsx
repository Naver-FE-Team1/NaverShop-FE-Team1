import {
    Box,
    Divider,
    Drawer,
    Grid,
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

const navItems = ['Home', 'About', 'Contact'];

const ShoppingList = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    const container = window !== undefined ? () => window.document.body : undefined;

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

            <Grid
                container
                direction={{ xs: "column", md: "row" }}
                alignItems={"flex-start"}
                justifyContent={"center"}
            >
                <Grid item xs={2} md={3}>
                    <Box
                        sx={{
                            display: { xs: "block", md: "none" }
                        }}
                    >
                        <DropdownButton onClick={handleDrawerToggle}>
                            Filtering
                        </DropdownButton>
                        <DropdownButton >
                            Sorting
                        </DropdownButton>

                        <Box component={"aside"}>
                            <Drawer
                                container={container}
                                open={openDrawer}
                                onClose={handleDrawerToggle}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    '& .MuiDrawer-paper': {
                                        boxSizing: 'border-box',
                                        width: "90%"
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

                                />
                            </Drawer>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: "none", md: "block" },
                            width: "fit-content"
                        }}
                    >
                        <FiltersBox />
                    </Box>
                </Grid>

                <Grid item xs={10} md={9}>
                    <ProductList

                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default ShoppingList
