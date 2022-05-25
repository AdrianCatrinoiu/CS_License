import React from "react";
import InfoCard from "../InfoCard";
import PollutantPieChart from "../PollutantPieChart";
import Trees from "../../assets/trees.svg";
import ForestLand from "../../assets/forestLand.svg";
import { useSelector } from "react-redux";
const mapState = ({ user }) => ({
  userForm: user.userForm,
});
const SummaryFacts = ({ emissions, totalCO2 }) => {
  const { userForm } = useSelector(mapState);
  const totalTrees = parseInt(totalCO2 / 25);
  const totalHectares = totalTrees / 1600;

  return (
    <div className="flex flex-col w-[80%] items-center">
      <PollutantPieChart
        emission={userForm.stepElectricity}
        title="Electricity"
        emissions={emissions}
      />
      <PollutantPieChart
        emission={userForm.stepHeating}
        title="Burning"
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
              You would need to plant approximately{" "}
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
  );
};

export default SummaryFacts;
