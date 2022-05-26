import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userFormUpdateStart } from "../../redux/User/user.actions";
import { Chart } from "react-google-charts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const FormYear = ({ year, emissions }) => {
  const dispatch = useDispatch();
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
    <div className="w-full rounded-3xl bg-[#7bee64] shadow-2xl p-4 flex flex-row items-center justify-between">
      <Link
        to="/form"
        onClick={() =>
          dispatch(
            userFormUpdateStart({
              step: "stepYear",
              data: year,
            })
          )
        }
      >
        <div className="flex flex-col items-center justify-center my-8  w-[10%] min-w-[70px] hover:bg-[#dddddd] hover:rounded-3xl">
          <p>{year}</p>
          <ArrowForwardIcon />
        </div>
      </Link>
      <div className="w-1/2 ml-8 h-full bg-[#dddddd] rounded-2xl shadow-2xl animate-fadeIn">
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
    </div>
  );
};

export default FormYear;
