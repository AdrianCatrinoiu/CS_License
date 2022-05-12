import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FormUnitSelect from "../../forms/FormUnitSelect";
import refrigerantsUnits from "../../utils/constants/refrigerantsUnits.json";
import NavigationIcon from "@mui/icons-material/Navigation";

const StepRefrigerants = () => {
  const [refrigerantsUnitList, setRefrigerantsUnitList] = useState([]);

  const addUnit = () => {
    setRefrigerantsUnitList([
      ...refrigerantsUnitList,
      { id: new Date().getTime(), label: "", value: 0, unit: "" },
    ]);
  };
  const updateUnit = (id, label, value, unit) => {
    setRefrigerantsUnitList(
      refrigerantsUnitList.map((refrigerantUnit) => {
        if (refrigerantUnit.id === id) {
          refrigerantUnit.label = label;
          refrigerantUnit.value = value;
          refrigerantUnit.unit = unit;
        }
        return refrigerantUnit;
      })
    );
  };
  const deleteUnit = (id) => {
    setRefrigerantsUnitList(
      refrigerantsUnitList.filter((refrigerantUnit) => {
        return refrigerantUnit.id !== id;
      })
    );
  };
  useEffect(() => {
    console.log("refrigerantsUnitList:", refrigerantsUnitList);
  }, [refrigerantsUnitList]);

  return (
    <div className="flex flex-col w-[80%] justify-center items-center h-2/3">
      <p className="mb-16 text-[24px]">Does your company use refrigerants?</p>
      {refrigerantsUnitList.length === 0 && (
        <>
          <p className="mb-16 text-[24px]">If so, add them below</p>
          <div className="animate-bounce flex justify-center items-center">
            <NavigationIcon sx={{ transform: "rotate(180deg)" }} />
          </div>
        </>
      )}
      <div className="overflow-scroll flex flex-col w-full items-center">
        {refrigerantsUnitList.map((unit, index) => (
          <FormUnitSelect
            id={unit.id}
            selectLabel="Refrigerant"
            unitLabel="Unit"
            label="Select a refrigerant from the list below:"
            updateUnit={updateUnit}
            deleteUnit={deleteUnit}
            unitList={refrigerantsUnits}
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

export default StepRefrigerants;
