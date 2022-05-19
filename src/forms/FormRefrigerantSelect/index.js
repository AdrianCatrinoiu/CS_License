import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const FormRefrigerantSelect = ({
  id,
  label,
  selectLabel,
  updateUnit,
  deleteUnit,
  unitList,
  refrigerant,
}) => {
  const [unit, setUnit] = useState(refrigerant);

  useEffect(() => {
    setUnit(refrigerant);
  }, [refrigerant]);

  const handleUnitChange = (event, value) => {
    updateUnit(id, value.label, value.kgBegin, value.kgEnd, value.formula);
    setUnit({
      id,
      label: value.label,
      kgBegin: value.kgBegin,
      kgEnd: value.kgEnd,
      formula: value.formula,
    });
  };
  const handleKgBeginChange = (event, value) => {
    if (event.target.value) {
      updateUnit(id, unit.label, event.target.value, unit.kgEnd, unit.formula);
      setUnit({
        id,
        label: unit.label,
        kgBegin: event.target.value,
        kgEnd: unit.kgEnd,
        formula: unit.formula,
      });
    } else {
      updateUnit(id, unit.label, 0, unit.kgEnd, unit.formula);
      setUnit({
        id,
        label: unit.label,
        kgBegin: 0,
        kgEnd: unit.kgEnd,
        formula: unit.formula,
      });
    }
  };

  const handleKgEndChange = (event, value) => {
    if (event.target.value) {
      updateUnit(
        id,
        unit.label,
        unit.kgBegin,
        event.target.value,
        unit.formula
      );
      setUnit({
        id,
        label: unit.label,
        kgBegin: unit.kgBegin,
        kgEnd: event.target.value,
        formula: unit.formula,
      });
    } else {
      updateUnit(id, unit.label, unit.kgBegin, 0, unit.formula);
      setUnit({
        id,
        label: unit.label,
        kgBegin: unit.kgBegin,
        kgEnd: 0,
        formula: unit.formula,
      });
    }
  };

  return (
    <div className="flex flex-col w-full  justify-center items-center mb-8">
      <div className="w-[80%] min-w-[200px] px-[24px] border-[1px] border-black border-opacity-[0.23] rounded-[4px]">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="my-6 text-[18px] w-2/3">{label}</p>
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
                value={unit.label}
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
                  Formula: {unit.formula}
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col ">
            <TextField
              label="Beginning"
              id="outlined-start-adornment"
              sx={{
                width: "100%",
                fontSize: 24,
              }}
              type="text"
              value={unit.kgBegin}
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
              value={unit.kgEnd}
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
