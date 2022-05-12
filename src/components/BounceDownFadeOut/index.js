import React from "react";
import NavigationIcon from "@mui/icons-material/Navigation";

const BounceDownFadeOut = ({ text }) => {
  return (
    <div className="animate-bounce_fade_out_5s opacity-0 flex flex-col justify-center items-center ">
      <p>{text}</p>
      <NavigationIcon sx={{ transform: "rotate(180deg)" }} />
    </div>
  );
};

export default BounceDownFadeOut;
