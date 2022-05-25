import React from "react";
import { Chart } from "react-google-charts";

const SummaryStatistics = ({
  year,
  emissions,
  totalCO2,
  totalCH4,
  totalN2O,
}) => {
  const CO2data = [
    ["Element", "kg of CO2", { role: "style" }],
    ["Electricity", emissions.electricity.CO2, "green"],
    ["Heating", emissions.heating.CO2, "red"],
    ["Waste", emissions.waste.CO2, "orange"],
    ["Refrigerants", emissions.refrigerants.CO2, "blue"],
    ["Transportation", emissions.transportation.CO2, "brown"],
  ];

  const CH4data = [
    ["Element", "g of CH4", { role: "style" }],
    ["Heating", emissions.heating.CH4, "red"],
    ["Transportation", emissions.transportation.CH4, "brown"],
  ];

  const N2Odata = [
    ["Element", "g of N2O", { role: "style" }],
    ["Heating", emissions.heating.N2O, "red"],
    ["Transportation", emissions.transportation.N2O, "brown"],
  ];

  const optionsAnimateOnStart = {
    backgroundColor: "transparent",
    animation: {
      startup: true,
      easing: "linear",
      duration: 1000,
    },
  };
  return (
    <div className="flex flex-col w-[80%] items-center">
      <p className="mb-24 text-[24px]">Your emissions in {year}:</p>
      <div className="flex md:flex-row flex-col justify-between w-full md:max-h-[600px] mb-24">
        <div className="flex flex-col px-32 py-12 justify-center items-center rounded-3xl bg-[#7bee64] shadow-2xl animate-fadeIn md:mr-[80px] md:mb-0 mb-8 ">
          <div className="flex flex-col items-center justify-center my-8">
            <p className="font-MontserratBold text-[32px] text-blue-400">
              {totalCO2.toFixed(2)}
            </p>
            <p className="text-[24px] text-center">kg equivalent of CO2</p>
          </div>
          <div className="flex flex-col items-center justify-center my-8">
            <p className="font-MontserratBold text-[32px] text-blue-400">
              {totalCH4.toFixed(2)}
            </p>
            <p className="text-[24px] text-center">g equivalent of CH4</p>
          </div>
          <div className="flex flex-col items-center justify-center my-8">
            <p className="font-MontserratBold text-[32px] text-blue-400">
              {totalN2O.toFixed(2)}
            </p>
            <p className="text-[24px] text-center">g equivalent of N2O</p>
          </div>
        </div>
        <div className="w-full h-full  bg-[#dddddd] rounded-2xl shadow-2xl animate-fadeIn">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="100%"
            data={CO2data}
            options={optionsAnimateOnStart}
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between w-full md:max-h-[500px] mb-24">
        <div className="w-full h-full  bg-[#dddddd] rounded-2xl shadow-2xl animate-fadeIn mr-[80px] md:mb-0 mb-8">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={CH4data}
            options={optionsAnimateOnStart}
          />
        </div>
        <div className="w-full h-full  bg-[#dddddd] rounded-2xl shadow-2xl animate-fadeIn">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={N2Odata}
            options={optionsAnimateOnStart}
          />
        </div>
      </div>
    </div>
  );
};

export default SummaryStatistics;
