import React from "react";
import SignUp from "../../components/SignUp";
import HomePageLayout from "../../layouts/HomePageLayout";
import "./styles.scss";

const Register = (props) => {
  return (
    <HomePageLayout>
      <SignUp />
    </HomePageLayout>
  );
};

export default Register;
