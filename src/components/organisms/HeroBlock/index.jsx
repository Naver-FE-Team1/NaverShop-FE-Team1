import "./heroblock.scss";
import Button from "../../atoms/Button";
import img from "../../../assets/HeroBlockImage.png";

const HeroBlock = () => {
  return (
    <section className="hero-block d-flex flex-column align-items-center">
      <main className="inner-block">
        <p>Luxury homeware for people who love timeless design quality</p>
        <p>
          With our new collection, view over 400 bespoke pieces from homeware
          through to furniture today
        </p>
        <div className="button-section">
          <Button
            width="100%"
            padding="16px 0"
            txtColor="#2A254B"
            bgColor="#F9F9F9"
          >
            View collection
          </Button>
        </div>
      </main>
      <img src={img} alt="" />
    </section>
  );
};

export default HeroBlock;
