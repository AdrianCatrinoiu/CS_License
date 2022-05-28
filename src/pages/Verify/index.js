import React from "react";
import CompareData from "../../components/CompareData";
import WithAdminAuth from "../../hoc/withAdminAuth";
import VerifyLayout from "../../layouts/VerifyLayout";

const Verify = () => {
  return (
    <WithAdminAuth>
      <VerifyLayout>
        <div className=" h-[calc(100vh-7rem)] w-full ">
          <CompareData />
        </div>
      </VerifyLayout>
    </WithAdminAuth>
  );
};

export default Verify;
