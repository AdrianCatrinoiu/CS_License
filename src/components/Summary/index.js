import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Chart } from "react-google-charts";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InfoCard from "../InfoCard";

const mapState = ({ user }) => ({
  userForm: user.userForm,
  emissions: user.emissions,
});

const Summary = ({ userId }) => {
  const { userForm, emissions } = useSelector(mapState);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const totalCO2 =
    emissions.electricity.CO2 +
    emissions.heating.CO2 +
    emissions.waste.CO2 +
    emissions.refrigerants.CO2 +
    emissions.transportation.CO2;
  const totalCH4 =
    emissions.heating.CH4 + emissions.waste.CH4 + emissions.transportation.CH4;
  const totalN2O =
    emissions.heating.N2O + emissions.waste.N2O + emissions.transportation.N2O;
  const totalTrees = parseInt(totalCO2 / 25);
  const totalHectares = totalTrees / 1600;

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

  const generalData = [
    ["Category", "CO2", "CH4", "N2O"],
    [
      "Electricity",
      emissions.electricity.CO2,
      emissions.electricity.CH4,
      emissions.electricity.N2O,
    ],
    [
      "Heating",
      emissions.heating.CO2,
      emissions.heating.CH4,
      emissions.heating.N2O,
    ],
    ["Waste", emissions.waste.CO2, emissions.waste.CH4, emissions.waste.N2O],
    [
      "Refrigerants",
      emissions.refrigerants.CO2,
      emissions.refrigerants.CH4,
      emissions.refrigerants.N2O,
    ],
    [
      "Transportation",
      emissions.transportation.CO2,
      emissions.transportation.CH4,
      emissions.transportation.N2O,
    ],
  ];
  const totalElectricity = parseFloat(
    userForm.stepElectricity.nonRenewableAmount +
      userForm.stepElectricity.renewableAmount
  );
  const electricityPieData = [
    ["Task", "Hours per Day"],
    [
      "Renewable",
      (userForm.stepElectricity.renewableAmount / totalElectricity) * 100,
    ],
    [
      "Nonrenewable",
      (userForm.stepElectricity.nonRenewableAmount / totalElectricity) * 100,
    ],
  ];

  const totalHeating = userForm.stepHeating.reduce((partialSum, item) => {
    return partialSum + item.value;
  }, 0);

  const options = {
    chart: {
      title: "Company Emissions",
      subtitle: `Electricity, Heating, Refrigerants and Transportation:${userForm.stepYear} `,
    },
  };
  const optionsAnimateOnStart = {
    backgroundColor: "transparent",
    animation: {
      startup: true,
      easing: "linear",
      duration: 1000,
    },
  };
  return (
    <div className="flex flex-col w-[80%] items-center h-2/3 animate-fadeIn">
      <div className="mb-[50px]">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Statistics" />
          <Tab label="Facts" />
          <Tab label="Solutions" />
        </Tabs>
      </div>
      {value === 0 && (
        <div className="flex flex-col w-[80%] items-center">
          <p className="mb-24 text-[24px]">
            Your emissions in {userForm.stepYear}:
          </p>
          <div className="flex md:flex-row flex-col justify-between w-full max-h-[500px] mb-24">
            <div className="flex flex-col px-32 py-12 justify-center items-center bg-[#7bee64] rounded-3xl shadow-2xl animate-fadeIn mr-[80px] ">
              <div className="flex flex-col items-center justify-center my-8">
                <p className="font-MontserratBold text-[32px] text-blue-400">
                  {totalCO2.toFixed(2)}
                </p>
                <p className="text-[24px]">kg equivalent of CO2</p>
              </div>
              <div className="flex flex-col items-center justify-center my-8">
                <p className="font-MontserratBold text-[32px] text-blue-400">
                  {totalCH4.toFixed(2)}
                </p>
                <p className="text-[24px]">g equivalent of CH4</p>
              </div>
              <div className="flex flex-col items-center justify-center my-8">
                <p className="font-MontserratBold text-[32px] text-blue-400">
                  {totalN2O.toFixed(2)}
                </p>
                <p className="text-[24px]">g equivalent of N2O</p>
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
          <div className="flex md:flex-row flex-col justify-between w-full max-h-[500px] mb-24">
            <div className="w-full h-full  bg-[#dddddd] rounded-2xl shadow-2xl animate-fadeIn mr-[80px]">
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
              />{" "}
            </div>
          </div>
        </div>
      )}
      {value === 1 && (
        <div className="flex flex-col w-[80%] items-center">
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={generalData}
            options={options}
          />
          <div className="mt-12 flex flex-col items-center ">
            <InfoCard
              text={`Your total emissions would need approximately
               ${totalTrees} trees to
              offset your carbon footprint.`}
              position="left"
            />
            <InfoCard
              text={`Those trees would cover ${totalHectares} hectares.`}
              position="right"
            />

            <Chart
              chartType="PieChart"
              data={electricityPieData}
              options={options}
              width={"100%"}
              height={"400px"}
            />
            {/* <p className="mb-24 text-[24px]">
              Your total emissions would need approximately
              <span className="text-green-700"> {totalTrees}</span> trees to
              offset your carbon footprint.
            </p>
            <p className="mb-24 text-[24px]">
              Those trees would cover
              <span className="text-green-700"> {totalHectares} </span>hectares.
            </p> */}
          </div>
        </div>
      )}
      {value === 2 && (
        <div className="flex flex-col w-[80%] items-center">
          <p className="mb-24 text-[24px]">
            How to try and reduce your emissions:
          </p>
          <InfoCard
            title={"Choose renewableAmount energy"}
            text={
              "With more and more green energy providers on the market, making the switch to renewableAmount energy usage is much easier today than it used to be. Check with your energy provider first if they have any renewableAmount energy plans available. If they don’t, then consider switching to a provider that can guarantee that your energy consumption comes from renewableAmount sources."
            }
            position="left"
          />
          <InfoCard
            text={`Your total emissions would need approximately
               ${totalTrees} trees to
              offset your carbon footprint.`}
            position="right"
          />
        </div>
      )}
    </div>
  );
};

export default Summary;