import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const FormRefrigerantSelect = ({
  id,
  topLabel,
  selectLabel,
  updateUnit,
  deleteUnit,
  unitList,
  refrigerant,
}) => {
  const [label, setLabel] = useState(refrigerant.label);
  const [kgBegin, setKgBegin] = useState(refrigerant.kgBegin);
  const [kgEnd, setKgEnd] = useState(refrigerant.kgEnd);
  const [formula, setFormula] = useState(refrigerant.formula);

  const handleUpdate = () => {
    updateUnit(
      id,
      label,
      kgBegin ? parseFloat(kgBegin) : null,
      kgEnd ? parseFloat(kgEnd) : null,
      formula
    );
  };

  const handleUnitChange = (event, value) => {
    setLabel(value.label);
    setKgBegin("");
    setKgEnd("");
    setFormula(value.formula);
  };
  const handleKgBeginChange = (event, value) => {
    if (event.target.value) {
      setKgBegin(event.target.value);
    } else {
      setKgBegin("");
    }
  };

  const handleKgEndChange = (event, value) => {
    if (event.target.value) {
      setKgEnd(event.target.value);
    } else {
      setKgEnd("");
    }
  };

  return (
    <div
      onBlur={handleUpdate}
      className="flex flex-col w-full  justify-center items-center mb-8"
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

        <div className="w-full flex flex-row justify-center items-center ">
          <div className="w-1/2 flex flex-col mr-4">
            <div className="w-full h-[56px]">
              <Autocomplete
                disablePortal
                disableClearable
                options={unitList}
                value={label}
                onChange={handleUnitChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 56,
                  },
                  "& .css-1in441m": {
                    fontSize: 12,
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                    sx={{
                      "&. MuiOutlinedInput-input": {
                        fontSize: 24,
                      },
                    }}
                    label={selectLabel}
                  />
                )}
              />
            </div>
            <div className="w-full min-w-[200px] mb-[24px] mt-[20px] ">
              <div className="w-full h-[56px] text-24 border-[1px] border-black border-opacity-[0.23] rounded-[4px] flex flex-row items-center justify-begin">
                <p className="pl-[14px] opacity-[0.6] text-2xl">
                  Formula: {formula}
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col ">
            <TextField
              label="Total"
              id="outlined-start-adornment"
              sx={{
                width: "100%",
                fontSize: 24,
              }}
              value={kgBegin}
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
                    kg
                  </InputAdornment>
                ),
              }}
              onChange={handleKgBeginChange}
            />
            <TextField
              label="End"
              id="outlined-start-adornment"
              sx={{
                width: "100%",
                fontSize: 24,
                marginTop: "20px",
                marginBottom: "24px",
              }}
              value={kgEnd}
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
                    kg
                  </InputAdornment>
                ),
              }}
              onChange={handleKgEndChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRefrigerantSelect;
