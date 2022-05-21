import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const FormTransportationSelect = ({
  id,
  topLabel,
  selectLabel,
  vehiclesLabel,
  fuelLabel,
  updateUnit,
  deleteUnit,
  unitList,
  unit,
}) => {
  const [label, setLabel] = useState(unit.label);
  const [vehicleNr, setVehicles] = useState(unit.vehicleNr);
  const [fuelUsed, setFuelUsed] = useState(unit.fuelUsed);
  const [fuelUnit, setFuelUnit] = useState(unit.fuelUnit);
  const [vehicleType, setVehicleType] = useState(unit.vehicleType);

  const handleUpdate = () => {
    updateUnit(
      id,
      label,
      parseInt(vehicleNr),
      parseFloat(fuelUsed),
      fuelUnit,
      vehicleType
    );
  };

  const handleVehicleTypeChange = (event, value) => {
    setLabel(value.label);
    setVehicles(null);
    setFuelUsed(null);
    setFuelUnit(value.fuelUnit);
    setVehicleType(value.vehicleType);
  };

  const handleVehiclesChange = (event, value) => {
    if (event.target.value) {
      setVehicles(event.target.value);
    } else {
      setVehicles(null);
    }
  };

  const handleFuelChange = (event, value) => {
    if (event.target.value) {
      setFuelUsed(event.target.value);
    } else {
      setFuelUsed(null);
    }
  };

  return (
    <div
      onBlur={handleUpdate}
      className="flex flex-col w-[80%] justify-center items-center mb-8"
    >
      <div className="w-[80%] h-[375px] min-w-[200px] px-[24px] border-[1px] border-black border-opacity-[0.23] rounded-[4px]">
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
              options={unitList}
              value={label}
              groupBy={(option) => option.vehicleType}
              onChange={handleVehicleTypeChange}
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
            label={vehiclesLabel}
            id="outlined-start-adornment"
            sx={{
              width: "100%",
              marginBottom: "24px",
              fontSize: 24,
            }}
            value={vehicleNr}
            disabled={!label}
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
                ></InputAdornment>
              ),
            }}
            onChange={handleVehiclesChange}
          />
          <TextField
            label={fuelLabel}
            id="outlined-start-adornment"
            sx={{
              marginBottom: "24px",
              width: "100%",
              fontSize: 24,
            }}
            value={fuelUsed}
            disabled={!label}
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
                  {fuelUnit}
                </InputAdornment>
              ),
            }}
            onChange={handleFuelChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FormTransportationSelect;
