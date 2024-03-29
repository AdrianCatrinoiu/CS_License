import React, { useEffect, useRef, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import NavigationIcon from "@mui/icons-material/Navigation";
import FormTransportationSelect from "../../forms/FormTransportationSelect";
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

const StepTransportation = ({ setFormStep, formStep }) => {
  const { userForm, formStatistics } = useSelector(mapState);
  const [transportationList, setTransportationList] = useState(
    userForm.stepTransportation
  );
  const dispatch = useDispatch();

  const messagesEndRef = useRef();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  useEffect(() => {
    setTransportationList(userForm.stepTransportation);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userForm.stepTransportation]);

  const addUnit = () => {
    dispatch(
      userFormAddStart({
        step: "stepTransportation",
        formId: userForm.formId,
        data: {
          label: "",
          vehicleNr: null,
          fuelUsed: null,
          fuelUnit: "",
        },
      })
    );
    setTimeout(() => {
      scrollToBottom();
    }, 300);
  };

  const updateUnit = (id, label, vehicleNr, fuelUsed, fuelUnit) => {
    transportationList.map((transportation) => {
      if (transportation.id === id) {
        if (label === null) {
          dispatch(
            userFormUpdateStart({
              step: "stepTransportation",
              formId: userForm.formId,
              data: {
                id,
                label: "",
                vehicles: null,
                fuelUsed: null,
                fuelUnit: "",
              },
            })
          );
        } else if (vehicleNr !== null && fuelUsed !== null) {
          dispatch(
            userFormUpdateStart({
              step: "stepTransportation",
              formId: userForm.formId,
              data: {
                id,
                label,
                vehicleNr: vehicleNr ? parseInt(vehicleNr) : null,
                fuelUsed: fuelUsed ? parseFloat(fuelUsed) : null,
                fuelUnit,
              },
            })
          );
        }
      }

      return transportation;
    });
  };

  const deleteUnit = (id) => {
    transportationList.forEach((transportation) => {
      if (transportation.id === id) {
        dispatch(
          userFormDeleteStart({
            step: "stepTransportation",
            formId: userForm.formId,
            data: { id },
          })
        );
      }
    });
  };

  return (
    <div className="flex flex-col w-[80%] items-center h-2/3  animate-fadeIn  max-w-[600px] pb-6 pt-8 bg-white rounded-3xl min-h-[615px]">
      {formStep < 7 && (
        <StepButton
          orientation="right"
          setFormStep={setFormStep}
          formStep={formStep}
        />
      )}
      <p className="mb-12 text-[24px] text-center">
        Choose the transportation types that your company and employees use:
      </p>

      {transportationList.length === 0 && (
        <>
          <div className="animate-bounce flex justify-center items-center">
            <NavigationIcon sx={{ transform: "rotate(180deg)" }} />
          </div>
        </>
      )}
      <div className="overflow-y-auto scroll-mb-[1200px] flex flex-col w-full items-center max-h-[395px]">
        {transportationList.map((unit, index) => (
          <FormTransportationSelect
            key={unit.id}
            id={unit.id}
            selectLabel="Vehicle Type"
            vehiclesLabel="Number of vehicles"
            fuelLabel="Fuel used per year"
            topLabel="Select a vehicle from the list below:"
            updateUnit={updateUnit}
            deleteUnit={deleteUnit}
            unitList={formStatistics.transportationValues}
            unit={unit}
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

export default StepTransportation;
