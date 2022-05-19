import React from "react";
import Form from "../../components/Form";
import WithAuth from "../../hoc/withAuth";
import MainLayout from "../../layouts/MainLayout";

const FormPage = () => {
  return (
    <WithAuth>
      <MainLayout>
        <div className=" h-[calc(100vh-7rem)] w-full ">
          <Form />
        </div>
      </MainLayout>
    </WithAuth>
  );
};

export default FormPage;
