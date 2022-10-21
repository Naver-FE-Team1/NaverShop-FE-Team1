import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import Footer from "../molecules/Footer/Footer";
import Feature2 from "../organisms/Features2";
import FeaturesBlock from "../organisms/FeaturesBlock";
import Header from "../organisms/Header";
import HeroBlock from "../organisms/HeroBlock";
import ProductList from "../organisms/ProductList/ProductList";
import Subscibe from "../organisms/Subcribe";

const HomePage = () => {
  const { userInfo, loading } = useAuth();
  return (
    <>
      {!loading ? (
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
      ) : (
        <section className="home-page">
          <Header />
          <HeroBlock />
          <FeaturesBlock />

          <Subscibe />
          <Footer />
        </section>
      )}
    </>
  );
};

export default HomePage;
