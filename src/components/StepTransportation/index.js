import React, { useEffect, useRef, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import NavigationIcon from "@mui/icons-material/Navigation";
import transportationTypes from "../../utils/constants/transportationTypes.json";
import FormTransportationSelect from "../../forms/FormTransportationSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  userFormAddStart,
  userFormDeleteStart,
  userFormUpdateStart,
} from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});

const StepTransportation = ({ userId }) => {
  const { userForm } = useSelector(mapState);
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
      userFormAddStart(userId, {
        step: "stepTransportation",
        data: {
          id: new Date().getTime(),
          label: "",
          vehicles: 0,
          fuel: 0,
          fuelUnit: "",
          type: "",
        },
      })
    );
    setTimeout(() => {
      scrollToBottom();
    }, 300);
  };

  const updateUnit = (id, vehicleType, vehicles, fuel, fuelUnit, type) => {
    transportationList.map((transportation) => {
      if (transportation.id === id) {
        if (vehicleType === null) {
          console.log("ici");
          dispatch(
            userFormUpdateStart(userId, {
              step: "stepTransportation",
              data: {
                id,
                label: "",
                vehicles: 0,
                fuel: 0,
                fuelUnit: "",
                type: "",
              },
            })
          );
        } else {
          console.log("colo");
          dispatch(
            userFormUpdateStart(userId, {
              step: "stepTransportation",
              data: { id, vehicleType, vehicles, fuel, fuelUnit, type },
            })
          );
        }
      }
      return transportation;
    });
  };

  const deleteUnit = (id) => {
    transportationList.filter((transportation) => {
      dispatch(
        userFormDeleteStart(userId, {
          step: "stepTransportation",
          data: { id },
        })
      );
      return transportation.id !== id;
    });
  };

  return (
    <div className="flex flex-col w-[80%] justify-center items-center h-2/3  animate-fadeIn">
      <p className="mb-16 text-[24px]">
        Choose the transportation types that your company and employees use:
      </p>
      {transportationList.length === 0 && (
        <>
          <div className="animate-bounce flex justify-center items-center">
            <NavigationIcon sx={{ transform: "rotate(180deg)" }} />
          </div>
        </>
      )}
      <div className="overflow-auto scroll-mb-[1200px] max-h-full flex flex-col w-full items-center">
        {transportationList.map((unit, index) => (
          <FormTransportationSelect
            key={unit.id}
            id={unit.id}
            selectLabel="Vehicle Type"
            vehiclesLabel="Number of vehicles"
            fuelLabel="Fuel used per year"
            label="Select a vehicle from the list below:"
            updateUnit={updateUnit}
            deleteUnit={deleteUnit}
            unitList={transportationTypes}
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
