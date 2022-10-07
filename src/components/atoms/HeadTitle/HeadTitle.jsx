/*
 * Header title for shopping basket
 * file: HeadTitle.jsx
 */
import React from "react";
import PropTypes from "prop-types";

const HeadTitle = ({ content }) => {
  return <h1 className="head-title">{content}</h1>;
};
HeadTitle.propTypes = {
  content: PropTypes.string,
};
HeadTitle.defaultProps = {
  content: "",
};
export default HeadTitle;
