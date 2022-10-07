import { Box, Divider, Drawer, MenuItem } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useState } from "react";
import TitleBanner from "../atoms/TitleBanner";
import DropdownButton from "../molecules/DropdownButton/DropdownButton";
import Banner from "../organisms/Banner/Banner";
import FiltersBox from "../organisms/Filters/FiltersBox";
import ProductList from "../organisms/ProductList/ProductList";
import Footer from "../molecules/Footer/Footer";
import "./shoppingList.scss";
import Header from "../organisms/Header";
const container = window !== undefined ? () => window.document.body : undefined;

const ShoppingList = () => {
  /*     To open filter drawer (only available for mobile size) */
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className="shopping-list">
      <Header />
      {/* Top Banner for Shopping List */}
      <Banner>
        <TitleBanner
          style={{
            margin: 0,
            fontFamily: ["Clash Display", "sans-serif"],
            fontWeight: "400",
            color: "#fff",
            fontSize: "28px",
            textAlign: "center",
          }}
        >
          All products
        </TitleBanner>
      </Banner>

      {/* Box containing FilterBox and ProductList */}
      <Box
        sx={{
          paddingY: { xs: "20px", md: "60px" },
          paddingX: "auto",
          flex: "1",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          gap: { xs: "20px", md: "0" },
        }}
      >
        {/* Filter and Sort section */}
        <div>
          {/* FilterBox and Sorting for mobile size */}
          <Box
            sx={{
              display: { xs: "grid", md: "none" },
              gridTemplateColumns: "1fr 1fr",
              paddingX: { xs: "15px", sm: "50px" },
              gap: "20px",
            }}
          >
            <DropdownButton
              style={{
                fontSize: "14px",
                fontWeight: "500",
              }}
              onClick={handleDrawerToggle}
            >
              Filtering
            </DropdownButton>
            <DropdownButton
              variant="select"
              style={{
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <MenuItem>Sorting</MenuItem>
              <MenuItem>Date added (Ascending)</MenuItem>
              <MenuItem>Date added (Descending)</MenuItem>
            </DropdownButton>

            <Box
              sx={{
                display: { xs: "none", md: "block" },
              }}
              component={"aside"}
            >
              <Drawer
                container={container}
                open={openDrawer}
                onClose={handleDrawerToggle}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    // width: {xs: "75%", md: "60%" },
                    width: "fit-content",
                  },
                }}
                // Better open performance on mobile.
                ModalProps={{ keepMounted: true }}
                variant="temporary"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    padding: "10px",
                  }}
                >
                  <CloseOutlined onClick={handleDrawerToggle} />
                </div>
                <Divider />
                <FiltersBox
                  gap={3}
                  sx={{
                    margin: "15px 50px",
                    marginLeft: "25px",
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
            <FiltersBox gap={5} />
            <DropdownButton
              variant="select"
              style={{
                maxWidth: "180px",
              }}
            >
              <MenuItem>Sorting</MenuItem>
              <MenuItem>Date added (Ascending)</MenuItem>
              <MenuItem>Date added (Descending)</MenuItem>
            </DropdownButton>
          </Box>
        </div>

        {/* Product List section */}
        <Box
          sx={{
            maxWidth: { xs: "850px", md: "700px", lg: "850px" },
            paddingX: { xs: "10px", sm: "25px", md: "25px" },
          }}
        >
          <ProductList />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default ShoppingList;
