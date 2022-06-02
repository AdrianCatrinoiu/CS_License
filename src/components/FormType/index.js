import React, { useEffect } from "react";
import StepYear from "../StepYear";
import StepCAEN from "../StepCAEN";
import StepElectricity from "../StepElectricity";
import StepBurning from "../StepBurning";
import StepRefrigerants from "../StepRefrigerants";
import StepTransportation from "../StepTransportation";
import { useDispatch, useSelector } from "react-redux";
import Summary from "../Summary";
import StepButton from "../StepButton";
import StepWaste from "../StepWaste";
import FormStepper from "../../forms/FormStepper";
import StepUploadDocuments from "../StepUploadDocuments";
import { checkUserIsAdmin } from "../../customHooks/useAdminAuth";
import { useNavigate } from "react-router-dom";
import { userGetEmissionsListStart } from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
  user: user.user,
});

const FormType = ({ formStep, setFormStep }) => {
  const { user } = useSelector(mapState);
  const isAdmin = checkUserIsAdmin(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("isAdmin", isAdmin);
    if (isAdmin) {
      navigate("/admin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  useEffect(() => {
    dispatch(userGetEmissionsListStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        <FormStepper formStep={formStep} setFormStep={setFormStep} />
        <div className="flex flex-col items-center w-full h-full max-h-[70%] mt-[50px]">
          {formStep === 0 && (
            <StepYear
              userId={user.id}
              formStep={formStep}
              setFormStep={setFormStep}
            />
          )}
          {formStep === 1 && (
            <StepCAEN
              userId={user.id}
              formStep={formStep}
              setFormStep={setFormStep}
            />
          )}
          {formStep === 2 && (
            <StepElectricity
              userId={user.id}
              formStep={formStep}
              setFormStep={setFormStep}
            />
          )}
          {formStep === 3 && (
            <StepBurning
              userId={user.id}
              formStep={formStep}
              setFormStep={setFormStep}
            />
          )}
          {formStep === 4 && (
            <StepWaste
              userId={user.id}
              formStep={formStep}
              setFormStep={setFormStep}
            />
          )}
          {formStep === 5 && (
            <StepRefrigerants
              userId={user.id}
              formStep={formStep}
              setFormStep={setFormStep}
            />
          )}
          {formStep === 6 && (
            <StepTransportation
              userId={user.id}
              formStep={formStep}
              setFormStep={setFormStep}
            />
          )}
          {formStep === 7 && (
            <StepUploadDocuments
              userId={user.id}
              formStep={formStep}
              setFormStep={setFormStep}
            />
          )}
          {formStep === 8 && (
            <Summary
              userId={user.id}
              formStep={formStep}
              setFormStep={setFormStep}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FormType;
