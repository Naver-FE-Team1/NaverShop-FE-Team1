import { Stack, useMediaQuery, Grid, Container } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SliderSlick from "../../molecules/SliderSlick/SliderSlick";
import ProductList from "../ProductList/ProductList";

import ProductCard from "./ProductCard";

const ProductDetailList = ({ productList }) => {
  const mdMatches = useMediaQuery("(min-width:600px)");
  const lgMatches = useMediaQuery("(min-width:1200px)");
  console.log(productList);
  //TODO: NEED TO WORK ON CASE WHERE TITLES CAN BE TOO LONG
  return (
    <Container style={{ paddingLeft: "40px", marginTop: "4rem" }}>
      <Grid container spacing={4} xs={{}}>
        <SliderSlick showItem={lgMatches ? 3 : 2}>
          {productList
            .filter((item) => {
              return item.active === true;
            })
            .map((item, index) => (
              <ProductCard key={index} data={item} />
            ))}
        </SliderSlick>
      </Grid>
    </Container>
  );
};

export default ProductDetailList;

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
