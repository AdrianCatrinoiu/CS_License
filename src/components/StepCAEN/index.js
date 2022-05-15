import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import BounceDownFadeOut from "../BounceDownFadeOut";
import CAENList from "../../utils/constants/CAENList.json";
import { useDispatch, useSelector } from "react-redux";
import { userFormUpdateStart } from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});

const StepCAEN = ({ userId }) => {
  const { userForm } = useSelector(mapState);
  const [CAEN, setCAEN] = useState(userForm.stepCAEN);

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setCAEN(event.target.value);
    dispatch(
      userFormUpdateStart(userId, {
        step: "stepCAEN",
        data: event.target.value,
      })
    );
  };
  return (
    <div className="flex flex-col w-[80%] justify-center items-center h-2/3  animate-fadeIn">
      <p className="mb-24 text-[24px]">
        Choose your company's field of activity:
      </p>
      <BounceDownFadeOut text="Scroll down for more options" />

      <FormControl
        sx={{
          overflow: "scroll",
          paddingLeft: "20%",
          paddingRight: "20%",
          width: "100%",
        }}
      >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="controlled-radio-buttons-group"
          value={CAEN}
          onChange={handleChange}
        >
          {CAENList.map((CAEN, index) => (
            <FormControlLabel
              key={index}
              value={CAEN.value}
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 24,
                    },
                  }}
                />
              }
              label={CAEN.label}
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: 18,
                },
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default StepCAEN;
