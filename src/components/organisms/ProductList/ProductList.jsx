import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from "@mui/material";
import { useEffect } from "react";
import Button from "../../atoms/Button";
import { addProducts } from "../../../store/reducers/productsSlice";
import "./productlist.scss";
import { useSelector, useDispatch } from "react-redux";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
const ProductList = (props) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  //USEMEDIAQUERY to check true or false of the current width screen
  const smMatches = useMediaQuery("(min-width:600px)");
  const mdMatches = useMediaQuery("(min-width:900px)");
  const lgMatches = useMediaQuery("(min-width:1200px)");

  useEffect(() => {
    if (products.length === 0) {
      (async () => {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          dispatch(addProducts({ data: doc.data(), id: doc.id }));
        });
      })();
    }
  }, []);

  //TODO: NEED TO WORK ON CASE WHERE TITLES CAN BE TOO LONG
  return (
    <ImageList
      gap={smMatches ? 8 : 0}
      cols={lgMatches ? 4 : mdMatches ? 3 : smMatches ? 3 : 2}
      sx={{
        width: 1,
        marginTop: "0px",
      }}
    >
      {products.map((item, index) => (
        //GOT TO CHANGE THIS WITH LINK (REACT ROUTER)
        <ImageListItem
          onClick={() => navigate(`/detail/${item.id}`)}
          sx={{ width: "30%" }}
          key={item.id}
        >
          <img
            style={
              !smMatches
                ? {
                    width: "163px",
                    height: "201px",
                    objectFit: "cover",
                  }
                : {}
            }
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
      ))}
    </ImageList>
  );
};

export default ProductList;

//THIS DATA IS FOR TESTING!!!!
const itemData = [
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    title: "Burger",
    author: "@rollelflex",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756",
    title: "Bike",
    author: "@southside",
  },
];
