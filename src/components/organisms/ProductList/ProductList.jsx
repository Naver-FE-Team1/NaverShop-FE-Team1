import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from "@mui/material";
import Button from "../../atoms/Button";
import "./productlist.scss";

const ProductList = ({ title }) => {
  const mdMatches = useMediaQuery("(min-width:600px)");
  const lgMatches = useMediaQuery("(min-width:1200px)");

  //TODO: NEED TO WORK ON CASE WHERE TITLES CAN BE TOO LONG
  //EDIT1: adding button add the bottom of the list
  //EDIT2: adding padding to the list at line 18
  //EDIT3: adding props (title) to this component in case anyone need a header

  return (
    <section style={{ padding: "24px 24px 28px 24px" }} id="product-list">
      <p
        style={{
          margin: "0",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "25px",
          color: "#2A254B",
        }}
      >
        {title}
      </p>
      <ImageList
        cols={mdMatches ? 3 : 2}
        sx={{
          width: "100%",
          //   paddingLeft: "10px",
          //   paddingRight: "10px",
        }}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              style={{
                height: lgMatches ? "420px" : "220px",
              }}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                marginLeft: "2px",
                marginBottom: "5px",
              }}
              title={
                <span
                  style={{
                    color: "#2a254b",
                    fontFamily: ["Clash Display", "sans-serif"],
                    display: "block",
                    fontSize: "18px",
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                >
                  {item.title}
                </span>
              }
              subtitle={
                <span
                  style={{
                    color: "#2a254b",
                    fontFamily: ["Clash Display", "sans-serif"],
                    fontSize: "14px",
                  }}
                >
                  by: {item.author}
                </span>
              }
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div className="product-list-btn">
        <Button
          width="100%"
          padding="16px 0"
          txtColor="#2A254B"
          bgColor="#F9F9F9"
        >
          View collection
        </Button>
      </div>
    </section>
  );
};

export default ProductList;

//THIS DATA IS FOR TESTING!!!!
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
