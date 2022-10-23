import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";
import Header from "../../organisms/Header";
import Footer from "../Footer/Footer";
const LayoutAuthentication = (props) => {
  const {
    children,
    title,
    text,
    access,
    forget,
    navigate,
    forgetContent = "",
  } = props;

  return (
    <>
      <div className="layout">
        <div
          className="layout__container"
          style={{
            padding: forgetContent === "" ? "" : "30px 0 0 0",
          }}
        >
          <div
            className="layout__content"
            style={{
              margin: forgetContent === "" ? "" : "0",
            }}
          >
            <h1
              className="layout__title"
              style={{
                borderBottom: forgetContent === "" ? "" : "1px solid #ccc",
                padding: forgetContent === "" ? "" : "0 15px 20px",
                textAlign: forgetContent === "" ? "" : "left",
              }}
            >
              {title}
            </h1>
            <span>{text}</span>
            <span
              className="layout__forget-content"
              style={{
                padding: forgetContent === "" ? "" : "10px 15px 5px ",
              }}
            >
              {forgetContent}
            </span>
            <NavLink
              to={navigate}
              className="layout__text"
              style={{
                display: forgetContent === "" ? "" : "none ",
              }}
            >
              <span className="layout__access">{access}</span>
            </NavLink>
          </div>

          {children}
          <NavLink
            to="/recover-password"
            className="layout__forget"
            style={{
              textAlign: "left",
              marginTop: "7px",
              color: "#2a254b",
              display: forgetContent === "" ? "block" : "none ",
            }}
          >
            <span className="">{forget}</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

LayoutAuthentication.propTypes = {};

export default LayoutAuthentication;
