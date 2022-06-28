import React from "react";
import { Chart } from "react-google-charts";
import EmissionBadge from "../EmissionBadge";
const Ranking = ({
  place,
  companyName,
  year,
  emissions,
  adminBadge,
  emissionBadge,
}) => {
  const CO2data = [
    ["Element", "kg of CO2", { role: "style" }],
    ["Electricity", emissions.electricity.CO2, "green"],
    ["Burning", emissions.heating.CO2, "red"],
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
    <div className="flex sm:flex-row flex-col items-center">
      <p className="mr-8">{place}.</p>
      <div className="w-full rounded-3xl bg-green-200 shadow-2xl p-4 flex sm:flex-row flex-col items-center justify-between">
        <div className="flex flex-col items-center text-center justify-between my-8  sm:w-[10%] w-full min-w-[70px] ">
          <p>{year}</p>
          <p>{companyName}</p>
        </div>
        <div className="sm:w-[50%] w-[95%] sm:ml-8 h-full bg-white rounded-2xl shadow-2xl animate-fadeIn">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="100%"
            data={CO2data}
            options={optionsAnimateOnStart}
          />
        </div>
        <div className="flex flex-col items-center sm:w-1/5 w-[95%] sm:mr-8 sm:mb-0 mt-8">
          <p className="text-center">Emissions badge:</p>
          <EmissionBadge emissionBadge={emissionBadge} />
        </div>
      </div>
    </div>
  );
};

export default Ranking;
