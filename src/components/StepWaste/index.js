import React, { useEffect, useRef, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import NavigationIcon from "@mui/icons-material/Navigation";
import wasteUnits from "../../utils/constants/wasteUnits.json";
import { useDispatch, useSelector } from "react-redux";
import {
  userFormAddStart,
  userFormDeleteStart,
  userFormUpdateStart,
} from "../../redux/User/user.actions";
import FormWasteSelect from "../../forms/FormWasteSelect";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});

const StepWaste = ({ userId }) => {
  const { userForm } = useSelector(mapState);
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
        data: { label: "", type: "", value: 0 },
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
            data: { id, label, value: parseFloat(value), type },
          })
        );
      }
      return wasteUnit;
    });
  };

  const deleteUnit = (id) => {
    wasteUnitList.forEach((wasteUnit) => {
      console.log(wasteUnit.id, id);
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
    <div className="flex flex-col w-[80%] items-center h-2/3 animate-fadeIn max-w-[600px] pb-6 pt-8 bg-white rounded-3xl min-h-[600px]">
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
      <div className="overflow-y-auto flex flex-col w-full items-center">
        {wasteUnitList.map((unit, index) => (
          <FormWasteSelect
            key={unit.id}
            id={unit.id}
            selectLabel="Material"
            unitLabel="Amount"
            topLabel="Select a waste material from the list below:"
            updateUnit={updateUnit}
            deleteUnit={deleteUnit}
            unitList={wasteUnits}
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
