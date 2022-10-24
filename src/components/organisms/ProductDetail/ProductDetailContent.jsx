import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { nanoid } from "@reduxjs/toolkit";
import { addBasket } from "../../../store/reducers/basketSlice";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import React from "react";
import "../../../scss/ProductDetail/ProductDetailContent.scss";
import Button from "../../atoms/Button/Button";
import Quantity from "../../molecules/Quantity/Quantity";
import Size from "../../atoms/Size/Size";
import SubImage from "../../atoms/SubImage/SubImage";
import SliderSlick from "../../molecules/SliderSlick/SliderSlick";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";

const ProductDetailContent = ({
  data,
  sizePicker,
  setSizePicker,
  setQuant,
  quant,
  listImages,
  setColorPicker,
  colorPicker,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mdMatches = useMediaQuery("(min-width:600px)");
  const lgMatches = useMediaQuery("(min-width:1200px)");

  const handleAddtoCart = () => {
    const productStringify = {
      id: nanoid(),
      title: data.title,
      price: data.price,
      desc: data.desc,
      quantity: quant,
      sizes: sizePicker,
      srcImg: data.srcImg[0].src,
      totalPrice: data.price * quant,
      productId: data.id,
    };
    dispatch(addBasket(productStringify));

    toast.success(`Thêm thành công sản phẩm ${data.title} vào giỏ hàng`);
  };
  const [defaultImage, setDefaultImage] = useState(data.image);
  const handleChangeDefaultImage = (src) => {
    setDefaultImage(src);
  };
  const handleSetColor = (color) => {
    setColorPicker(color);
  };
  return (
    <div className="container">
      <Container style={{ padding: 0 }}>
        <Grid className="grid" container>
          <Grid item xs={12} lg={6}>
            <Grid>
              <img
                src={defaultImage ? defaultImage : data.image}
                className="productDetail-img"
                alt={defaultImage ? defaultImage : data.image}
              />
            </Grid>
            <Grid item>
              <SliderSlick
                showItem={listImages?.length < 3 ? listImages?.length : 3}
              >
                {listImages?.map((item, idx) => (
                  <SubImage
                    key={idx}
                    data={item}
                    onClick={() => {
                      handleChangeDefaultImage(item);
                    }}
                  />
                ))}
              </SliderSlick>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Container maxWidth="sm" style={{ padding: "28px" }}>
              <div className="productDetail__topContent">
                <h3 className="productDetail__topContent-name">{data.name}</h3>
                <p className="productDetail__topContent-price">
                  {data?.price?.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>
              <div className="productDetail__description">
                <h5 className="productDetail__description-title">
                  Product description
                </h5>
                <p className="productDetail__description-content">
                  {parse(data.description || "")}
                </p>
              </div>
              <div className="productDetail__dimension">
                <h5 className="productDetail__dimension-title">Dimensions</h5>
                <Grid
                  container
                  spacing={1}
                  sx={{ justifyContent: "space-between" }}
                >
                  {data?.sizes?.map((item, idx) => (
                    <Grid item key={idx}>
                      <Size
                        picked={sizePicker === item}
                        onClick={() => setSizePicker(item)}
                        size={item}
                      />
                    </Grid>
                  ))}
                </Grid>
                <div className="productDetail__dimension-colors"></div>
              </div>
              <ul className="productDetail__description-colors">
                {data.color?.map((item, idx) => (
                  <li
                    className="productDetail__description-color"
                    style={{
                      backgroundColor: item,
                      border:
                        colorPicker === item
                          ? `3px solid ${item}`
                          : ` 3px #fff solid`,
                    }}
                    onClick={() => {
                      handleSetColor(item);
                    }}
                  ></li>
                ))}
              </ul>
              <div className="productDetail__quantity">
                <h5 className="productDetail__quantity-title">Quantity</h5>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Quantity setQuant={setQuant} quant={quant} />
                  </Grid>
                </Grid>
              </div>
              <div className="productDetail__action">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Button
                      backgroundColor="#2A254B"
                      color="#fff"
                      content="Add to cart"
                      handleClick={handleAddtoCart}
                    ></Button>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Button
                      color="#000"
                      bgColor="#fff"
                      content="Buy now"
                      handleClick={() => navigate("/checkout")}
                    ></Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetailContent;
