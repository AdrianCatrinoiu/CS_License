import React from "react";

import Navbar from "../../components/Navbar";
import VerticalNav from "../../components/VerticalNav";
import Footer from "../../components/Footer";

const AdminLayout = (props) => {
  return (
    <div className="adminLayout">
      <Navbar {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav></VerticalNav>
        </div>
        <div className="content">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
