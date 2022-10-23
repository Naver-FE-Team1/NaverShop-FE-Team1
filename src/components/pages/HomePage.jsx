import { db } from "../../firebase/firebase-config";
import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import Footer from "../molecules/Footer/Footer";
import Feature2 from "../organisms/Features2";
import FeaturesBlock from "../organisms/FeaturesBlock";
import Header from "../organisms/Header";
import HeroBlock from "../organisms/HeroBlock";
import ProductList from "../organisms/ProductList/ProductList";
import Subscibe from "../organisms/Subcribe";
import { useMediaQuery } from "@mui/material";
import { addProducts } from "../../store/reducers/productsSlice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, query, getDocs } from "firebase/firestore";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const smMatches = useMediaQuery("(min-width:600px)");
  const { userInfo, loading } = useAuth();

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      let res = [];
      querySnapshot.forEach((doc) => {
        res.push({ data: doc.data(), id: doc.id });
      });
      dispatch(addProducts(res));
    })();
  }, []);

  // return (
  //   <section className="home-page">
  //     <Header />
  //     <HeroBlock />
  //     <FeaturesBlock />
  //     <div
  //       style={
  //         smMatches
  //           ? { padding: "28px 80px", width: "100%" }
  //           : { padding: "28px 24px", width: "100%" }
  //       }
  //     >
  //       <ProductList />
  //     </div>
  //     <Feature2 />
  //     <Subscibe />
  //     <Footer />
  //   </section>
  return (
    <>
<<<<<<< HEAD
      {!loading ? (
        <section className="home-page">
          <Header />
          <HeroBlock />
          <FeaturesBlock />
          <div
            style={
              smMatches
                ? { padding: "28px 80px", width: "100%" }
                : { padding: "28px 24px", width: "100%" }
            }
          >
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
=======
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
>>>>>>> 827b3f4 (completed checked passive function)
    </>
  );
};
export default HomePage;
