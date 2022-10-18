import React from "react";
import PropType from "prop-types";

const FeatureCard = ({ iconSrc, titleText, detailText, width, height }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
      }}
      className="FeatureCard"
    >
      <img alt="Icon Card" src={iconSrc} className="iconCard"></img>
      <h4>{titleText}</h4>
      <p>{detailText}</p>
    </div>
  );
};
FeatureCard.propTypes = {
  iconSrc: PropType.string,
  titleText: PropType.string,
  detailText: PropType.string,
  width: PropType.number,
  height: PropType.number,
};
FeatureCard.defaultProps = {
  iconSrc: "",
  titleText: "",
  detailText: "",
  width: null,
  height: null,
};

export default FeatureCard;
