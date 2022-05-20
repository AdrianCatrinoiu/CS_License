import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const FormWasteSelect = ({
  id,
  topLabel,
  selectLabel,
  unitLabel,
  updateUnit,
  deleteUnit,
  unitList,
  item,
}) => {
  const [label, setLabel] = useState(item.label);
  const [value, setValue] = useState(item.value);
  const [type, setType] = useState(item.type);

  const disposeType = [
    {
      label: "Recycled",
    },
    {
      label: "Landfilled",
    },
    {
      label: "Combusted",
    },
    {
      label: "Composted",
    },
  ];

  const handleUpdate = () => {
    updateUnit(id, label, parseFloat(value), type);
  };

  const handleMaterialChange = (event, value) => {
    setLabel(value.label);
    setValue(0);
    setType(value.type);
  };
  const handleTypeChange = (event, value) => {
    setType(value.label);
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
              onChange={handleMaterialChange}
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
          <div className="w-full m-[24px]">
            <Autocomplete
              disablePortal
              disableClearable
              id="combo-box-demo"
              options={disposeType}
              value={type}
              onChange={handleTypeChange}
              sx={{
                "& .css-1in441m": {
                  fontSize: 12,
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                  label="Handling"
                />
              )}
            />
          </div>
          <TextField
            label={unitLabel}
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
                  tonnes
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

export default FormWasteSelect;
