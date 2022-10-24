import { ImageListItemBar, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import "./productlist.scss";

const ProductList = (props) => {
  const { filteredProducts } = useSelector((state) => state.products);
  const navigate = useNavigate();
  //USEMEDIAQUERY to check true or false of the current width screen
  const smMatches = useMediaQuery("(min-width:600px)");
  const mdMatches = useMediaQuery("(min-width:900px)");
  const lgMatches = useMediaQuery("(min-width:1200px)");

  //fetch products trên firestore xuống redux

  let responsiveProductStyle;
  if (!smMatches) {
    responsiveProductStyle = {
      width: "100%",
      height: "256px",
      objectFit: "cover",
    };
  } else if (!mdMatches) {
    responsiveProductStyle = {
      width: "100%",
      height: "561px",
      objectFit: "cover",
    };
  } else if (!lgMatches) {
    responsiveProductStyle = {
      width: "100%",
      height: "282px",
      objectFit: "cover",
    };
  } else {
    responsiveProductStyle = {
      width: "100%",
      height: "282px",
      objectFit: "cover",
    };
  }
  //TODO: NEED TO WORK ON CASE WHERE TITLES CAN BE TOO LONG
  return (
    <Grid container spacing={{ lg: 4, xs: 4 }}>
      {filteredProducts.map(
        (item, index) =>
          item.data?.active && (
            
            //GOT TO CHANGE THIS WITH LINK (REACT ROUTER)
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={3}
              sx={{ width: "100%", cursor: "pointer" }}
              
              key={index}
            >
              {/* {console.log(item.data)} */}
              <div className="product-card-img d-flex justify-content-center">
                <img
                  style={responsiveProductStyle}
                  src={item.data.image}
                  alt={item.data.name}
                  onClick={() => navigate(`/products/${item.id}`)}
                />
                <div className="product-card-img-button">
                  <Button
                    width="100%"
                    padding="16px 0"
                    txtColor="#fff"
                    bgColor="#2a254b"
                    // onClick={}
                  >
                    Add to cart
                  </Button>
                  <Button
                    width="100%"
                    padding="16px 0"
                    txtColor="#2A254B"
                    bgColor="#F9F9F9"
                    margin="10px 0"
                  >
                    Buy now
                  </Button>
                </div>
              </div>
              <ImageListItemBar
                sx={{
                  marginBottom: "5px",
                  width: "100%",
                  height: "100%",
                }}
                title={
                  <span
                    style={{
                      width: "100%",
                      color: "#2a254b",
                      fontFamily: ["Clash Display", "sans-serif"],
                      display: "block",
                      fontWeight: "400",
                      lineHeight: "140%",
                      fontSize: "20px",
                      marginTop: "5px",
                      marginBottom: "5px",
                      whiteSpace: "initial",
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
                    {item.data.price.toLocaleString("vi-vn", {
                      style: "currency",
                      currency: "VND"
                    })}
                  </span>
                }
                position="below"
              />
            </Grid>
          )
      )}
    </Grid>
  );
};

export default ProductList;
