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
export const userFormCalculateSuccess = (emissions) => ({
  type: userTypes.USER_FORM_CALCULATE_SUCCESS,
  payload: { emissions },
});
