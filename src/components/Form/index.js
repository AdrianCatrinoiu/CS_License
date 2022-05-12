// Form page for carbon emission calculator
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FormType from "../FormType";

const Form = () => {
  const [formStep, setFormStep] = useState(0);
  const { id } = useParams();
  console.log(formStep);
  return (
    <div className="h-[calc(100vh-7rem)] w-full flex justify-center items-center">
      <FormType formStep={formStep} setFormStep={setFormStep} id={id} />
    </div>
  );
};

export default Form;
