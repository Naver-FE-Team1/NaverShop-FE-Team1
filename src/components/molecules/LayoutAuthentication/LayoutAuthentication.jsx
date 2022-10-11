import React from "react";
import PropTypes from "prop-types";
import ButtonGoogle from "../../atoms/Button/ButtonGoogle";
const LayoutAuthentication = (props) => {
  const { children, title, text, access } = props;
  return (
    <>
      <div className="layout">
        <div className="layout__container">
          <div className="layout__content">
            <h1 className="layout__title">{title}</h1>
            <a href="/" className="layout__text">
              {text}
              <span className="layout__access">{access}</span>
            </a>
          </div>
          <ButtonGoogle></ButtonGoogle>
        </div>
      </div>
    </>
  );
};

LayoutAuthentication.propTypes = {};

export default LayoutAuthentication;
