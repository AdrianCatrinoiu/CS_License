import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { CountryDropdown } from "react-country-region-selector";
import { useDispatch, useSelector } from "react-redux";
import { userFormUpdateStart } from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});

const StepElectricity = ({ userId }) => {
  const { userForm } = useSelector(mapState);
  const [renewableAmount, setRenewableAmount] = useState(
    userForm.stepElectricity.renewableAmount
  );
  const [nonRenewableAmount, setNonRenewableAmount] = useState(
    userForm.stepElectricity.nonRenewableAmount
  );
  const [country, setCountry] = useState(userForm.stepElectricity.country);
  const dispatch = useDispatch();

  const handleRenewableChange = (event) => {
    setRenewableAmount(event.target.value);
  };
  const handleNonRenewableChange = (event) => {
    setNonRenewableAmount(event.target.value);
  };

  useEffect(() => {
    dispatch(
      userFormUpdateStart({
        step: "stepElectricity",
        formId: userForm.formId,
        data: {
          renewableAmount: parseFloat(renewableAmount),
          nonRenewableAmount: parseFloat(nonRenewableAmount),
          country: country,
        },
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renewableAmount, nonRenewableAmount, country]);

  return (
    <div className="flex flex-col  items-center h-2/3 animate-fadeIn max-w-[600px] pb-24 pt-8 bg-white rounded-3xl min-h-[600px]">
      <p className="mb-16 text-[24px] text-center">
        Choose how much electricity your company used during the selected year:
      </p>
      <TextField
        label="Non-renewableAmount"
        id="outlined-start-adornment"
        sx={{
          m: 3,
          width: "60%",
          fontSize: 24,
          minWidth: "200px",
        }}
        defaultValue={nonRenewableAmount}
        InputLabelProps={{ style: { fontSize: 16 } }}
        InputProps={{
          style: { fontSize: 16 },
          startAdornment: <InputAdornment position="start">Mwh</InputAdornment>,
        }}
        onBlur={handleNonRenewableChange}
      />
      <TextField
        label="Renewable"
        id="outlined-start-adornment"
        sx={{
          m: 3,
          width: "60%",
          fontSize: 24,
          minWidth: "200px",
        }}
        defaultValue={renewableAmount}
        InputLabelProps={{ style: { fontSize: 16 } }}
        InputProps={{
          style: { fontSize: 16 },
          startAdornment: <InputAdornment position="start">Mwh</InputAdornment>,
        }}
        onBlur={handleRenewableChange}
      />
      <div className="w-[60%] min-w-[200px]">
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
