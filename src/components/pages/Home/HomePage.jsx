/**
 * Landing / Home Page
 * file: HomePage.jsx
 */

import { useMediaQuery } from "@mui/material";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebase/firebase-config";
import { addProducts } from "../../../store/reducers/productsSlice.js";
import { useAuth } from "../../../contexts/auth-context";
import Footer from "../../molecules/Footer/Footer";
import Feature2 from "../../organisms/Features2";
import FeaturesBlock from "../../organisms/FeaturesBlock";
import HeroBlock from "../../organisms/HeroBlock";
import ProductList from "../../organisms/ProductList/ProductList";
import Subscribe from "../../organisms/Subcribe";

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

  return (
    <>
      {!loading ? (
        <section className="home-page">
          <HeroBlock />
          <div
            style={
              smMatches
                ? { padding: "28px 80px", width: "100%" }
                : { padding: "28px 24px", width: "100%" }
            }
          >
            <ProductList />
          </div>
          <FeaturesBlock />
          <Feature2 />
          <Subscribe />
        </section>
      ) : (
        <section className="home-page">
          <HeroBlock />
          <div
            style={
              smMatches
                ? { padding: "28px 80px", width: "100%" }
                : { padding: "28px 24px", width: "100%" }
            }
          >
            <ProductList />
          </div>
          <FeaturesBlock />

          <Subscribe />
        </section>
      )}
    </>
  );
};

export default HomePage;
