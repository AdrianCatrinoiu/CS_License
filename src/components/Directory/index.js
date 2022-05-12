import React from "react";
import About from "../../assets/about.jpg";
import Nortec from "../../assets/nortecnoir_logo.png";
import { Link } from "react-router-dom";
import "./styles.scss";
const Directory = (props) => {
  return (
    <div className="h-full">
      <div className=" inline-block h-full w-full">
        <div className="w-full float-left h-full flex -z-[1] flex-col pb-20 justify-center items-center bg-cover">
          <img src={Nortec} alt="Nortec"></img>
        </div>
        <div
          className="w-1/2 float-left h-full flex flex-col bg-center bg-no-repeat bg-cover justify-center items-center"
          style={{ backgroundImage: `url(${About})` }}
        >
          <div className="w-48 h-16 shadow-2xl text-center justify-center rounded-md transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-800  duration-300 ">
            <Link to="/about">
              <p className="w-full h-full text-center py-2 justify-center">
                About
              </p>
            </Link>
          </div>
        </div>
        <div
          className="w-1/2 float-left h-full flex flex-col bg-center bg-no-repeat bg-cover justify-center items-center"
          style={{ backgroundImage: `url(${About})` }}
        >
          <div className="w-48 h-16 shadow-lg rounded-md transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-800  duration-300 ">
            <Link to="/form">
              <p className="w-full h-full text-center py-2 center">Calculate</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
