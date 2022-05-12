import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FormUnitSelect from "../../forms/FormUnitSelect";
import NavigationIcon from "@mui/icons-material/Navigation";
import transportationTypes from "../../utils/constants/heatingUnits.json";

const StepTransportation = () => {
  const [transportationList, setTransportationList] = useState([]);

  const addUnit = () => {
    setTransportationList([
      ...transportationList,
      { id: new Date().getTime(), label: "", value: 0, unit: "" },
    ]);
  };

  const updateUnit = (id, label, value, unit) => {
    setTransportationList(
      transportationList.map((heatingUnit) => {
        if (heatingUnit.id === id) {
          heatingUnit.label = label;
          heatingUnit.value = value;
          heatingUnit.unit = unit;
        }
        return heatingUnit;
      })
    );
  };

  const deleteUnit = (id) => {
    setTransportationList(
      transportationList.filter((heatingUnit) => {
        return heatingUnit.id !== id;
      })
    );
  };

  useEffect(() => {
    console.log("transportationList:", transportationList);
  }, [transportationList]);

  return (
    <div className="flex flex-col w-[80%] justify-center items-center h-2/3">
      <p className="mb-16 text-[24px]">
        Choose the transportation types that your company and employees use:
      </p>
      {transportationList.length === 0 && (
        <>
          <div className="animate-bounce flex justify-center items-center">
            <NavigationIcon sx={{ transform: "rotate(180deg)" }} />
          </div>
        </>
      )}
      <div className="overflow-scroll flex flex-col w-full items-center">
        {transportationList.map((unit, index) => (
          <FormUnitSelect
            id={unit.id}
            selectLabel="Material"
            unitLabel="Unit"
            label="Select a heating material from the list below:"
            updateUnit={updateUnit}
            deleteUnit={deleteUnit}
            unitList={transportationTypes}
          />
        ))}
      </div>

      <div className="my-8">
        <Fab
          size="medium"
          color="success"
          aria-label="add"
          onClick={() => addUnit()}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default StepTransportation;
