import React from "react";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

const FormType = ({ orientation, isDisabled, setFormStep, formStep }) => {
  return (
    <div className=" h-full w-full">
      <div className=" absolute flex justify-center items-center  top-1/2 left-[10%] rounded-full bg-gray-200  cursor-pointer  hover:bg-lime-500  duration-300">
        <Fab
          disabled={isDisabled}
          onClick={() => setFormStep(formStep - 1)}
          variant="extended"
        >
          <NavigationIcon
            sx={{
              transform:
                orientation === "left" ? "rotate(90deg)" : "rotate(270deg)",
            }}
          />
        </Fab>
      </div>
    </div>
  );
};

export default FormType;
