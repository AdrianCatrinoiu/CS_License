import React, { useEffect, useState } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { userFormUpdateStart } from "../../redux/User/user.actions";
import { YearPicker } from "@mui/x-date-pickers/YearPicker";
import Grid from "@mui/material/Grid";
import StepButton from "../StepButton";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});

const StepYear = ({ userId, formStep, setFormStep }) => {
  const { userForm } = useSelector(mapState);
  const [year, setYear] = useState(userForm.stepYear);
  const minDate = moment().subtract(20, "years");
  const maxDate = moment();

  const dispatch = useDispatch();

  useEffect(() => {
    setYear(userForm.stepYear);
  }, [userForm.stepYear]);

  return (
    <div className="flex flex-col max-w-[600px] items-center h-2/3 animate-fadeIn bg-white shadow-2xl pt-8 rounded-3xl min-h-[600px]">
      {formStep < 7 && (
        <StepButton
          orientation="right"
          setFormStep={setFormStep}
          formStep={formStep}
          isDisabled={!year}
        />
      )}
      <p className="mb-24 text-[24px] text-center">
        Choose the year for your estimation:
      </p>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Grid item xs={12} md={6} className="flex items-center justify-center">
          <YearPicker
            className="w-1/3 min-w-[400px] "
            date={moment(new Date(year.toString()))}
            isDateDisabled={() => false}
            minDate={minDate}
            maxDate={maxDate}
            sx={{
              "& .MuiYearPicker-root": {
                fontSize: "46px",
              },
            }}
            onChange={(newDate) => {
              setYear(newDate.year());
              dispatch(
                userFormUpdateStart({
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
