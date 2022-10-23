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
    <Grid
      container
      spacing={{ lg: 4, xs: 4 }}
      // gap={smMatches ? 15 : 5}
      // cols={lgMatches ? 3 : mdMatches ? 2 : smMatches ? 3 : 2}
      // sx={{
      //   marginTop: "0px",
      //   width: { sm: "100%" },
      // }}
    >
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
              onClick={() => navigate(`/products/detail/${item.id}`)}
              key={index}
            >
              <div className="product-card-img d-flex justify-content-center">
                <img
                  style={responsiveProductStyle}
                  src={item.data.image}
                  alt={item.data.name}
                />
                <div className="product-card-img-button">
                  <Button
                    width="100%"
                    padding="16px 0"
                    txtColor="#fff"
                    bgColor="#2a254b"
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
                    {item.data.price}
                  </span>
                }
                position="below"
              />
            </Grid>
          )
      )}
    </Grid>
    // <ImageList
    //   gap={smMatches ? 15 : 5}
    //   cols={lgMatches ? 3 : mdMatches ? 2 : smMatches ? 3 : 2}
    //   sx={{
    //     marginTop: "0px",
    //     width: { sm: "100%" },
    //   }}
    // >
    //   {filteredProducts.map(
    //     (item, index) =>
    //       item.data?.active && (
    //         //GOT TO CHANGE THIS WITH LINK (REACT ROUTER)
    //         <ImageListItem
    //           sx={{ width: "163px" }}
    //           onClick={() => navigate(`/products/detail/${item.id}`)}
    //           key={index}
    //         >
    //           <img
    //             style={{
    //               // width: "100%",
    //               width: "163px",
    //               height: "201px",
    //             }}
    //             src={item.data.image}
    //             alt={item.data.name}
    //           />
    //           <ImageListItemBar
    //             sx={{
    //               marginBottom: "5px",
    //             }}
    //             title={
    //               <span
    //                 style={{
    //                   color: "#2a254b",
    //                   fontFamily: ["Clash Display", "sans-serif"],
    //                   display: "block",
    //                   fontWeight: "400",
    //                   lineHeight: "140%",
    //                   fontSize: "20px",
    //                   marginTop: "5px",
    //                   marginBottom: "5px",
    //                 }}
    //               >
    //                 {item.data.name}
    //               </span>
    //             }
    //             subtitle={
    //               <span
    //                 style={{
    //                   color: "#2a254b",
    //                   fontFamily: ["Clash Display", "sans-serif"],
    //                   fontSize: "18px",
    //                   fontWeight: "400",
    //                   lineHeight: "150%",
    //                 }}
    //               >
    //                 {item.data.price}
    //               </span>
    //             }
    //             position="below"
    //           />
    //         </ImageListItem>
    //       )
    //   )}
    // </ImageList>
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
