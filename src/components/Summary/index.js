import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Chart } from "react-google-charts";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
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
    emissions.refrigerants.CO2 +
    emissions.transportation.CO2;
  const totalTrees = parseInt(totalCO2 / 25);
  const totalHectares = totalTrees / 1600;

  const CO2data = [
    ["Element", "kg of CO2", { role: "style" }],
    ["Electricity", emissions.electricity.CO2, "green"], // RGB value
    ["Heating", emissions.heating.CO2, "red"], // English color name
    ["Refrigerants", emissions.refrigerants.CO2, "blue"],
    ["Transportation", emissions.transportation.CO2, "brown"], // CSS-style declaration
  ];

  const CH4data = [
    ["Element", "g of CH4", { role: "style" }],
    ["Heating", emissions.heating.CH4, "red"], // English color name
    ["Transportation", emissions.transportation.CH4, "brown"], // CSS-style declaration
  ];

  const N2Odata = [
    ["Element", "g of N2O", { role: "style" }],
    ["Heating", emissions.heating.N2O, "red"], // English color name
    ["Transportation", emissions.transportation.N2O, "brown"], // CSS-style declaration
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

  const options = {
    chart: {
      title: "Company Emissions",
      subtitle: `Electricity, Heating, Refrigerants and Transportation:${userForm.stepYear} `,
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
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={CO2data}
          />
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={CH4data}
          />
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={N2Odata}
          />
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
            title={"Choose renewable energy"}
            text={
              "With more and more green energy providers on the market, making the switch to renewable energy usage is much easier today than it used to be. Check with your energy provider first if they have any renewable energy plans available. If they don’t, then consider switching to a provider that can guarantee that your energy consumption comes from renewable sources."
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
