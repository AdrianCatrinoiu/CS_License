import React from "react";
import { Chart } from "react-google-charts";

const SharedForm = ({ year, emissions, emissionBadge, companyName }) => {
  const CO2data = [
    ["Element", "kg of CO2", { role: "style" }],
    ["Electricity", emissions.electricity.CO2, "green"],
    ["Heating", emissions.heating.CO2, "red"],
    ["Waste", emissions.waste.CO2, "orange"],
    ["Refrigerants", emissions.refrigerants.CO2, "blue"],
    ["Transportation", emissions.transportation.CO2, "brown"],
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
    <div className="w-full rounded-3xl bg-green-200 shadow-2xl p-4 flex flex-col items-center justify-between">
      <div className=" w-full flex flex-row items-center justify-center">
        <div className="w-full mx-8 mt-8 h-full bg-[#dddddd] rounded-2xl shadow-2xl animate-fadeIn">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="100%"
            data={CO2data}
            options={optionsAnimateOnStart}
          />
        </div>
      </div>
      <div className="w-full flex flex-row">
        <div className="flex flex-col items-center justify-center my-8  w-1/2 min-w-[70px] ">
          <p>{year}</p>
          <p>{companyName}</p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          Emission Badge
        </div>
      </div>
    </div>
  );
};

export default SharedForm;
