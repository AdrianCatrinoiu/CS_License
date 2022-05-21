import React from "react";
import Details from "../../components/Details";
import MainLayout from "../../layouts/MainLayout";
import "./styles.scss";

const About = () => {
  return (
    <MainLayout>
      <section className="about">
        <Details />
      </section>
    </MainLayout>
  );
};

export default About;
