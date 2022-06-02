import React from "react";
import { Chart } from "react-google-charts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Denied from "../../assets/denied.svg";
import Verified from "../../assets/verified.svg";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { Link } from "react-router-dom";
import { userFormUpdateStart } from "../../redux/User/user.actions";
import { useDispatch } from "react-redux";
import EmissionBadge from "../EmissionBadge";

const FormYear = ({ year, emissions, adminBadge, emissionBadge, uuid }) => {
  const dispatch = useDispatch();

  const CO2data = [
    ["Element", "kg of CO2", { role: "style" }],
    ["Electricity", emissions.electricity.CO2, "green"],
    ["Burning", emissions.heating?.CO2, "red"],
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
    <div className="w-full rounded-3xl bg-green-200 shadow-2xl p-4 flex flex-col items-center justify-between">
      <div className="w-full flex flex-row items-center justify-between">
        <Link
          className="self-stretch"
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
          <div className="flex flex-col items-center justify-center self-stretch h-full  w-[20%] min-w-[70px] hover:bg-gray-500 hover:rounded-3xl">
            <p>{year}</p>
            <ArrowForwardIcon style={{ fontSize: "36px" }} />
          </div>
        </Link>

        <div className="w-1/2 ml-8 flex self-stretch min-h-[450px] flex-col bg-white rounded-2xl shadow-2xl animate-fadeIn">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="100%"
            data={CO2data}
            options={optionsAnimateOnStart}
          />
          <div className="w-full flex flex-row my-8 items-center justify-center">
            <p>Share your result on social media:</p>
            <FacebookShareButton
              className="mx-4"
              url={`${process.env.REACT_APP_SHARE_URL}/form/share/${uuid}`}
              quote={`Check out my company's emissions for ${year}!`}
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              url={`${process.env.REACT_APP_SHARE_URL}/form/share/${uuid}`}
              title={`Check out my company's emissions for ${year}!`}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-evenly self-stretch">
          <div className="flex flex-col items-center">
            <p className="text-center">Emissions badge:</p>
            <EmissionBadge emissionBadge={emissionBadge} />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-center">Document status:</p>
            {adminBadge === "verified" && (
              <div>
                <img className="h-[100px]" src={Verified} alt="Verified" />
              </div>
            )}
            {adminBadge === "rejected" && (
              <div>
                <img className="h-[100px]" src={Denied} alt="Denied" />
              </div>
            )}
            {adminBadge !== "rejected" && adminBadge !== "verified" && (
              <div>
                <p className="text-center">Pending approval</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormYear;
