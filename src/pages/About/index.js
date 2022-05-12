import React from "react";
import Details from "../../components/Details";
import HomePageLayout from "../../layouts/HomePageLayout";
import "./styles.scss";

const About = () => {
  return (
    <HomePageLayout>
      <section className="about">
        <Details />
      </section>
    </HomePageLayout>
  );
};

export default About;
