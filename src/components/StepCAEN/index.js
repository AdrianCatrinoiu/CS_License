import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import BounceDownFadeOut from "../BounceDownFadeOut";
import CAENList from "../../utils/constants/CAENList.json";
import { useDispatch, useSelector } from "react-redux";
import { userFormUpdateStart } from "../../redux/User/user.actions";
import StepButton from "../StepButton";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});

const StepCAEN = ({ userId, formStep, setFormStep }) => {
  const { userForm } = useSelector(mapState);
  const [CAEN, setCAEN] = useState(userForm.stepCAEN);

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setCAEN(event.target.value);
    dispatch(
      userFormUpdateStart({
        step: "stepCAEN",
        formId: userForm.formId,
        data: event.target.value,
      })
    );
  };
  return (
    <div className="flex flex-col max-w-[600px] items-center h-2/3 animate-fadeIn pb-24 pt-8 bg-white rounded-3xl min-h-[600px]">
      {formStep < 7 && (
        <StepButton
          orientation="right"
          setFormStep={setFormStep}
          formStep={formStep}
          isDisabled={!CAEN}
        />
      )}
      <p className="mb-12 text-[24px] text-center">
        Choose your company's field of activity:
      </p>
      <BounceDownFadeOut text="Scroll down for more options" />

      <FormControl
        sx={{
          overflow: "auto",
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
                  marginY: "8px",
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
