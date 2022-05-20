import React from "react";
import StepYear from "../StepYear";
import StepCAEN from "../StepCAEN";
import StepElectricity from "../StepElectricity";
import StepHeating from "../StepHeating";
import StepRefrigerants from "../StepRefrigerants";
import StepTransportation from "../StepTransportation";
import { useSelector } from "react-redux";
import Summary from "../Summary";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import useWindowDimensions from "../../customHooks/useWindowDimensions";
import StepButton from "../StepButton";
import StepWaste from "../StepWaste";

const mapState = ({ user }) => ({
  user: user.user,
});

const FormType = ({ formStep, setFormStep }) => {
  const { user } = useSelector(mapState);

  const { width } = useWindowDimensions();

  const steps = [
    "Year",
    "Field of activity",
    "Electricity emissions",
    "Burning emissions",
    "Waste emissions",
    "Refrigerants emissions",
    "Transportation emissions",
  ];

  return (
    <div className=" h-full w-full">
      <div className="h-full flex flex-col">
        {formStep > 0 && (
          <StepButton
            orientation="left"
            setFormStep={setFormStep}
            formStep={formStep}
          />
        )}
        {formStep < 6 && (
          <StepButton
            orientation="right"
            setFormStep={setFormStep}
            formStep={formStep}
          />
        )}

        <Stepper
          activeStep={formStep}
          alternativeLabel
          className="w-[80%] self-center mt-[100px]"
          sx={{
            "& .MuiStepLabel-label": { fontSize: "1.5rem" },
            "& .MuiStepper-root": { fontSize: "1.5rem" },
          }}
        >
          {steps.map((label) => (
            <Step
              key={label}
              sx={{
                "& .MuiSvgIcon-root": {
                  height: 24,
                  width: 24,
                },
                "& .MuiStepIcon-text": {
                  fontSize: "1rem",
                },
              }}
            >
              <StepLabel>{width > 500 && label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className="flex flex-col items-center w-full h-full max-h-[70%] mt-[50px]">
          {formStep === 0 && <StepYear userId={user.id} />}
          {formStep === 1 && <StepCAEN userId={user.id} />}
          {formStep === 2 && <StepElectricity userId={user.id} />}
          {formStep === 3 && <StepHeating userId={user.id} />}
          {formStep === 4 && <StepWaste userId={user.id} />}
          {formStep === 5 && <StepRefrigerants userId={user.id} />}
          {formStep === 6 && (
            <StepTransportation userId={user.id} setFormStep={setFormStep} />
          )}
          {formStep === 7 && <Summary userId={user.id} />}
        </div>
      </div>
    </div>
  );
};

export default FormType;
