import FeatureList from "../../molecules/FeatureList";
import "./featuresblock.scss";

const FeaturesBlock = () => {
  return (
    <section className="features-block">
      <p className="first-level-title">What makes our brand different</p>
      <FeatureList />
    </section>
  );
};

export default FeaturesBlock;
