import React from "react";
import PrevArrowSlider from "../../atoms/PrevArrowSlider/PrevArrowSlider";
import NextArrowSlider from "../../atoms/NextArrowSlider/NextArrowSlider";
import "./SliderSlick.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderSlick = ({
  children,
  showItem,
  fade = false,
  autoplay = false,
}) => {
  //Slider setting
  console.log(autoplay);
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    slidesToShow: showItem,
    slidesToScroll: 1,
    nextArrow: <NextArrowSlider autoplay={autoplay} />,
    prevArrow: <PrevArrowSlider autoplay={autoplay} />,
  };
  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  );
};

export default SliderSlick;
