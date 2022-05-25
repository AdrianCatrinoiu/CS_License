import React from "react";
import Navbar from "../../components/Navbar/index.js";

const MainLayout = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <div className="h-full">{props.children}</div>
    </div>
  );
};

export default MainLayout;
