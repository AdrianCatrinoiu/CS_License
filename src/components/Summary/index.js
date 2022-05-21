import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Chart } from "react-google-charts";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InfoCard from "../InfoCard";
import PollutantPieChart from "../PollutantPieChart";
import Trees from "../../assets/trees.svg";
import ForestLand from "../../assets/forestLand.svg";
import Recycle from "../../assets/recycle.svg";
import RenewableEnergy from "../../assets/renewableEnergy.svg";
import Offset from "../../assets/offset.svg";
import Education from "../../assets/educateEmployees.svg";
import SustainableSuppliers from "../../assets/supplier.svg";
import EmployeeTransportation from "../../assets/employeeTransportation.svg";
import RoadTravel from "../../assets/travelEmissions.svg";

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
          <div className="flex md:flex-row flex-col justify-between w-full md:max-h-[500px] mb-24">
            <div className="flex flex-col px-32 py-12 justify-center items-center bg-[#7bee64] rounded-3xl shadow-2xl animate-fadeIn md:mr-[80px] md:mb-0 mb-8 ">
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
              />{" "}
            </div>
          </div>
        </div>
      )}
      {value === 1 && (
        <div className="flex flex-col w-[80%] items-center">
          <PollutantPieChart
            emission={userForm.stepElectricity}
            title="Electricity"
            emissions={emissions}
          />
          <PollutantPieChart
            emission={userForm.stepHeating}
            title="Heating"
            emissions={emissions}
          />
          <PollutantPieChart
            emission={userForm.stepWaste}
            title="Waste"
            emissions={emissions}
          />
          <PollutantPieChart
            emission={userForm.stepRefrigerants}
            title="Refrigerants"
            emissions={emissions}
          />
          <PollutantPieChart
            emission={userForm.stepTransportation}
            title="Transportation"
            emissions={emissions}
          />
          <div className="mt-12 flex flex-col items-center ">
            <InfoCard
              textComponent={
                <p className="text-[24px] text-blue-400 text-center">
                  You would need approximately{" "}
                  <span className=" font-MontserratBold text-green-500">
                    {totalTrees}
                  </span>{" "}
                  trees to offset your carbon footprint.
                </p>
              }
              position="left"
              image={Trees}
            />
            <InfoCard
              text={`${totalHectares}`}
              textComponent={
                <p className="text-[24px] text-blue-400 text-center">
                  Those trees would cover{" "}
                  <span className=" font-MontserratBold text-green-500">
                    {totalHectares}
                  </span>{" "}
                  hectares of forest land.
                </p>
              }
              position="right"
              image={ForestLand}
            />
          </div>
        </div>
      )}
      {value === 2 && (
        <div className="flex flex-col w-[80%] items-center">
          <p className="mb-24 text-[24px]">
            How to try and reduce your emissions:
          </p>
          <InfoCard
            title="Choose renewable energy"
            text="With more and more green energy providers on the market, making the switch to renewable energy usage is much easier today than it used to be. Check with your energy provider first if they have any renewable energy plans available. If they don't, then consider switching to a provider that can guarantee that your energy consumption comes from renewable sources."
            position="left"
            image={RenewableEnergy}
          />
          <InfoCard
            title="Apply the three R's: reduce, reuse, recycle"
            text="The principle of the three R's is a must whenever we talk about being environmentally friendly. Consider how you can apply this to every aspect of your business, from office supplies to packaging and operations. What can be reduced, reused, or recycled? Probably a lot more than you think. This will probably not only make your company more eco-friendly but also help its bottom line too! "
            position="right"
            image={Recycle}
          />
          <InfoCard
            title="Pay for carbon offsetting"
            text="No matter how many green choices your company adopts, it will still be generating some amount of CO2 emissions during its activities. Carbon offsets are a great solution to fill in these gaps. There are many options available, from company-wide programs adapted to each specific sector, to those that are specific to a certain activity within your business."
            position="left"
            image={Offset}
          />
          <InfoCard
            title="Reduce road travel emissions"
            text="Depending on your business sector, road travel emissions might seem like an inevitable part of the game. However, if you have a transport fleet, there are different ways you can make it more efficient. Some examples are using fuel-efficient vehicles which produce low emissions, or electric vehicles. "
            position="right"
            image={RoadTravel}
          />
          <InfoCard
            title="Optimize Employees' Transportation"
            text="As we know, transportation is one of the largest sectors of greenhouse gas emissions. By encouraging employees to take public transit, to carpool with other colleagues living closeby or by giving them discounts on public transportation, companies can significantly reduce their indirect CO2 emissions and therefore their impact on climate change."
            position="left"
            image={EmployeeTransportation}
          />

          <InfoCard
            title="Educate employees"
            text="Education is crucial in order to ensure all the analysis and planning carried out to make your organization go greener actually goes through successfully. Your company's employees are the key to succeed in this challenge, but they need to be informed. It's also important to keep in mind that education is an ongoing process and, therefore, it's necessary to regularly inform and educate your employees on this subject."
            position="right"
            image={Education}
          />
          <InfoCard
            title="Choose Sustainable Suppliers"
            text="Each company also has a responsibility regarding the partners it chooses. Choosing a supplier is also an environmentally-friendly choice (or not, depending on the supplier). Therefore, companies should make the effort to choose suppliers who demonstrate they have good environmental practices."
            position="left"
            image={SustainableSuppliers}
          />
        </div>
      )}
    </div>
  );
};

export default Summary;
