import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const FormUnitSelect = ({
  id,
  label,
  selectLabel,
  unitLabel,
  updateUnit,
  deleteUnit,
  unitList,
}) => {
  const [unit, setUnit] = useState(unitList[0]);
  const handleUnitChange = (event, value) => {
    console.log("unit:", value);
    updateUnit(id, value.label, value.value, value.unit);
    setUnit(value);
  };
  const handleValueChange = (event, value) => {
    console.log("value:", event.target.value);
    updateUnit(id, unit.label, event.target.value, unit.unit);
  };
  return (
    <div className="flex flex-col w-[80%]  justify-center items-center my-8">
      <div className="w-1/3 min-w-[200px] px-[24px] border-[1px] border-black border-opacity-[0.23] rounded-[4px]">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="my-6 text-[18px] w-2/3">{label}</p>
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
              id="combo-box-demo"
              options={unitList}
              value={unit}
              onChange={handleUnitChange}
              sx={{
                "& .css-1in441m": {
                  fontSize: 12,
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    fontSize: 16,
                  }}
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
                  {unit.unit}
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

export default FormUnitSelect;
