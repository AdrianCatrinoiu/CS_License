import React from "react";
import StepYear from "../StepYear";
import StepCAEN from "../StepCAEN";
import StepElectricity from "../StepElectricity";
import StepHeating from "../StepHeating";
import StepRefrigerants from "../StepRefrigerants";
import StepTransportation from "../StepTransportation";
import { useSelector } from "react-redux";
import Summary from "../Summary";
import StepButton from "../StepButton";
import StepWaste from "../StepWaste";
import FormStepper from "../../forms/FormStepper";

const mapState = ({ user }) => ({
  user: user.user,
});

const FormType = ({ formStep, setFormStep }) => {
  const { user } = useSelector(mapState);

  return (
    <div className=" h-full w-full">
      <div className="h-full flex flex-col">
        {formStep > 0 && (
          <StepButton
            orientation="left"
            setFormStep={setFormStep}
            formStep={formStep}
          />
        )}
        {formStep < 6 && (
          <StepButton
            orientation="right"
            setFormStep={setFormStep}
            formStep={formStep}
          />
        )}

        <FormStepper formStep={formStep} />
        <div className="flex flex-col items-center w-full h-full max-h-[70%] mt-[50px]">
          {formStep === 0 && <StepYear userId={user.id} />}
          {formStep === 1 && <StepCAEN userId={user.id} />}
          {formStep === 2 && <StepElectricity userId={user.id} />}
          {formStep === 3 && <StepHeating userId={user.id} />}
          {formStep === 4 && <StepWaste userId={user.id} />}
          {formStep === 5 && <StepRefrigerants userId={user.id} />}
          {formStep === 6 && (
            <StepTransportation userId={user.id} setFormStep={setFormStep} />
          )}
          {formStep === 7 && <Summary userId={user.id} />}
        </div>
      </div>
    </div>
  );
};

export default FormType;
