import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const stepList = [
  { label: "Electricity", value: "stepElectricity" },
  { label: "Burning", value: "stepHeating" },
  { label: "Waste", value: "stepWaste" },
  { label: "Refrigerants", value: "stepRefrigerants" },
  { label: "Transportation", value: "stepTransportation" },
];

const FormDocumentSelect = ({
  id,
  topLabel,
  selectLabel,
  updateUnit,
  deleteUnit,
  uploadDocument,
}) => {
  const documentLabel = stepList.find(
    (step) => step.value === uploadDocument.step
  );
  const [label, setLabel] = useState(documentLabel ? documentLabel.label : "");
  const [value, setValue] = useState(uploadDocument.value);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState(uploadDocument.file);

  const handleUpdate = () => {
    if (file && value) {
      updateUnit(id, value, file);
    }
  };

  const handleUnitChange = (event, value) => {
    setLabel(value.label);
    setValue(value.value);
    setFile(null);
  };
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  return (
    <div
      onBlur={handleUpdate}
      className="flex flex-col w-[80%]  justify-center items-center my-8"
    >
      <div className="w-[80%] min-w-[200px] px-[24px] border-[1px] border-black border-opacity-[0.23] rounded-[4px]">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="my-6 text-[18px] w-2/3">{topLabel}</p>
          <IconButton
            className="w-16 h-16 self-center"
            onClick={() => deleteUnit(id)}
          >
            <ClearIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="w-full flex flex-col justify-center items-center ">
          <div className="w-full m-[24px]">
            <Autocomplete
              disablePortal
              disableClearable
              id="combo-box-demo"
              options={stepList}
              value={label}
              onChange={handleUnitChange}
              sx={{
                "& .css-1in441m": {
                  fontSize: 12,
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                  label={selectLabel}
                />
              )}
            />
          </div>
          <div className="sm:w-full w-[95%] flex flex-row items-center justify-center mb-8">
            {fileName ? <p>{fileName}</p> : <p>No file selected</p>}
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              className="ml-8"
            >
              <label htmlFor={id}>
                {label && (
                  <Button
                    variant="contained"
                    size="large"
                    component="span"
                    disabled={!label}
                  >
                    Upload
                    <input
                      hidden
                      accept="image/jpeg, image/png, image/jpg, application/pdf, application/msword,
                    application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel,
                    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint,
                    application/vnd.openxmlformats-officedocument.presentationml.presentation"
                      id={id}
                      onChange={onFileChange}
                      type="file"
                    />
                  </Button>
                )}
              </label>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDocumentSelect;
