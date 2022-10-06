import Feature2 from "../organisms/Features2";
import FeaturesBlock from "../organisms/FeaturesBlock";
import Header from "../organisms/Header";
import HeroBlock from "../organisms/HeroBlock";
import ProductList from "../organisms/ProductList/ProductList";
import Subscibe from "../organisms/Subcribe";

const HomePage = () => {
  return (
    <section className="home-page">
      <Header />
      <HeroBlock />
      <FeaturesBlock />
      <ProductList />
      <Feature2 />
      <Subscibe />
    </section>
  );
};

export default HomePage;
