import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import useWindowDimensions from "../../customHooks/useWindowDimensions";
import Burning from "../../assets/burning.svg";
import Electricity from "../../assets/electricity.svg";
import Refrigerants from "../../assets/refrigerants.svg";
import Transportation from "../../assets/transportation.svg";
import Waste from "../../assets/waste.svg";
import CAEN from "../../assets/CAEN.svg";
import Year from "../../assets/year.svg";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const FormStepper = ({ formStep }) => {
  const { width } = useWindowDimensions();

  const steps = [
    { label: "Year", svg: Year },
    { label: "Field of activity", svg: CAEN },
    { label: "Electricity emissions", svg: Electricity },
    { label: "Burning emissions", svg: Burning },
    { label: "Waste emissions", svg: Waste },
    { label: "Refrigerants emissions", svg: Refrigerants },
    { label: "Transportation emissions", svg: Transportation },
  ];

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: ((width * 0.8) / 7) * 0.25,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient(90deg, rgba(36,121,9,1) 0%, rgba(0,255,158,1) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient(90deg, rgba(36,121,9,1) 0%, rgba(0,255,158,1) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: ((width * 0.8) / 7) * 0.5,
    height: ((width * 0.8) / 7) * 0.5,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient(90deg, rgba(36,121,9,1) 0%, rgba(0,255,158,1) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient(90deg, rgba(36,121,9,1) 0%, rgba(0,255,158,1) 100%)",
    }),
  }));
  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <img className="h-full" src={Year} alt="Year" />,
      2: <img className="h-full" src={CAEN} alt="Field of activity" />,
      3: (
        <img className="h-full" src={Electricity} alt="Electricity emissions" />
      ),
      4: <img className="h-full" src={Burning} alt="Burning emissions" />,
      5: <img className="h-full" src={Waste} alt="Waste emissions" />,
      6: (
        <img
          className="h-full"
          src={Refrigerants}
          alt="Refrigerants emissions"
        />
      ),
      7: (
        <img
          className="h-full"
          src={Transportation}
          alt="Transportation emissions"
        />
      ),
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }
  return (
    <div className="w-full flex flex-col">
      <Stepper
        className="w-[80%] self-center mt-8"
        alternativeLabel
        activeStep={formStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label.label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              {label.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default FormStepper;
