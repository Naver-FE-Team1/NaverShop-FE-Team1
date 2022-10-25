import FeatureList from "../../molecules/FeatureList";
import "./featuresblock.scss";

const FeaturesBlock = () => {
  return (
    <section
      className="features-block"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <p className="first-level-title">What makes our brand different</p>
      <FeatureList />
    </section>
  );
};

export default FeaturesBlock;
