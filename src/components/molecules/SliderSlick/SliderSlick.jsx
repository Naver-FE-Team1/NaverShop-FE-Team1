import React from "react";
import PrevArrowSlider from "../../atoms/PrevArrowSlider/PrevArrowSlider";
import NextArrowSlider from "../../atoms/NextArrowSlider/NextArrowSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderSlick = ({ children }) => {
  //Slider setting
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrowSlider />,
    prevArrow: <PrevArrowSlider />,
  };
  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  );
};

export default SliderSlick;
