import { Grid, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductCard = ({ data }) => {
  const mdMatches = useMediaQuery("(min-width:600px)");
  const lgMatches = useMediaQuery("(min-width:1200px)");

  useEffect(() => {
    console.log(data.image);
  }, []);

  return (
    <Grid id="product-list" item>
      <LazyLoadImage
        alt={data.name}
        effect="blur"
        src={data.image}
        style={
          !mdMatches
            ? {
                width: "100%",
                objectFit: "cover",
              }
            : {
                width: "305px",
                height: "375px",
                objectFit: "cover",
              }
        }
      />
      <div style={{ paddingLeft: "1.5rem" }}>
        <p>{data.name}</p>
        <span>{data.price}</span>
      </div>
    </Grid>
  );
};

export default ProductCard;
