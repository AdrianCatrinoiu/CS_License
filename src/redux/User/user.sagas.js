import userTypes from "./user.types";
import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  signInSuccessAction,
  signOutUserSuccess,
  userError,
  userFormAddSuccess,
  userFormCalculateSuccess,
  userFormDataUpdate,
  userFormDeleteSuccess,
  userFormUpdateSuccess,
} from "./user.actions";
import { axiosCall } from "../../api-routes/utils";

export function* emailSignIn({ payload: { email, password } }) {
  try {
    //setState pt login -- yield sign in
    const data = yield call(axiosCall, {
      method: "POST",
      path: "/auth/login",
      data: { email, password },
    });
    if (data.status === 200) {
      localStorage.setItem("accessToken", data.data.accessToken);
      yield put(
        signInSuccessAction({
          ...data.data,
        })
      );
    }
  } catch (err) {
    yield put(userError(err.response.data.message));
  }
}

export function* onEmailSignInStart() {
  //listening for the email_sign_in_start action
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
  try {
    const check = localStorage.getItem("accessToken");
    if (!check) return;

    yield;
  } catch (err) {
    console.error(err);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
  try {
    yield put(signOutUserSuccess());
    localStorage.setItem("accessToken", null);
  } catch (err) {
    console.error(err);
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({
  payload: { firstName, lastName, email, password, confirmPassword },
}) {
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    yield put(userError("Please fill in all fields"));
    return;
  }
  if (password !== confirmPassword) {
    const err = ["Passwords do not match!"];
    yield put(userError(err));
    return;
  }
  try {
    const data = yield call(axiosCall, {
      method: "POST",
      path: "/auth/register",
      data: { email, password, firstName, lastName },
    });
    if (data.status === 201) {
      yield put(
        signInSuccessAction({
          ...data.data,
        })
      );
      localStorage.setItem("accessToken", data.data.accessToken);
    }
  } catch (e) {
    yield put(userError(e.response.data.message));
  }
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export function* userFormAdd({ payload: { addData } }) {
  try {
    const token = localStorage.getItem("accessToken");

    const data = yield call(axiosCall, {
      method: "POST",
      path: "/form/add",
      token: token,
      data: { data: addData },
    });
    if (data.status === 201) {
      yield put(
        userFormAddSuccess(data.data.formId, {
          ...addData,
          data: { ...addData.data, id: data.data.id },
        })
      );
    } else {
      yield put(userError(data.data.message));
    }
  } catch (e) {}
}

export function* userFormAddStart() {
  yield takeLatest(userTypes.USER_FORM_ADD_START, userFormAdd);
}

export function* userFormUpdate({ payload: { updateData } }) {
  try {
    const token = localStorage.getItem("accessToken");
    const data = yield call(axiosCall, {
      method: "PUT",
      path: "/form/update",
      token: token,

      data: { data: updateData },
    });
    if (data.status === 200) {
      if (updateData.step === "stepCAEN" || updateData.step === "stepYear") {
        yield put(userFormUpdateSuccess(data.data.formId, updateData));
      } else {
        yield put(
          userFormUpdateSuccess(data.data.formId, {
            ...updateData,
            data: { ...updateData.data, ...data.data.emissions },
          })
        );
      }
    }
    if (data.status === 201) {
      yield put(userFormDataUpdate(data.data));
    }
  } catch (e) {}
}

export function* userFormUpdateStart() {
  yield takeLatest(userTypes.USER_FORM_UPDATE_START, userFormUpdate);
}

export function* userFormDelete({ payload: { deleteData } }) {
  try {
    const token = localStorage.getItem("accessToken");

    const data = yield call(axiosCall, {
      method: "DELETE",
      path: "/form/delete",
      token: token,

      data: { data: deleteData },
    });
    if (data.status === 200) {
      yield put(
        userFormDeleteSuccess(data.data.formId, {
          ...deleteData,
          data: { id: data.data.id },
        })
      );
    }
  } catch (e) {}
}

export function* userFormDeleteStart() {
  yield takeLatest(userTypes.USER_FORM_DELETE_START, userFormDelete);
}

export function* userFormCalculate({ payload: { formData } }) {
  try {
    const token = localStorage.getItem("accessToken");
    const data = yield call(axiosCall, {
      method: "POST",
      path: "/form/calculate",
      token: token,
      data: { data: formData },
    });
    if (data.status === 200) {
      yield put(userFormCalculateSuccess(data.data));
    }
  } catch (e) {}
}

export function* userFormCalculateStart() {
  yield takeLatest(userTypes.USER_FORM_CALCULATE_START, userFormCalculate);
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
    call(userFormAddStart),
    call(userFormUpdateStart),
    call(userFormDeleteStart),
    call(userFormCalculateStart),
  ]);
}
