import React, { useEffect, useRef, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  userFormAddStart,
  userFormDeleteStart,
  userFormUpdateStart,
} from "../../redux/User/user.actions";
import FormWasteSelect from "../../forms/FormWasteSelect";
import StepButton from "../StepButton";

const mapState = ({ user }) => ({
  userForm: user.userForm,
  formStatistics: user.formStatistics,
});

const StepWaste = ({ userId, formStep, setFormStep }) => {
  const { userForm, formStatistics } = useSelector(mapState);
  const [wasteUnitList, setWasteUnitList] = useState(userForm.stepWaste);
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
    setWasteUnitList(userForm.stepWaste);
  }, [userForm.stepWaste]);

  const addUnit = () => {
    dispatch(
      userFormAddStart({
        step: "stepWaste",
        formId: userForm.formId,
        data: { label: "", type: "", value: null },
      })
    );
    setTimeout(() => {
      scrollToBottom();
    }, 300);
  };

  const updateUnit = (id, label, value, type) => {
    wasteUnitList.map((wasteUnit) => {
      if (wasteUnit.id === id) {
        dispatch(
          userFormUpdateStart({
            step: "stepWaste",
            formId: userForm.formId,
            data: { id, label, value: value ? parseFloat(value) : null, type },
          })
        );
      }
      return wasteUnit;
    });
  };

  const deleteUnit = (id) => {
    wasteUnitList.forEach((wasteUnit) => {
      if (wasteUnit.id === id) {
        dispatch(
          userFormDeleteStart({
            step: "stepWaste",
            formId: userForm.formId,
            data: { id },
          })
        );
      }
    });
  };

  useEffect(() => {}, [wasteUnitList]);

  return (
    <div className="flex flex-col w-[80%] items-center h-2/3 animate-fadeIn max-w-[600px] pb-6 pt-8 bg-white rounded-3xl min-h-[601px]">
      {formStep < 7 && (
        <StepButton
          orientation="right"
          setFormStep={setFormStep}
          formStep={formStep}
        />
      )}
      <p className="mb-16 text-[24px] text-center">
        Does your company generate waste?
      </p>
      {wasteUnitList.length === 0 && (
        <>
          <p className="mb-16 text-[24px]">If so, add it below</p>
          <div className="animate-bounce flex justify-center items-center">
            <NavigationIcon sx={{ transform: "rotate(180deg)" }} />
          </div>
        </>
      )}
      <div className="overflow-y-auto flex flex-col w-full items-center max-h-[509px]">
        {wasteUnitList.map((unit, index) => (
          <FormWasteSelect
            key={unit.id}
            id={unit.id}
            selectLabel="Material"
            unitLabel="Amount"
            topLabel="Select a waste material from the list below:"
            updateUnit={updateUnit}
            deleteUnit={deleteUnit}
            unitList={formStatistics.wasteValues}
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

export default StepWaste;
