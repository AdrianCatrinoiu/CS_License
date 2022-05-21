import React from "react";

import { Chart } from "react-google-charts";

const PollutantPieChart = ({ emission, title, emissions }) => {
  const totalCO2 =
    emissions.electricity.CO2 +
    emissions.heating.CO2 +
    emissions.waste.CO2 +
    emissions.refrigerants.CO2 +
    emissions.transportation.CO2;

  let emissionTotal = 0;
  let emissionArrayPieData = [["Task", "Hours per Day"]];
  if (title === "Electricity") {
    emissionTotal = parseFloat(emission.emissionsAmountCO2);

    emissionArrayPieData = [
      ["Emission", "Kg of CO2"],
      ["Renewable", (emission.renewableAmount / emissionTotal) * 100],
      ["Nonrenewable", (emission.nonRenewableAmount / emissionTotal) * 100],
    ];
  }
  if (title === "Heating") {
    emission.forEach((element) => {
      if (element.emissionsAmountCO2 > 0) {
        emissionTotal += element.emissionsAmountCO2;
        emissionArrayPieData.push([
          element.label,
          (element.emissionsAmountCO2 / emissions.heating.CO2) * 100,
        ]);
      }
    });
  }
  if (title === "Waste") {
    emission.forEach((element) => {
      if (element.emissionsAmountCO2 > 0) {
        emissionTotal += element.emissionsAmountCO2;
        emissionArrayPieData.push([
          element.label,
          (element.emissionsAmountCO2 / emissions.waste.CO2) * 100,
        ]);
      }
    });
  }
  if (title === "Refrigerants") {
    emission.forEach((element) => {
      if (element.emissionsAmountCO2 > 0) {
        emissionTotal += element.emissionsAmountCO2;

        emissionArrayPieData.push([
          element.label,
          (element.emissionsAmountCO2 / emissions.refrigerants.CO2) * 100,
        ]);
      }
    });
  }
  if (title === "Transportation") {
    emission.forEach((element) => {
      if (element.emissionsAmountCO2 > 0) {
        emissionTotal += element.emissionsAmountCO2;

        emissionArrayPieData.push([
          element.label,
          (element.emissionsAmountCO2 / emissions.transportation.CO2) * 100,
        ]);
      }
    });
  }

  const totalPercentage = parseFloat((emissionTotal / totalCO2) * 100).toFixed(
    2
  );

  const optionsAnimateOnStart = {
    backgroundColor: "transparent",
    animation: {
      startup: true,
      easing: "linear",
      duration: 1000,
    },
  };
  return (
    <div className="flex xl:flex-row flex-col w-full items-center h-full min-h-[300px] animate-fadeIn mb-24">
      <div>
        <Chart
          chartType="PieChart"
          data={emissionArrayPieData}
          options={optionsAnimateOnStart}
          width="100%"
          height="100%"
        />
      </div>

      <div className="flex flex-col w-full h-full px-32 py-12 justify-center items-center bg-[#7bee64] rounded-3xl shadow-2xl animate-fadeIn xl:mr-[80px] ">
        <div>
          <p className=" font-MontserratBold text-gray-500">{title}</p>
        </div>
        <div>
          <p>
            This type of emission contributed to about{" "}
            {totalPercentage < 20 && (
              <span className="text-green-500 font-MontserratBold">
                {totalPercentage}%
              </span>
            )}
            {totalPercentage < 40 && totalPercentage > 20 && (
              <span className="text-blue-500 font-MontserratBold">
                {totalPercentage}%
              </span>
            )}
            {totalPercentage < 60 && totalPercentage > 40 && (
              <span className="text-yellow-500 font-MontserratBold">
                {totalPercentage}%
              </span>
            )}
            {totalPercentage < 80 && totalPercentage > 60 && (
              <span className="text-orange-500 font-MontserratBold">
                {totalPercentage}%
              </span>
            )}
            {totalPercentage < 100 && totalPercentage > 80 && (
              <span className="text-red-500 font-MontserratBold">
                {totalPercentage}%
              </span>
            )}{" "}
            of your total emissions
          </p>
        </div>
      </div>
    </div>
  );
};

export default PollutantPieChart;
