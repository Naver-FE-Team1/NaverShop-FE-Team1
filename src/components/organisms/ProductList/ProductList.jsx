import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from "@mui/material";
import { useEffect } from "react";
import { ThemeConfig } from "../../../theme/ThemeConfig";
import Button from "../../atoms/Button";
import { addProducts } from "../../../store/reducers/productsSlice";
import "./productlist.scss";
import { useSelector, useDispatch } from "react-redux";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
const ProductList = (props) => {
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector((state) => state.products);
  const navigate = useNavigate();
  //USEMEDIAQUERY to check true or false of the current width screen
  const smMatches = useMediaQuery("(min-width:600px)");
  const mdMatches = useMediaQuery("(min-width:900px)");
  const lgMatches = useMediaQuery("(min-width:1200px)");

  //fetch products trên firestore xuống redux

  //TODO: NEED TO WORK ON CASE WHERE TITLES CAN BE TOO LONG
  return (
    <ImageList
      gap={smMatches ? 15 : 5}
      cols={lgMatches ? 3 : mdMatches ? 2 : smMatches ? 3 : 2}
      sx={{
        marginTop: "0px",
      }}
    >
      {filteredProducts.map(
        (item, index) =>
          item.data?.active && (
            //GOT TO CHANGE THIS WITH LINK (REACT ROUTER)
            <ImageListItem
              onClick={() => navigate(`/products/detail/${item.id}`)}
              key={index}
            >
              <img
                style={{
                  maxWidth: "100%",
                }}
                src={item.data.image}
                alt={item.data.name}
              />
              <ImageListItemBar
                sx={{
                  marginBottom: "5px",
                }}
                title={
                  <span
                    style={{
                      color: "#2a254b",
                      fontFamily: ["Clash Display", "sans-serif"],
                      display: "block",
                      fontWeight: "400",
                      lineHeight: "140%",
                      fontSize: "20px",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    {item.data.name}
                  </span>
                }
                subtitle={
                  <span
                    style={{
                      color: "#2a254b",
                      fontFamily: ["Clash Display", "sans-serif"],
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "150%",
                    }}
                  >
                    {item.data.price}
                  </span>
                }
                position="below"
              />
            </ImageListItem>
          )
      )}
    </ImageList>
  );
};

export default ProductList;

//THIS DATA IS FOR TESTING!!!!
const itemData = [
  {
    image:
      "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    name: "Breakfast",
    price: "@bkristastucchio",
  },
  {
    image:
      "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    name: "Burger",
    price: "@rollelflex",
  },
  {
    image:
      "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    name: "Camera",
    price: "@helloimnik",
  },
  {
    image:
      "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    name: "Coffee",
    price: "@nolanissac",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    name: "Hats",
    price: "@hjrc33",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    name: "Honey",
    price: "@arwinneil",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    name: "Basketball",
    price: "@tjdragotta",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    name: "Fern",
    price: "@katie_wasserman",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    name: "Mushrooms",
    price: "@silverdalex",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    name: "Tomato basil",
    price: "@shelleypauls",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    name: "Sea star",
    price: "@peterlaster",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    name: "Bike",
    price: "@southside",
  },
];
