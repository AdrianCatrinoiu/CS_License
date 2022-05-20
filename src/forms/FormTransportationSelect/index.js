import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const FormTransportationSelect = ({
  id,
  label,
  selectLabel,
  vehiclesLabel,
  fuelLabel,
  updateUnit,
  deleteUnit,
  unitList,
  unit,
}) => {
  const [vehicleType, setVehicleType] = useState(unit);

  const handleVehicleTypeChange = (event, value) => {
    if (value) {
      updateUnit(
        id,
        value.label,
        value.vehicles,
        value.fuel,
        value.fuelUnit,
        value.type
      );
      setVehicleType({
        id,
        label: value.label,
        vehicles: value.vehicles,
        fuel: value.fuel,
        fuelUnit: value.fuelUnit,
        type: value.type,
      });
    } else {
      updateUnit(id, "", 0, 0, "", "");
      setVehicleType({
        id,
        label: "",
        vehicles: 0,
        fuel: 0,
        fuelUnit: "",
        type: "",
      });
    }
  };

  const handleVehiclesChange = (event, value) => {
    if (event.target.value) {
      updateUnit(
        id,
        vehicleType.label,
        parseFloat(event.target.value),
        vehicleType.fuel,
        vehicleType.fuelUnit,
        vehicleType.type
      );
      setVehicleType({
        id,
        label: vehicleType.label,
        vehicles: parseFloat(event.target.value),
        fuel: vehicleType.fuel,
        fuelUnit: vehicleType.fuelUnit,
        type: vehicleType.type,
      });
    } else {
      updateUnit(
        id,
        vehicleType.label,
        0,
        vehicleType.fuel,
        vehicleType.fuelUnit,
        vehicleType.type
      );
      setVehicleType({
        id,
        label: vehicleType.label,
        vehicles: 0,
        fuel: vehicleType.fuel,
        fuelUnit: vehicleType.fuelUnit,
        type: vehicleType.type,
      });
    }
  };

  const handleFuelChange = (event, value) => {
    console.log(value);
    console.log(event.target.value);
    if (event.target.value) {
      updateUnit(
        id,
        vehicleType.label,
        vehicleType.vehicles,
        parseFloat(event.target.value),
        vehicleType.fuelUnit,
        vehicleType.type
      );
      setVehicleType({
        id,
        label: vehicleType.label,
        vehicles: vehicleType.vehicles,
        fuel: parseFloat(event.target.value),
        fuelUnit: vehicleType.fuelUnit,
        type: vehicleType.type,
      });
    } else {
      updateUnit(
        id,
        vehicleType.label,
        vehicleType.vehicles,
        0,
        vehicleType.fuelUnit,
        vehicleType.type
      );
      setVehicleType({
        id,
        label: vehicleType.label,
        vehicles: vehicleType.vehicles,
        fuel: 0,
        fuelUnit: vehicleType.fuelUnit,
        type: vehicleType.type,
      });
    }
  };

  return (
    <div className="flex flex-col w-[80%] justify-center items-center mb-8">
      <div className="w-[80%] h-[375px] min-w-[200px] px-[24px] border-[1px] border-black border-opacity-[0.23] rounded-[4px]">
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
              options={unitList}
              value={vehicleType.label}
              groupBy={(option) => option.type}
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
            value={vehicleType.vehicles}
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
            value={vehicleType.fuel}
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
                  {vehicleType.fuelUnit}
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
