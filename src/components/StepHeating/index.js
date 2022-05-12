import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FormUnitSelect from "../../forms/FormUnitSelect";
import NavigationIcon from "@mui/icons-material/Navigation";
import heatingUnits from "../../utils/constants/heatingUnits.json";

const StepHeating = () => {
  const [heatingUnitList, setHeatingUnitList] = useState([]);

  const addUnit = () => {
    setHeatingUnitList([
      ...heatingUnitList,
      { id: new Date().getTime(), label: "", value: 0, unit: "" },
    ]);
  };

  const updateUnit = (id, label, value, unit) => {
    setHeatingUnitList(
      heatingUnitList.map((heatingUnit) => {
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
    setHeatingUnitList(
      heatingUnitList.filter((heatingUnit) => {
        return heatingUnit.id !== id;
      })
    );
  };

  useEffect(() => {
    console.log("heatingUnitList:", heatingUnitList);
  }, [heatingUnitList]);

  return (
    <div className="flex flex-col w-[80%] justify-center items-center h-2/3">
      <p className="mb-16 text-[24px]">Does your company burn fuels?</p>
      {heatingUnitList.length === 0 && (
        <>
          <p className="mb-16 text-[24px]">If so, add them below</p>
          <div className="animate-bounce flex justify-center items-center">
            <NavigationIcon sx={{ transform: "rotate(180deg)" }} />
          </div>
        </>
      )}
      <div className="overflow-scroll flex flex-col w-full items-center">
        {heatingUnitList.map((unit, index) => (
          <FormUnitSelect
            id={unit.id}
            selectLabel="Material"
            unitLabel="Unit"
            label="Select a heating material from the list below:"
            updateUnit={updateUnit}
            deleteUnit={deleteUnit}
            unitList={heatingUnits}
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

export default StepHeating;
