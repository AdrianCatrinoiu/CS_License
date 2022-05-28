import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { adminSubmitDocumentVerdictStart } from "../../redux/User/user.actions";
import { useNavigate } from "react-router-dom";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});
const FormAnswers = () => {
  const { userForm } = useSelector(mapState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-full max-h-[calc(100vh-7rem)] flex flex-col divide-y-2 overflow-y-auto">
      <div className="h-full flex flex-col items-center w-full">
        <p className="my-8">Electricity:</p>
        {userForm && userForm.stepElectricity && (
          <div className="h-full flex flex-col items-center w-full">
            <div className="w-[80%] flex flex-col justify-between items-center bg-green-200 rounded-3xl shadow-2xl p-4 mb-24">
              <div className="w-[80%] flex flex-row justify-between">
                <p className="text-[24px] font-MontserratBold text-gray-500">
                  Non renewable electricity:
                </p>
                <div className="flex flex-row items-center">
                  <p>{userForm.stepElectricity.nonRenewableAmount}</p>
                  <p className="ml-4">Mwh</p>
                </div>
              </div>
            </div>
            <div className="w-[80%] flex flex-col justify-between items-center bg-green-200 rounded-3xl shadow-2xl p-4 mb-24">
              <div className="w-[80%] flex flex-row justify-between items-center">
                <p className="text-[24px] font-MontserratBold text-gray-500">
                  Renewable electricity:
                </p>
                <div className="flex flex-row items-center">
                  <p>{userForm.stepElectricity.renewableAmount}</p>
                  <p className="ml-4">Mwh</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="h-full flex flex-col items-center">
        <p className="my-8">Burning:</p>
        {userForm &&
          userForm.stepHeating &&
          userForm.stepHeating.map((item, index) => (
            <div
              key={index}
              className="w-[80%] flex flex-col justify-between items-center bg-green-200 rounded-3xl shadow-2xl p-4 mb-24"
            >
              <div className="w-[80%] flex flex-row justify-between items-center divide-x-2 divide-gray-500">
                <p className="text-[24px] w-full font-MontserratBold text-gray-500">
                  {item.label}
                </p>
                <div className="flex flex-col self-stretch w-full justify-center items-center">
                  <p>Quantity:</p>
                  <div className="flex flex-row items-center ">
                    <p>{item.value}</p>
                    <p className="ml-4">{item.unit}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="h-full flex flex-col items-center">
        <p className="my-8">Waste:</p>
        {userForm &&
          userForm.stepWaste &&
          userForm.stepWaste.map((item, index) => (
            <div
              key={index}
              className="w-[80%] flex flex-col justify-between items-center bg-green-200 rounded-3xl shadow-2xl p-4 mb-24"
            >
              <div className="h-full  w-[80%] flex flex-row justify-between items-center divide-x-2 divide-gray-500">
                <p className="text-[24px] w-full font-MontserratBold text-gray-500">
                  {item.label}
                </p>
                <div className="flex flex-col self-stretch w-full justify-center items-center">
                  <p>Quantity:</p>
                  <div className="flex flex-row items-center ">
                    <p>{item.value}</p>
                    <p className="ml-4">tonnes</p>
                  </div>
                </div>

                <div className="flex flex-col self-stretch w-full justify-center items-center">
                  <p>Handling:</p>
                  <p className="ml-4">{item.type}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="h-full flex flex-col items-center">
        <p className="my-8">Refrigerants at the start and end of the year:</p>
        {userForm &&
          userForm.stepRefrigerants &&
          userForm.stepRefrigerants.map((item, index) => (
            <div
              key={index}
              className="w-[80%] flex flex-col justify-between items-center bg-green-200 rounded-3xl shadow-2xl p-4 mb-24"
            >
              <div className="w-[80%] flex flex-row justify-between items-center  divide-x-2 divide-gray-500">
                <p className="text-[24px] w-full text-center font-MontserratBold text-gray-500">
                  {item.label}
                </p>
                <div className="flex flex-col self-stretch w-full justify-center items-center">
                  <p className=" text-center">Formula</p>
                  <p>{item.formula}</p>
                </div>
                <div className="flex flex-col self-stretch w-full justify-center items-center">
                  <p className="text-center">Start</p>

                  <div className="flex flex-row items-center">
                    <p>{item.kgBegin}</p>
                    <p className="">kg</p>
                  </div>
                </div>
                <div className="flex flex-col self-stretch w-full justify-center items-center">
                  <p className="text-center">End</p>
                  <div className="flex flex-row items-center">
                    <p>{item.kgEnd}</p>
                    <p className="">kg</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="h-full flex flex-col items-center">
        <p className="my-8">Transportation:</p>
        {userForm &&
          userForm.stepTransportation &&
          userForm.stepTransportation.map((item, index) => (
            <div
              key={index}
              className="w-[80%] flex flex-col justify-between items-center bg-green-200 rounded-3xl shadow-2xl p-4 mb-24"
            >
              <div className="w-[90%] flex flex-row items-center divide-x-2 divide-gray-500">
                <p className="text-[24px] self-stretch w-full font-MontserratBold text-gray-500">
                  {item.label}
                </p>

                <div className="flex flex-col self-stretch w-full justify-center items-center">
                  <div className="flex flex-col items-center">
                    <p className=" text-center">Nr. of Vehicles</p>
                    <p>{item.vehicleNr}</p>
                  </div>
                </div>

                <div className="flex flex-col self-stretch w-full justify-center items-center">
                  <p className=" text-center">Fuel used</p>

                  <div className="text-center w-full">
                    <p>{item.fuelUsed}</p>
                    <p className="">{item.fuelUnit}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="my-8 flex flex-col">
          <Button
            style={{ fontSize: "24px" }}
            color="success"
            variant="contained"
            onClick={() => {
              dispatch(
                adminSubmitDocumentVerdictStart({
                  formId: userForm.formId,
                  verdict: "verified",
                })
              );
              navigate("/admin");
            }}
          >
            Submit documents confirmation
          </Button>
          <Button
            style={{ fontSize: "24px", marginTop: "24px" }}
            color="error"
            variant="contained"
            onClick={() => {
              dispatch(
                adminSubmitDocumentVerdictStart({
                  formId: userForm.formId,
                  verdict: "rejected",
                })
              );
              navigate("/admin");
            }}
          >
            Submit documents decline
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormAnswers;
