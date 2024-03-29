import React from "react";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

const StepButton = ({ orientation, isDisabled, setFormStep, formStep }) => {
  return (
    <div
      className={
        orientation === "right"
          ? "absolute flex justify-center items-center  sm:top-1/2 top-[80%] sm:right-[10%] right-[5%] rounded-full cursor-pointer duration-300"
          : "absolute flex justify-center items-center  sm:top-1/2 top-[80%] sm:left-[10%]  left-[5%] rounded-full cursor-pointer duration-300"
      }
    >
      <Fab
        disabled={isDisabled}
        color="primary"
        onClick={() =>
          orientation === "right"
            ? setFormStep(formStep + 1)
            : setFormStep(formStep - 1)
        }
        variant="extended"
      >
        <NavigationIcon
          sx={{
            transform:
              orientation === "right" ? "rotate(90deg)" : "rotate(270deg)",
          }}
        />
      </Fab>
    </div>
  );
};

export default StepButton;
