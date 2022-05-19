import React from "react";
import Logo from "../../assets/logo.svg";
import SignIn from "../SignIn";

import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="h-full w-full bg-[url('./assets/background.svg')]  sm:bg-[length:1500px] md:bg-[length:1800px] lg:bg-[length:2000px] xl:bg-[length:2300px] 2xl:bg-[length:2500px] bg-[length:800px] bg-no-repeat bg-bottom">
      <div className="flex flex-col items-center h-full pt-[10%]">
        <div className="transition ease-in duration-500 w-[80%] max-w-[1000px] h-[40%] p-6 my-16  sm:divide-x-2 rounded-xl flex sm:flex-row flex-col items-center ">
          <div className="p-6 sm:w-1/2 flex flex-col ">
            <div className="flex flex-row items-center mb-10">
              <img
                className="w-32 h-32 mr-4"
                src={Logo}
                alt="Nortec Noir Logo"
              />
              <p className=" xl:text-[26px] 2xl:text-[32px] 3xl:text-[36px] font-MontserratBold">
                Nortec noir
              </p>
            </div>
            <p className=" xl:text-[18px] 2xl:text-[32px] text-gray-500 font-MontserratBold leading-tight">
              Carbon footprint assessment for companies using GHG standards for
              measurement
            </p>
          </div>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Directory;
