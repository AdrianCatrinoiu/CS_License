import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userFormDataUpdate } from "../../redux/User/user.actions";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Denied from "../../assets/denied.svg";
import Verified from "../../assets/verified.svg";

const FormVerify = ({ form }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/form/verify/${form.formData.formId}`}
      onClick={() => dispatch(userFormDataUpdate(form.formData))}
    >
      <div className="w-full px-8 rounded-3xl bg-green-200 shadow-2xl p-4 flex flex-row items-center justify-between">
        <div className="flex flex-col items-center justify-center my-8  w-[10%] min-w-[70px] ">
          <p>{form.formData.stepYear}</p>
          <ArrowForwardIcon />
        </div>
        <p>{form.user.companyName}</p>
        {/* <div className="w-1/2 ml-8 h-full bg-white rounded-2xl shadow-2xl animate-fadeIn"></div> */}
        <div className="flex flex-col items-center">
          <p className="text-center">Document status:</p>

          {form.formData.adminBadge === "verified" && (
            <div>
              <img className="h-[100px]" src={Verified} alt="Verified" />
            </div>
          )}
          {form.formData.adminBadge === "rejected" && (
            <div>
              <img className="h-[100px]" src={Denied} alt="Denied" />
            </div>
          )}
          {form.formData.adminBadge !== "rejected" &&
            form.formData.adminBadge !== "verified" && (
              <div>
                <p className="text-center">Pending approval</p>
              </div>
            )}
        </div>
      </div>
    </Link>
  );
};

export default FormVerify;
