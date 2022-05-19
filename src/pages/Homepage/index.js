import React from "react";
import Directory from "../../components/Directory";
import HomePageLayout from "../../layouts/HomePageLayout";
import "./styles.scss";

const Homepage = () => {
  return (
    <HomePageLayout>
      <section className="h-full bg-white">
        <Directory />
      </section>
    </HomePageLayout>
  );
};

export default Homepage;
