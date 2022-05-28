import React from "react";
import FormAnswers from "../../forms/FormAnswers";
import FormDocuments from "../../forms/FormDocuments";

const CompareData = () => {
  return (
    <div className="w-full h-full flex flex-row justify-between divide-x-2">
      <div className="w-1/2">
        <FormAnswers />
      </div>
      <div className="w-1/2">
        <FormDocuments />
      </div>
    </div>
  );
};

export default CompareData;
