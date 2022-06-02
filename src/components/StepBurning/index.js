import React, { useEffect, useRef, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FormBurningSelect from "../../forms/FormBurningSelect";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  userFormAddStart,
  userFormDeleteStart,
  userFormUpdateStart,
} from "../../redux/User/user.actions";
import StepButton from "../StepButton";

const mapState = ({ user }) => ({
  userForm: user.userForm,
  formStatistics: user.formStatistics,
});

const StepBurning = ({ userId, formStep, setFormStep }) => {
  const { userForm, formStatistics } = useSelector(mapState);
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
      userFormAddStart({
        step: "stepHeating",
        formId: userForm.formId,
        data: { id: new Date().getTime(), label: "", value: null, unit: "" },
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
          userFormUpdateStart({
            step: "stepHeating",
            formId: userForm.formId,
            data: { id, label, value, unit },
          })
        );
      }
      return heatingUnit;
    });
  };

  const deleteUnit = (id) => {
    heatingUnitList.forEach((heatingUnit) => {
      if (heatingUnit.id === id) {
        dispatch(
          userFormDeleteStart({
            step: "stepHeating",
            formId: userForm.formId,
            data: { id },
          })
        );
      }
    });
  };

  return (
    <div className="flex flex-col w-[80%] items-center h-2/3 animate-fadeIn max-w-[600px] pb-6 pt-8 bg-white rounded-3xl min-h-[600px]">
      {formStep < 7 && (
        <StepButton
          orientation="right"
          setFormStep={setFormStep}
          formStep={formStep}
        />
      )}
      <p className="mb-16 text-[24px] text-center">
        Does your company burn materials?
      </p>
      {heatingUnitList.length === 0 && (
        <>
          <p className="mb-16 text-[24px]">If so, add them below</p>
          <div className="animate-bounce flex justify-center items-center">
            <NavigationIcon sx={{ transform: "rotate(180deg)" }} />
          </div>
        </>
      )}
      <div className=" overflow-y-auto flex flex-col w-full items-center">
        {heatingUnitList.map((unit, index) => (
          <FormBurningSelect
            key={unit.id}
            id={unit.id}
            selectLabel="Material"
            unitLabel="Amount"
            topLabel="Select a heating material from the list below:"
            updateUnit={updateUnit}
            deleteUnit={deleteUnit}
            unitList={formStatistics.burningValues}
            heatingUnit={unit}
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

export default StepBurning;
