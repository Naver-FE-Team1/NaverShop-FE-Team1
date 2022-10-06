import Footer from "../molecules/Footer/Footer";
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
      <div style={{ padding: "28px 80px", width: "100%" }}>
        <ProductList />
      </div>
      <Feature2 />
      <Subscibe />
      <Footer />
    </section>
  );
};

export default HomePage;
