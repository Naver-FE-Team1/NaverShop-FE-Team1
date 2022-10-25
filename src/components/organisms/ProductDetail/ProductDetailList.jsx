import { Stack, useMediaQuery, Grid, Container } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SliderSlick from "../../molecules/SliderSlick/SliderSlick";
import ProductList from "../ProductList/ProductList";

import ProductCard from "./ProductCard";

const ProductDetailList = ({ productList }) => {
  const mdMatches = useMediaQuery("(min-width:600px)");
  const lgMatches = useMediaQuery("(min-width:1200px)");

  //TODO: NEED TO WORK ON CASE WHERE TITLES CAN BE TOO LONG
  return (
    <Container
      style={{
        paddingLeft: "40px",
        marginTop: "4rem",
      }}
      data-aos="zoom-in-down"
    >
      <Grid container spacing={4} xs={{}}>
        <SliderSlick showItem={2}>
          {productList
            // .filter((item) => {
            //   return item.active === true;
            // })
            .map((item, index) => (
              <ProductCard key={index} data={item} />
            ))}
        </SliderSlick>
      </Grid>
    </Container>
  );
};

export default ProductDetailList;
