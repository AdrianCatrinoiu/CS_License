import userTypes from "./user.types";

export const emailSignInStartAction = (userCredentials) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccessAction = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START,
});

export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS,
});

export const signUpUserStart = (userCredentials) => ({
  type: userTypes.SIGN_UP_USER_START,
  payload: userCredentials,
});

export const userError = (err) => ({
  type: userTypes.USER_ERROR,
  payload: err,
});
export const userFormAddStart = (addData) => ({
  type: userTypes.USER_FORM_ADD_START,
  payload: { addData },
});
export const userFormAddSuccess = (formId, addData) => ({
  type: userTypes.USER_FORM_ADD_SUCCESS,
  payload: { formId, addData },
});
export const userFormUpdateStart = (updateData) => ({
  type: userTypes.USER_FORM_UPDATE_START,
  payload: { updateData },
});
export const userFormUpdateSuccess = (formId, updateData) => ({
  type: userTypes.USER_FORM_UPDATE_SUCCESS,
  payload: { formId, updateData },
});
export const userFormDeleteStart = (deleteData) => ({
  type: userTypes.USER_FORM_DELETE_START,
  payload: { deleteData },
});
export const userFormDeleteSuccess = (formId, deleteData) => ({
  type: userTypes.USER_FORM_DELETE_SUCCESS,
  payload: { formId, deleteData },
});
export const userFormCalculateStart = (formData) => ({
  type: userTypes.USER_FORM_CALCULATE_START,
  payload: { formData },
});
export const userFormCalculateSuccess = (emissions, formId, year) => ({
  type: userTypes.USER_FORM_CALCULATE_SUCCESS,
  payload: { emissions, formId, year },
});
export const userFormDataUpdate = (formData) => ({
  type: userTypes.USER_FORMDATA_UPDATE,
  payload: { formData },
});
export const userFormRankingsStart = (filters) => ({
  type: userTypes.USER_FORM_RANKINGS_START,
  payload: { filters },
});
export const userFormRankingsSuccess = (filters, rankings) => ({
  type: userTypes.USER_FORM_RANKINGS_SUCCESS,
  payload: { filters, rankings },
});
export const userFormUploadDocumentStart = (uploadData) => ({
  type: userTypes.USER_FORM_UPLOAD_DOCUMENTS_START,
  payload: { uploadData },
});
export const userFormUploadDocumentSuccess = (uploadData) => ({
  type: userTypes.USER_FORM_UPLOAD_DOCUMENTS_SUCCESS,
  payload: { uploadData },
});
export const adminGetAllFormsStart = () => ({
  type: userTypes.ADMIN_GET_ALL_FORMS_START,
});
export const adminGetAllFormsSuccess = (allFormsData) => ({
  type: userTypes.ADMIN_GET_ALL_FORMS_SUCCESS,
  payload: { allFormsData },
});
export const adminSubmitDocumentVerdictStart = (verdict) => ({
  type: userTypes.ADMIN_SUBMIT_DOCUMENT_VERDICT_START,
  payload: { verdict },
});
export const adminSubmitDocumentVerdicSuccess = (verdict) => ({
  type: userTypes.ADMIN_SUBMIT_DOCUMENT_VERDICT_SUCCESS,
  payload: { verdict },
});
export const userGetEmissionsListStart = () => ({
  type: userTypes.USER_GET_EMISSIONS_LIST_START,
});
export const userGetEmissionsListSuccess = (emissionsList) => ({
  type: userTypes.USER_GET_EMISSIONS_LIST_SUCCESS,
  payload: { emissionsList },
});
export const shareFormStart = (params) => ({
  type: userTypes.SHARE_FORM_START,
  payload: { params },
});
export const shareFormSuccess = (formData) => ({
  type: userTypes.SHARE_FORM_SUCCESS,
  payload: { formData },
});
export const getFormStatisticsStart = () => ({
  type: userTypes.GET_FORM_STATISTICS_START,
});
export const getFormStatisticsSuccess = (formStatistics) => ({
  type: userTypes.GET_FORM_STATISTICS_SUCCESS,
  payload: { formStatistics },
});
