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
    console.log("userForm.stepRefrigerants", userForm.stepRefrigerants);
    setRefrigerantsList(userForm.stepRefrigerants);
  }, [userForm.stepRefrigerants]);

  const addUnit = () => {
    dispatch(
      userFormAddStart(userId, {
        step: "stepRefrigerants",
        data: {
          id: new Date().getTime(),
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
    console.log(id, label, kgBegin, kgEnd, formula);
    dispatch(
      userFormUpdateStart(userId, {
        step: "stepRefrigerants",
        data: { id, label, kgBegin, kgEnd, formula },
      })
    );
  };
  const deleteUnit = (id) => {
    setRefrigerantsList(
      refrigerantsList.filter((refrigerantUnit) => {
        return refrigerantUnit.id !== id;
      })
    );
    refrigerantsList.filter((refrigerantUnit) => {
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
      <div className="overflow-scroll flex flex-col w-full items-center mb-1">
        {refrigerantsList.map((unit, index) => (
          <FormRefrigerantSelect
            key={unit.id}
            id={unit.id}
            selectLabel="Refrigerant"
            unitLabel="Amount"
            label="Select a refrigerant from the list below:"
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
