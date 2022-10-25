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
  const lgMatches = useMediaQuery("(min-width:1200px)");
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
      <section className="home-page">
        <HeroBlock />
        <h3
          style={{
            padding: "5px 10px",
            fontSize: "20px",
            fontWeight: "600",
            borderBottom: "1px solid #ccc",
            borderRadius: "10px",
            color: "#363636",
            marginLeft: "10px",
            marginRight: "10px",
            backgroundColor: "#f8f9fa",
            marginTop: "10px",
            textAlign: "center",
            boxShadow: "0 10px 10px rgba(0,0,0,0.1)",
          }}
          data-aos={`${lgMatches ? "fade-right" : ""}`}
        >
          Tất cả sản phẩm
        </h3>
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
    </>
  );
};

export default HomePage;
