import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { CountryDropdown } from "react-country-region-selector";

const StepElectricity = () => {
  const [renewable, setRenewable] = useState(0);
  const [nonRenewable, setNonRenewable] = useState(0);
  const [country, setCountry] = useState("");

  const handleRenewableChange = (event) => {
    setRenewable(event.target.value);
    console.log("mwh:", event.target.value);
  };
  const handleNonRenewableChange = (event) => {
    setNonRenewable(event.target.value);
    console.log("mwh:", event.target.value);
  };

  return (
    <div className="flex flex-col w-[80%] justify-center items-center h-2/3">
      <p className="mb-16 text-[24px]">
        Choose how much heating your company used during the selected year:
      </p>
      <TextField
        autoFocus
        label="Non-renewable electricity used"
        id="outlined-start-adornment"
        sx={{
          m: 3,
          width: "20%",
          fontSize: 24,
        }}
        InputLabelProps={{ style: { fontSize: 16 } }}
        InputProps={{
          style: { fontSize: 16 },
          startAdornment: <InputAdornment position="start">Mwh</InputAdornment>,
        }}
        onChange={handleNonRenewableChange}
      />
      <TextField
        autoFocus
        label="Renewable electricity used"
        id="outlined-start-adornment"
        sx={{
          m: 3,
          width: "20%",
          fontSize: 24,
        }}
        InputLabelProps={{ style: { fontSize: 16 } }}
        InputProps={{
          style: { fontSize: 16 },
          startAdornment: <InputAdornment position="start">Mwh</InputAdornment>,
        }}
        onChange={handleRenewableChange}
      />
      <div className="w-1/5 ">
        <CountryDropdown
          className="w-full my-[24px] h-[56px] text-24 border-[1px] border-black border-opacity-[0.23] rounded-[4px]"
          value={country}
          onChange={(val) => setCountry(val)}
        />
      </div>
    </div>
  );
};

export default StepElectricity;
