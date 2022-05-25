import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userFormUpdateStart } from "../../redux/User/user.actions";

const FormYear = ({ year }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to="/form"
      onClick={() =>
        dispatch(
          userFormUpdateStart({
            step: "stepYear",
            data: year,
          })
        )
      }
    >
      <div className="flex flex-row items-center justify-center my-8 rounded-3xl bg-[#7bee64] shadow-2xl w-[10%] min-w-[70px]">
        <p>{year}</p>
      </div>
    </Link>
  );
};

export default FormYear;
