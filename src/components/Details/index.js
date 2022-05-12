import React from "react";
import Nortec from "../../assets/nortecnoir_logo.png";
import InfoCard from "../InfoCard";
import "./styles.scss";

const Details = (props) => {
  return (
    <div>
      <div className=" flex flex-col items-center  w-full mb-20">
        <div className="w-full float-left  flex -z-[1] flex-col pb-20 justify-center items-center bg-cover">
          <img src={Nortec} alt="Nortec"></img>
        </div>
        <InfoCard
          title="The Problem"
          text="Any business aiming to take part in the fight against global
          warming needs to know how much their company carbon footprint is
          contributing to the problem. The carbon footprint of a company is
          the total amount of greenhouse gases (also reffered as GHG)
          emitted directly or indirectly through its activities."
          position="left"
        />
        <InfoCard
          title="What is the carbon footprint in businesses?"
          text="As every individual has their own carbon footprint created by
          their lifestyle, so do companies that carry out activities which
          create greenhouse gas emissions. These activities include
          manufacturing, transportation and distribution, use of
          electricity, heating, cooling, and lighting. Therefore the carbon
          footprint of a company is a measurement of all the greenhouse
          gases that it emits directly and indirectly through it's
          activities."
          position="right"
        />
        <InfoCard
          title="Greenhouse gas emissions categories"
          text="Greenhouse gas emissions are categorized into three groups that
          are commonly called “scopes”. The first category covers direct
          emissions from your company's owned or controlled sources, such as
          fuel combustion, vehicles, and fugitive emissions. The second
          category consists of purchased electricity, heat and steam used
          for heating and cooling that produce indirect emissions. All the
          other indirect emissions occurring in your company's value chain
          are covered in the third category. Those can be anything from
          business travel to purchased goods and services, waste disposal
          and employee commuting."
          position="left"
        />
        <InfoCard
          title="How does the carbon footprint calculator work?"
          text="The formula to calculate the carbon footprint of a business is
          simple: the result is obtained by multiplying the activity (or
          consumption) data by its corresponding emission factor. Based on
          this formula, there are several methodologies to calculate the
          carbon footprint and we approached the GHG Protocol."
          position="right"
        />
      </div>
    </div>
  );
};

export default Details;
