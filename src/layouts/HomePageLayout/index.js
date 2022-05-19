import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const HomePageLayout = (props) => {
  return <div className="layoutHeight">{props.children}</div>;
};

export default HomePageLayout;
