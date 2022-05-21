import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const FormHeatingSelect = ({
  id,
  topLabel,
  selectLabel,
  unitLabel,
  updateUnit,
  deleteUnit,
  unitList,
  heatingUnit,
}) => {
  const [label, setLabel] = useState(heatingUnit.label);
  const [value, setValue] = useState(heatingUnit.value);
  const [unit, setUnit] = useState(heatingUnit.unit);

  const handleUpdate = () => {
    updateUnit(id, label, parseFloat(value), unit);
  };

  const handleUnitChange = (event, value) => {
    setLabel(value.label);
    setValue(0);
    setUnit(value.unit);
  };
  const handleValueChange = (event, value) => {
    if (event.target.value) {
      setValue(event.target.value);
    } else {
      setValue(0);
    }
  };
  return (
    <div
      onBlur={handleUpdate}
      className="flex flex-col w-[80%]  justify-center items-center my-8"
    >
      <div className="w-[80%] min-w-[200px] px-[24px] border-[1px] border-black border-opacity-[0.23] rounded-[4px]">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="my-6 text-[18px] w-2/3">{topLabel}</p>
          <IconButton
            className="w-16 h-16 self-center"
            onClick={() => deleteUnit(id)}
          >
            <ClearIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="w-full flex flex-col justify-center items-center ">
          <div className="w-full m-[24px]">
            <Autocomplete
              disablePortal
              disableClearable
              id="combo-box-demo"
              options={unitList}
              value={label}
              onChange={handleUnitChange}
              sx={{
                "& .css-1in441m": {
                  fontSize: 12,
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                  label={selectLabel}
                />
              )}
            />
          </div>
          <TextField
            label={unitLabel}
            id="outlined-start-adornment"
            sx={{
              m: 3,
              width: "100%",
              fontSize: 24,
            }}
            value={value}
            InputLabelProps={{ style: { fontSize: 16 } }}
            InputProps={{
              style: { fontSize: 16 },
              startAdornment: (
                <InputAdornment
                  sx={{
                    "& .MuiInputAdornment-root": {
                      fontSize: 16,
                    },
                  }}
                  position="start"
                >
                  {unit}
                </InputAdornment>
              ),
            }}
            onChange={handleValueChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FormHeatingSelect;
