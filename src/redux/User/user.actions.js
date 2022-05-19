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
export const userFormAddStart = (userId, addData) => ({
  type: userTypes.USER_FORM_ADD_START,
  payload: { userId, addData },
});
export const userFormAddSuccess = (addData) => ({
  type: userTypes.USER_FORM_ADD_SUCCESS,
  payload: { addData },
});
export const userFormUpdateStart = (userId, updateData) => ({
  type: userTypes.USER_FORM_UPDATE_START,
  payload: { userId, updateData },
});
export const userFormUpdateSuccess = (updateData) => ({
  type: userTypes.USER_FORM_UPDATE_SUCCESS,
  payload: { updateData },
});
export const userFormDeleteStart = (userId, deleteData) => ({
  type: userTypes.USER_FORM_DELETE_START,
  payload: { userId, deleteData },
});
export const userFormDeleteSuccess = (deleteData) => ({
  type: userTypes.USER_FORM_DELETE_SUCCESS,
  payload: { deleteData },
});
export const userFormCalculateStart = (userId, formData) => ({
  type: userTypes.USER_FORM_CALCULATE_START,
  payload: { userId, formData },
});
export const userFormCalculateSuccess = (emissions) => ({
  type: userTypes.USER_FORM_CALCULATE_SUCCESS,
  payload: { emissions },
});
