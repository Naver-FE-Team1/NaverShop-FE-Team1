import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { nanoid } from "@reduxjs/toolkit";
import { addBasket } from "../../../store/reducers/basketSlice";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import React from "react";
import "../../../scss/ProductDetail/ProductDetailContent.scss";
import Button from "../../atoms/Button/Button";
import Quantity from "../../molecules/Quantity/Quantity";
import Size from "../../atoms/Size/Size";
import SubImage from "../../atoms/SubImage/SubImage";
import SliderSlick from "../../molecules/SliderSlick/SliderSlick";
import { useNavigate, useParams } from "react-router-dom";
const ProductDetailContent = ({ data }) => {
  //state này để lưu size S,M,L,...
  //ban đầu ấn add to basket sẽ lưu vô local
  const [sizePicker, setSizePicker] = useState(data.sizes[0].size);
  const [quant, setQuant] = useState(data.quantity);
  const { id } = useParams(); // id được khai báo ở trang App.jsx
  //Lấy ra ở đây để dùng trong các trường hợp query 1 sản phẩm theo id

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
    toast.success(`Successfully added to cart`);
  };
  //Number
  var price = 25000000;
  //subImages
  const subImages = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <div className="container">
      <Container style={{ padding: 0 }}>
        <Grid className="grid" container>
          <Grid item xs={12} lg={6}>
            <Grid>
              <img
                src={data.srcImg[0].src}
                className="productDetail-img"
                alt={data.srcImg[0].alt}
              />
            </Grid>
            <Grid item>
              <SliderSlick showItem={3}>
                {data.srcImg.map((item) => (
                  <SubImage key={item.id} data={item} />
                ))}
              </SliderSlick>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Container maxWidth="sm" style={{ padding: "28px" }}>
              <div className="productDetail__topContent">
                <h3 className="productDetail__topContent-name">{data.title}</h3>
                <p className="productDetail__topContent-price">
                  {data.price.toLocaleString("vi-VN", {
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
                  {data.desc}
                </p>
                <ul className="productDetail__description-fabric">
                  <li>Product description</li>
                  <li>Product description</li>
                  <li>Product description</li>
                </ul>
              </div>
              <div className="productDetail__dimension">
                <h5 className="productDetail__dimension-title">Dimensions</h5>
                <Grid
                  container
                  spacing={1}
                  sx={{ justifyContent: "space-between" }}
                >
                  {data.sizes.map((item) => (
                    <Grid item key={item.id}>
                      <Size
                        picked={sizePicker === item.size}
                        onClick={() => setSizePicker(item.size)}
                        size={item.size}
                      />
                    </Grid>
                  ))}
                </Grid>
                <div className="productDetail__dimension-colors"></div>
              </div>
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
