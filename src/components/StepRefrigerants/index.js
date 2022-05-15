import React, { useEffect, useRef, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FormUnitSelect from "../../forms/FormUnitSelect";
import refrigerantsUnits from "../../utils/constants/refrigerantsUnits.json";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  userFormAddStart,
  userFormDeleteStart,
  userFormUpdateStart,
} from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});

const StepRefrigerants = ({ userId }) => {
  const { userForm } = useSelector(mapState);
  const [refrigerantsUnitList, setRefrigerantsUnitList] = useState(
    userForm.stepRefrigerants
  );
  const dispatch = useDispatch();

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  useEffect(() => {
    setRefrigerantsUnitList(userForm.stepRefrigerants);
  }, [userForm.stepRefrigerants]);

  const addUnit = () => {
    dispatch(
      userFormAddStart(userId, {
        step: "stepRefrigerants",
        data: {
          id: new Date().getTime(),
          label: "",
          value: 0,
          unit: "",
        },
      })
    );
    setTimeout(() => {
      scrollToBottom();
    }, 300);
  };

  const updateUnit = (id, label, value, unit) => {
    dispatch(
      userFormUpdateStart(userId, {
        step: "stepRefrigerants",
        data: {
          id,
          label,
          value,
          unit,
        },
      })
    );
  };
  const deleteUnit = (id) => {
    setRefrigerantsUnitList(
      refrigerantsUnitList.filter((refrigerantUnit) => {
        return refrigerantUnit.id !== id;
      })
    );
    refrigerantsUnitList.filter((refrigerantUnit) => {
      dispatch(
        userFormDeleteStart(userId, {
          step: "stepRefrigerants",
          data: { id },
        })
      );
      return refrigerantUnit.id !== id;
    });
  };

  return (
    <div className="flex flex-col w-[80%] justify-center items-center h-2/3  animate-fadeIn">
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
            key={unit.id}
            id={unit.id}
            selectLabel="Refrigerant"
            unitLabel="Unit"
            label="Select a refrigerant from the list below:"
            updateUnit={updateUnit}
            deleteUnit={deleteUnit}
            unitList={refrigerantsUnits}
          />
        ))}
        <div ref={messagesEndRef} />
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
