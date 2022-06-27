import React, { useEffect, useRef, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  userFormAddStart,
  userFormCalculateStart,
  userFormDeleteStart,
  userFormUploadDocumentStart,
} from "../../redux/User/user.actions";
import Button from "@mui/material/Button";
import FormDocumentSelect from "../../forms/formDocumentSelect";
import CircularProgress from "@mui/material/CircularProgress";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});

const StepUploadDocuments = ({ setFormStep }) => {
  const { userForm } = useSelector(mapState);
  const [uploadedDocumentsList, setUploadedDocumentsList] = useState(
    userForm.stepUploadDocuments
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  useEffect(() => {
    setUploadedDocumentsList(userForm.stepUploadDocuments);
  }, [userForm.stepUploadDocuments]);

  const addUnit = () => {
    dispatch(
      userFormAddStart({
        step: "stepUploadDocuments",
        formId: userForm.formId,
        data: {
          step: "",
          file: "",
        },
      })
    );
    setTimeout(() => {
      scrollToBottom();
    }, 300);
  };

  const updateUnit = (id, step, file) => {
    const formData = new FormData();
    console.log("id,step,file", id, step, file);
    if (file) {
      console.log("file", file);
      formData.append("file", file);
    }
    if (step) {
      formData.append("step", step);
    }
    formData.append("formId", userForm.formId);

    formData.append("id", id);
    uploadedDocumentsList.map((document) => {
      if (document.id === id && file) {
        dispatch(userFormUploadDocumentStart(formData));
      }
      return document;
    });
  };

  const deleteUnit = (id) => {
    uploadedDocumentsList.forEach((document) => {
      if (document.id === id) {
        dispatch(
          userFormDeleteStart({
            step: "stepUploadDocuments",
            formId: userForm.formId,
            data: { id },
          })
        );
      }
    });
  };

  return (
    <div className="flex flex-col w-[80%] items-center h-2/3 animate-fadeIn max-w-[600px] pb-6 pt-8 bg-white rounded-3xl min-h-[600px]">
      <div className="absolute  flex justify-center items-center  top-1/2 right-[10%] rounded-full bg-gray-200  cursor-pointer  hover:bg-lime-500  duration-300">
        {loading ? (
          <CircularProgress color="success" />
        ) : (
          <Button
            variant="contained"
            color="success"
            className="h-[48px] w-[96px]"
            onClick={() => {
              dispatch(userFormCalculateStart(userForm));
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setFormStep(8);
              }, 1000);
            }}
          >
            Calculate
          </Button>
        )}
      </div>
      <p className="mb-16 text-[24px] text-center">
        Upload relevant documents for each step
      </p>
      {uploadedDocumentsList.length === 0 && (
        <>
          <p className="mb-16 text-[24px]">If so, add them below</p>
          <div className="animate-bounce flex justify-center items-center">
            <NavigationIcon sx={{ transform: "rotate(180deg)" }} />
          </div>
        </>
      )}
      <div className=" overflow-y-auto flex flex-col w-full items-center">
        {uploadedDocumentsList.map((document, index) => (
          <FormDocumentSelect
            key={document.id}
            id={document.id}
            selectLabel="Step"
            topLabel="Select a step for which to upload documents:"
            updateUnit={updateUnit}
            deleteUnit={deleteUnit}
            uploadDocument={document}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="my-8">
        <Fab
          size="medium"
          color="success"
          aria-label="add"
          onClick={() => addUnit()}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default StepUploadDocuments;
