import React from "react";
import StepYear from "../StepYear";
import StepCAEN from "../StepCAEN";
import StepElectricity from "../StepElectricity";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import StepHeating from "../StepHeating";
import StepRefrigerants from "../StepRefrigerants";
import StepTransportation from "../StepTransportation";

const FormType = ({ formStep, setFormStep }) => {
  console.log("formstep", formStep);
  return (
    <div className=" h-full w-full">
      <div className="h-full flex flex-row justify-center">
        {formStep > 0 && (
          <div className="absolute flex justify-center items-center  top-1/2 left-[10%] rounded-full bg-gray-200  cursor-pointer  hover:bg-lime-500  duration-300">
            <Fab onClick={() => setFormStep(formStep - 1)} variant="extended">
              <NavigationIcon sx={{ transform: "rotate(270deg)" }} />
            </Fab>
          </div>
        )}
        {formStep < 5 && (
          <div className="absolute  flex justify-center items-center  top-1/2 right-[10%] rounded-full bg-gray-200  cursor-pointer  hover:bg-lime-500  duration-300">
            <Fab onClick={() => setFormStep(formStep + 1)} variant="extended">
              <NavigationIcon sx={{ transform: "rotate(90deg)" }} />
            </Fab>
          </div>
        )}

        <div className="flex flex-col justify-center items-center w-full">
          {formStep === 0 && <StepYear />}
          {formStep === 1 && <StepCAEN />}
          {formStep === 2 && <StepElectricity />}
          {formStep === 3 && <StepHeating />}
          {formStep === 4 && <StepRefrigerants />}
          {formStep === 5 && <StepTransportation />}
        </div>
      </div>
    </div>
  );
};

export default FormType;
