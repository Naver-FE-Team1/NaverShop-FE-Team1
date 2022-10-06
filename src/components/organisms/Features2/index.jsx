import Feature2TextBlock from "../../molecules/Feature2TextBlock";
import img from "../../../assets/Image Block.png";
import "./feature2.scss";

const Feature2 = () => {
  return (
    <section className="feature-2" style={{ padding: "32px 24px" }}>
      <Feature2TextBlock />
      <img src={img} alt="" />
    </section>
  );
};

export default Feature2;
