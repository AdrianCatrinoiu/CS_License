import React from "react";
import { useSelector } from "react-redux";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const mapState = ({ user }) => ({
  userForm: user.userForm,
});
const FormDocuments = () => {
  const { userForm } = useSelector(mapState);
  const documents = userForm.stepUploadDocuments.map((item) => ({
    uri: `${process.env.REACT_APP_BASE_URL}/uploads/${item.file}`,
  }));

  return (
    <div className="w-full h-full flex flex-col justify-evenly">
      {documents.length > 0 ? (
        <DocViewer
          className="w-full h-full"
          pluginRenderers={DocViewerRenderers}
          documents={documents}
        />
      ) : (
        <div className="flex items-center justify-center">
          <p>No documents uploaded</p>
        </div>
      )}
    </div>
  );
};

export default FormDocuments;
