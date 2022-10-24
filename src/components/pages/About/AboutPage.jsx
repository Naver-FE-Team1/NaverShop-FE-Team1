/**
 * About Us Page
 * file: AboutPage.jsx
 */

import React from "react";
import PageHeader from "../../molecules/PageHeader/PageHeader";
import Feature from "../../molecules/Feature/Feature";
import AssignFooter from "../../molecules/AssignFooter/AssignFooter";
import MoreInfo from "../../molecules/MoreInfo/MoreInfo";

const AboutPage = () => {
  
  return (
    <div>
      <PageHeader></PageHeader>
      <Feature></Feature>
      <MoreInfo></MoreInfo>
      <AssignFooter></AssignFooter>
    </div>
  );
};

export default AboutPage;
