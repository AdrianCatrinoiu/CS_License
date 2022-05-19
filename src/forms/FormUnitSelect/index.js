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
  item,
}) => {
  const [unit, setUnit] = useState(item);
  const handleUnitChange = (event, value) => {
    updateUnit(id, value.label, value.value, value.unit);
    setUnit({
      id,
      label: value.label,
      value: value.value,
      unit: value.unit,
    });
  };
  const handleValueChange = (event, value) => {
    if (event.target.value) {
      updateUnit(id, unit.label, parseFloat(event.target.value), unit.unit);
      setUnit({
        id,
        label: unit.label,
        value: parseFloat(event.target.value),
        unit: unit.unit,
      });
    } else {
      updateUnit(id, unit.label, 0, unit.unit);
      setUnit({
        id,
        label: unit.label,
        value: 0,
        unit: unit.unit,
      });
    }
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
              disableClearable
              id="combo-box-demo"
              options={unitList}
              value={unit.label}
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
            value={unit.value}
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
