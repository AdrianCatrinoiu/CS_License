import React from "react";
import { Chart } from "react-google-charts";
const Ranking = ({ place, companyName, year, emissions }) => {
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
    <div className="flex flex-row items-center">
      <p className="mr-8">{place}</p>
      <div className="w-full rounded-3xl bg-[#7bee64] shadow-2xl p-4 flex flex-row items-center justify-between">
        <div className="flex flex-col items-center text-center justify-between my-8  w-[10%] min-w-[70px] ">
          <p>{year}</p>
          <p>{companyName}</p>
        </div>
        <div className="w-[50%] ml-8 h-full bg-[#dddddd] rounded-2xl shadow-2xl animate-fadeIn">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="100%"
            data={CO2data}
            options={optionsAnimateOnStart}
          />
        </div>
        <div>Emission Badge</div>
        <div>Admin badge</div>
      </div>{" "}
    </div>
  );
};

export default Ranking;
