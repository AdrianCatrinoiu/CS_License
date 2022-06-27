import React from "react";
import { Chart } from "react-google-charts";
import EmissionBadge from "../EmissionBadge";

const SharedForm = ({ year, emissions, emissionBadge, companyName }) => {
  console.log("a intrat in sharedform");
  const CO2data = [
    ["Element", "kg of CO2", { role: "style" }],
    ["Electricity", emissions?.electricity.CO2, "green"],
    ["Burning", emissions?.heating.CO2, "red"],
    ["Waste", emissions?.waste.CO2, "orange"],
    ["Refrigerants", emissions?.refrigerants.CO2, "blue"],
    ["Transportation", emissions?.transportation.CO2, "brown"],
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
    <div className="w-full rounded-3xl bg-green-200 shadow-2xl p-4 flex flex-row items-center justify-between">
      <div className="flex flex-col items-center text-center justify-between my-8  w-[10%] min-w-[70px] ">
        <p>{year}</p>
        <p>{companyName}</p>
      </div>
      <div className="w-1/2 ml-8 flex self-stretch min-h-[450px] flex-col bg-white rounded-2xl shadow-2xl animate-fadeIn">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="100%"
          data={CO2data}
          options={optionsAnimateOnStart}
        />
      </div>
      <div className="flex flex-col items-center w-1/4">
        <p className="text-center">Emissions badge:</p>
        <EmissionBadge emissionBadge={emissionBadge} />
      </div>
    </div>
  );
};

export default SharedForm;
