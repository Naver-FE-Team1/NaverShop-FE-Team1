import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const LayoutAuthentication = (props) => {
  const { children, title, text, access, forget, navigate } = props;
  return (
    <>
      <div className="layout">
        <div className="layout__container">
          <div className="layout__content">
            <h1 className="layout__title">{title}</h1>
            <span>{text}</span>
            <NavLink to={navigate} className="layout__text">
              <span className="layout__access">{access}</span>
            </NavLink>
          </div>

          {children}
          <NavLink
            to="/recover-password"
            className="layout__forget"
            style={{
              textAlign: "left",
              display: "block",
              marginTop: "7px",
              color: "#2a254b",
            }}
          >
            <span className="layout__forget">{forget}</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

LayoutAuthentication.propTypes = {};

export default LayoutAuthentication;
