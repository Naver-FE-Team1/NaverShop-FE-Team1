import React from "react";
import PageHeader from "../molecules/PageHeader/PageHeader";
import Feature from "../molecules/Feature/Feature";
import Footer from "../molecules/Footer/Footer";
import AssignFooter from "../molecules/AssignFooter/AssignFooter";
import MoreInfo from "../molecules/MoreInfo/MoreInfo";
import Header from "../organisms/Header";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <PageHeader></PageHeader>
      <Feature></Feature>
      <MoreInfo></MoreInfo>
      <AssignFooter></AssignFooter>
      <Footer></Footer>
    </div>
  );
};

export default AboutPage;
