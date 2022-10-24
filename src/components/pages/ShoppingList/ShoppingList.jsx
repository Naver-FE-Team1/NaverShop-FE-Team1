/**
 * Contained of filters, sortings and list of products
 * file: ShoppingList.jsx
 */

import { Box, Divider, Drawer, MenuItem } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import DropdownButton from "../../molecules/DropdownButton/DropdownButton";
import Banner from "../../organisms/Banner/Banner";
import FiltersBox from "../../organisms/Filters/FiltersBox";
import ProductList from "../../organisms/ProductList/ProductList";
import "./shoppingList.scss";
import backgroundImage from "../../../assets/background-banner.jpg";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  addProducts,
} from "../../../store/reducers/productsSlice";

const container = window !== undefined ? () => window.document.body : undefined;

// const productCategoryList = [
//   "Áo Thun Form Rộng",
//   "Quần Short Form Trên Gối",
//   "Quần Dài Form Tiêu Chuẩn",
//   "Áo Thun Form Tiêu Chuẩn",
//   "Áo thun",
// ];

const sizeList = ["S", "M", "L", "XL", "XXL", "XXXL"];

const colorList = ["black", "red", "white", "green", "blue", "brown"];

const ShoppingList = () => {
  /*     To open filter drawer (only available for mobile size) */
  const [openDrawer, setOpenDrawer] = useState(false);
  const [productCategoryList, setProductCategoryList] = useState([]);
  const [filter, setFilter] = useState({
    category: [],
    color: [],
    price: [0, 100],
    sizes: [],
  });
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleClickFilter = async () => {
    let tempPos = []; //chứa danh sách các trường filter được chọn trên UI
    for (let item in filter) {
      if (filter[item].length > 0 && item !== "price") {
        tempPos.push(item);
      }
    }
    // console.log(tempPos);
    //trường hợp chỉ chọn 1 field để filter
    if (tempPos.length === 1) {
      let temp = [];
      if (tempPos[0] === "category") {
        let q = query(
          collection(db, "products"),
          where("category", "in", filter.category)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          temp.push({ data: doc.data(), id: doc.id });
        });
      } else {
        let q = query(
          collection(db, "products"),
          where(tempPos[0], "array-contains-any", filter[tempPos[0]])
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          temp.push({ data: doc.data(), id: doc.id });
        });
      }
      temp = temp.filter((item) => {
        if (filter.price.length !== undefined) {
          return (
            item.data.price > filter.price[0] * 10000 &&
            item.data.price < filter.price[1] * 10000
          );
        } else {
          return (
            item.data.price > filter.price.range[0] * 10000 &&
            item.data.price < filter.price.range[1] * 10000
          );
        }
      });
      dispatch(filterProducts(temp));
    } else if (tempPos.length > 1) {
      let resArr = [];
      if (tempPos[0] === "category") {
        const q2 = query(
          collection(db, "products"),
          where("category", "in", filter.category)
        );
        const querySnapshot = await getDocs(q2);
        tempPos = tempPos.filter((item) => item !== "category");
        //Chỉ có 2 field sử dụng array-contains-any
        //So sánh các array item với nhau trong trường hợp có quá nhiều field cần filter

        querySnapshot.forEach((doc) => {
          let flag = true;
          tempPos.forEach((item) => {
            //các item chắc chắc sẽ là các array
            filter[item].forEach((item2) => {
              if (!doc.data()[item].includes(item2)) {
                flag = false;
              }
            });
          });
          if (flag === true) resArr.push({ data: doc.data(), id: doc.id });
        });
      } else {
        const q3 = query(
          collection(db, "products"),
          where(tempPos[0], "array-contains-any", filter[tempPos[0]])
        );
        let firstItem = tempPos[0];
        const querySnapshot2 = await getDocs(q3);
        tempPos = tempPos.filter((item) => item !== firstItem);
        querySnapshot2.forEach((doc) => {
          let flag = true; //mặc định là sản phẩm doc là có đầy đủ các filter được filter
          tempPos.forEach((item) => {
            //các item chắc chắc sẽ là các array
            filter[item].forEach((item2) => {
              if (!doc.data()[item].includes(item2)) {
                flag = false;
              }
            });
          });
          flag && resArr.push({ data: doc.data(), id: doc.id });
        });
      }

      resArr = resArr.filter((item) => {
        if (filter.price.length !== undefined) {
          return (
            item.data.price > filter.price[0] * 10000 &&
            item.data.price < filter.price[1] * 10000
          );
        } else {
          return (
            item.data.price > filter.price.range[0] * 10000 &&
            item.data.price < filter.price.range[1] * 10000
          );
        }
      });

      dispatch(filterProducts(resArr));
    } else {
      let resArr = [];

      const q4 =
        filter.price.length !== undefined
          ? query(
              collection(db, "products"),
              where("price", ">", filter.price[0] * 10000),
              where("price", "<", filter.price[1] * 10000)
            )
          : query(
              collection(db, "products"),
              where("price", ">", filter.price.range[0] * 10000),
              where("price", "<", filter.price.range[1] * 10000)
            );

      const querySnapshot = await getDocs(q4);
      querySnapshot.forEach((doc) => {
        resArr.push({ data: doc.data(), id: doc.id });
      });

      dispatch(filterProducts(resArr));
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      (async () => {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        let res = [];
        querySnapshot.forEach((doc) => {
          res.push({ data: doc.data(), id: doc.id });
        });
        dispatch(addProducts(res));
      })();
    }
    (async () => {
      const categoryQuery = query(collection(db, "categories"));
      const snapshot = await getDocs(categoryQuery);
      let res = [];
      snapshot.forEach((doc) => {
        res.push(doc.data());
      });
      // console.log(res);
      setProductCategoryList([...res]);
    })();
    return () => {
      dispatch(filterProducts([...products]));
    };
  }, []);

  return (
    <div className="shopping-list">
      {/* Top Banner for Shopping List */}
      <Banner bgImg={backgroundImage}>All products</Banner>

      {/* Box containing FilterBox and ProductList */}
      <Box
        sx={{
          paddingY: { xs: "25px", md: "60px" },
          paddingX: "auto",
          flex: "1",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          gap: { xs: "25px", md: "0" },
        }}
      >
        {/* Filter and Sort section */}
        <div>
          {/* FilterBox and Sorting for mobile size */}
          <Box
            sx={{
              display: { xs: "grid", md: "none" },
              gridTemplateColumns: "1fr 1fr",
              paddingX: "5%",
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
                  sizeList={sizeList}
                  colorList={colorList}
                  productCategoryList={productCategoryList}
                  onClick={handleClickFilter}
                  setFilter={setFilter}
                  filter={filter}
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
            <FiltersBox
              sizeList={sizeList}
              colorList={colorList}
              productCategoryList={productCategoryList}
              setFilter={setFilter}
              onClick={handleClickFilter}
              filter={filter}
              gap={5}
            />
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
            width: { md: "70%" },
            paddingX: { xs: "1%", md: "5%" },
          }}
        >
          <ProductList />
        </Box>
      </Box>
    </div>
  );
};

export default ShoppingList;
