import React, { useEffect, useRef, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FormUnitSelect from "../../forms/FormUnitSelect";
import NavigationIcon from "@mui/icons-material/Navigation";
import heatingUnits from "../../utils/constants/heatingUnits.json";
import { useDispatch, useSelector } from "react-redux";
import {
  userFormAddStart,
  userFormDeleteStart,
  userFormUpdateStart,
} from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});

const StepHeating = ({ userId }) => {
  const { userForm } = useSelector(mapState);
  const [heatingUnitList, setHeatingUnitList] = useState(userForm.stepHeating);
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
    setHeatingUnitList(userForm.stepHeating);
  }, [userForm.stepHeating]);

  const addUnit = () => {
    dispatch(
      userFormAddStart(userId, {
        step: "stepHeating",
        data: { id: new Date().getTime(), label: "", value: 0, unit: "" },
      })
    );
    setTimeout(() => {
      scrollToBottom();
    }, 300);
  };

  const updateUnit = (id, label, value, unit) => {
    heatingUnitList.map((heatingUnit) => {
      if (heatingUnit.id === id) {
        dispatch(
          userFormUpdateStart(userId, {
            step: "stepHeating",
            data: { id, label, value, unit },
          })
        );
      }
      return heatingUnit;
    });
  };

  const deleteUnit = (id) => {
    heatingUnitList.filter((heatingUnit) => {
      dispatch(
        userFormDeleteStart(userId, {
          step: "stepHeating",
          data: { id },
        })
      );
      return heatingUnit.id !== id;
    });
  };

  useEffect(() => {}, [heatingUnitList]);

  return (
    <div className="flex flex-col w-[80%] items-center h-2/3 animate-fadeIn max-w-[600px] pb-6 pt-8 bg-white rounded-3xl min-h-[600px]">
      <p className="mb-16 text-[24px] text-center">
        Does your company burn fuels?
      </p>
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
            key={unit.id}
            id={unit.id}
            selectLabel="Material"
            unitLabel="Unit"
            label="Select a heating material from the list below:"
            updateUnit={updateUnit}
            deleteUnit={deleteUnit}
            unitList={heatingUnits}
            item={unit}
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

export default StepHeating;
