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
// const container = window !== undefined ? () => window.document.body : undefined;

const ShoppingList = () => {
  /*     To open filter drawer (only available for mobile size) */
  //   const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    // setOpenDrawer(!openDrawer);
  };

  return (
    <div
      className="shopping-list"
      //   style={{ width: "100%", backgroundColor: "black" }}
    >
      {/* Top Banner for Shopping List */}

      <Footer />
    </div>
  );
};

export default ShoppingList;
