import Button from "../../atoms/Button";
import img from "../../../assets/HeroBlockImage.png";
import SliderSlick from "../../molecules/SliderSlick/SliderSlick";

const HeroBlock = () => {
  return (
    <section
      className="hero-block d-flex flex-column align-items-center"
      data-aos="zoom-in"
    >
      <SliderSlick showItem={1} autoplay="true" fade="true">
        <img
          src="https://cmsv2.yame.vn/uploads/9d3a5313-5569-40d6-ba94-e025ca6b26c6/Banner_sale_HLW.jpg?quality=80&w=0&h=0"
          alt=""
        />
        <img
          src="https://cmsv2.yame.vn/uploads/c8565764-d8f2-4c79-aad3-61d7ae97b0bb/BANNERWEBsomi-2.jpg?quality=80&w=0&h=0"
          alt=""
        />
        <img
          src="https://cdn2.yame.vn/cimg/images/71ff6971-6cb2-0100-4dc0-00199367751a.jpg"
          alt=""
        />
      </SliderSlick>
    </section>
  );
};

export default HeroBlock;
