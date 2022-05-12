import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import moment from "moment";

const StepYear = ({ formStep }) => {
  const [year, setYear] = useState();
  const minDate = moment().subtract(20, "years");
  const maxDate = moment().add(3, "years");

  return (
    <div className="flex flex-col w-[80%] justify-center items-center h-2/3">
      <p className="mb-24 text-[24px]">Choose the year for your estimation:</p>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          views={["year"]}
          minDate={minDate}
          maxDate={maxDate}
          onChange={(newValue) => {
            console.log("newValue:", newValue.year());
            setYear(newValue.year());
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default StepYear;
