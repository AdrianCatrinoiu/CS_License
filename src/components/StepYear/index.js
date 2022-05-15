import React, { useState } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { userFormUpdateStart } from "../../redux/User/user.actions";
import { YearPicker } from "@mui/x-date-pickers/YearPicker";
import Grid from "@mui/material/Grid";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});

const StepYear = ({ userId }) => {
  const { userForm } = useSelector(mapState);
  const [year, setYear] = useState(userForm.stepYear);
  const minDate = moment().subtract(20, "years");
  const maxDate = moment();

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-[80%] justify-center items-center h-2/3  animate-fadeIn">
      <p className="mb-24 text-[24px]">Choose the year for your estimation:</p>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Grid item xs={12} md={6} className="flex items-center justify-center">
          <YearPicker
            className="w-1/3"
            date={moment(new Date(year.toString()))}
            isDateDisabled={() => false}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(newDate) => {
              setYear(newDate.year());
              dispatch(
                userFormUpdateStart(userId, {
                  step: "stepYear",
                  data: newDate.year(),
                })
              );
            }}
          />
        </Grid>
      </LocalizationProvider>
    </div>
  );
};

export default StepYear;
