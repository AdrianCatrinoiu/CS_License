import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const VerifyLayout = (props) => {
  return (
    <div className="adminLayout">
      <Navbar {...props} />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
};

export default VerifyLayout;
