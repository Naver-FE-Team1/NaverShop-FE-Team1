import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";

const Feature2TextBlock = () => {
  const navigate = useNavigate();
  return (
    <article className="feature-text-block">
      <div className="inner-feature">
        <p>It started with a small idea</p>
        <p>
          A global brand with local beginnings, our story begain in a small
          studio in South London in early 2014
        </p>
      </div>
      <Button
        width="100%"
        padding="16px 0"
        txtColor="#fff"
        bgColor="rgba(249, 249, 249, 0.15)"
        onClick={() => navigate("/products")}
        type="button"
      >
        View collection
      </Button>
    </article>
  );
};

export default Feature2TextBlock;
