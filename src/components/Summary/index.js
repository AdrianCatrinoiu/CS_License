import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SummaryFacts from "../SummaryFacts";
import SummaryStatistics from "../SummaryStatistics";
import SummarySolutions from "../SummarySolutions";

const mapState = ({ user }) => ({
  userForm: user.userForm,
  // emissions: user.emissions,
  emissionsList: user.emissionsList,
});

const Summary = ({ userId }) => {
  const { userForm, emissionsList } = useSelector(mapState);

  const [value, setValue] = useState(0);
  const emissionYear = emissionsList.filter(
    (e) => e.formId === userForm.formId
  );
  const emissions = emissionYear[0].emissions;
  console.log("emissions", emissions);
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

  return (
    <div className="flex flex-col w-[90%] items-center h-2/3 animate-fadeIn">
      <div className="mb-[50px]">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Statistics" />
          <Tab label="Facts" />
          <Tab label="Solutions" />
        </Tabs>
      </div>
      {value === 0 && (
        <SummaryStatistics
          year={userForm.stepYear}
          emissions={emissions}
          totalCO2={totalCO2}
          totalCH4={totalCH4}
          totalN2O={totalN2O}
        />
      )}
      {value === 1 && (
        <SummaryFacts
          userForm={userForm}
          emissions={emissions}
          totalCO2={totalCO2}
        />
      )}
      {value === 2 && <SummarySolutions />}
    </div>
  );
};

export default Summary;
