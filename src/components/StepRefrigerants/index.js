import React, { useEffect, useRef, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import refrigerantsUnits from "../../utils/constants/refrigerantsUnits.json";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  userFormAddStart,
  userFormDeleteStart,
  userFormUpdateStart,
} from "../../redux/User/user.actions";
import FormRefrigerantSelect from "../../forms/FormRefrigerantSelect";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});

const StepRefrigerants = ({ userId }) => {
  const { userForm } = useSelector(mapState);
  const [refrigerantsList, setRefrigerantsList] = useState(
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
    setRefrigerantsList(userForm.stepRefrigerants);
  }, [userForm.stepRefrigerants]);

  const addUnit = () => {
    dispatch(
      userFormAddStart({
        step: "stepRefrigerants",
        formId: userForm.formId,
        data: {
          label: "",
          kgBegin: 0,
          kgEnd: 0,
          formula: "",
        },
      })
    );
    setTimeout(() => {
      scrollToBottom();
    }, 300);
  };

  const updateUnit = (id, label, kgBegin, kgEnd, formula) => {
    dispatch(
      userFormUpdateStart({
        step: "stepRefrigerants",
        formId: userForm.formId,
        data: {
          id,
          label,
          kgBegin: parseFloat(kgBegin),
          kgEnd: parseFloat(kgEnd),
          formula,
        },
      })
    );
  };
  const deleteUnit = (id) => {
    refrigerantsList.forEach((refrigerant) => {
      if (refrigerant.id === id) {
        dispatch(
          userFormDeleteStart({
            step: "stepRefrigerants",
            formId: userForm.formId,
            data: { id },
          })
        );
      }
    });
  };
  return (
    <div className="flex flex-col w-[80%] items-center h-2/3 animate-fadeIn max-w-[600px] pb-6 pt-8 bg-white rounded-3xl min-h-[600px]">
      <p className="mb-16 text-[24px] text-center">
        Does your company use refrigerants?
      </p>
      <p className="mb-12 text-[24px] text-center">
        Input the amount of refrigerant in all storage/devices at the begining
        and at the end of the year accordingly.
      </p>

      {refrigerantsList.length === 0 && (
        <div className="animate-bounce flex justify-center items-center">
          <NavigationIcon sx={{ transform: "rotate(180deg)" }} />
        </div>
      )}
      <div className="overflow-y-auto flex flex-col w-full items-center mb-1">
        {refrigerantsList.map((unit, index) => (
          <FormRefrigerantSelect
            key={unit.id}
            id={unit.id}
            selectLabel="Refrigerant"
            unitLabel="Amount"
            topLabel="Select a refrigerant from the list below:"
            updateUnit={updateUnit}
            deleteUnit={deleteUnit}
            unitList={refrigerantsUnits}
            refrigerant={unit}
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
