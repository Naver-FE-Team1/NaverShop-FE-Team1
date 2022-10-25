import { useMediaQuery } from "@mui/material";
import React from "react";
import TitleBanner from "../../atoms/TitleBanner";

const Banner = ({ children, style, bgImg }) => {
  const lgMatches = useMediaQuery("(min-width:1200px)");

  return (
    <div id="banner" style={{ paddingTop: lgMatches ? "130px" : "90px" }}>
      <div
        style={{
          padding: "60px 0",
          backgroundImage: `url(${bgImg})`,
          ...style,
        }}
      >
        <TitleBanner
          style={{
            margin: 0,
            fontFamily: ["Clash Display", "sans-serif"],
            fontWeight: "400",
            color: "#fff",
            fontSize: "28px",
            textAlign: "center",
          }}
        >
          {children}
        </TitleBanner>
      </div>
    </div>
  );
};

export default Banner;
