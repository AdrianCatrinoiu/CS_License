import userTypes from "./user.types";
import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  signInSuccessAction,
  signOutUserSuccess,
  userError,
  userFormAddSuccess,
  userFormDeleteSuccess,
  userFormUpdateSuccess,
} from "./user.actions";
import { axiosCall } from "../../api-routes/utils";

export function* emailSignIn({ payload: { email, password } }) {
  try {
    //setState pt login -- yield sign in
    const data = yield call(axiosCall, {
      method: "POST",
      path: "/api/auth/login",
      data: { email, password },
    });

    if (data.status === 200) {
      localStorage.setItem("accessToken", data.data.accessToken);
    }

    yield put(
      signInSuccessAction({
        ...data.data.user,
      })
    );
  } catch (err) {}
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
  payload: { firstName, lastName, email, password, confirmPassword, formData },
}) {
  if (password !== confirmPassword) {
    const err = ["Passwords do not match!"];
    yield put(userError(err));
    return;
  }
  try {
    const data = yield call(axiosCall, {
      method: "POST",
      path: "/api/auth/register",
      data: { email, password, firstName, lastName, formData },
    });

    if (data.status === 201) {
      yield put(
        signInSuccessAction({
          id: data.data.id,
          role: "user",
          ...data.data.user,
        })
      );
      localStorage.setItem("accessToken", data.data.accessToken);
    }
  } catch (e) {}
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export function* userFormAdd({ payload: { userId, addData } }) {
  try {
    const token = localStorage.getItem("accessToken");

    const data = yield call(axiosCall, {
      method: "POST",
      path: "/api/form/add",
      token: token,
      data: { userId, addData },
    });
    if (data.status === 200) {
      yield put(userFormAddSuccess(addData));
    }
  } catch (e) {}
}

export function* userFormAddStart() {
  yield takeLatest(userTypes.USER_FORM_ADD_START, userFormAdd);
}

export function* userFormUpdate({ payload: { userId, updateData } }) {
  try {
    const token = localStorage.getItem("accessToken");
    const data = yield call(axiosCall, {
      method: "PUT",
      path: "/api/form/update",
      token: token,

      data: { userId, updateData },
    });
    if (data.status === 200) {
      yield put(userFormUpdateSuccess(updateData));
    }
  } catch (e) {}
}

export function* userFormUpdateStart() {
  yield takeLatest(userTypes.USER_FORM_UPDATE_START, userFormUpdate);
}

export function* userFormDelete({ payload: { userId, deleteData } }) {
  try {
    const token = localStorage.getItem("accessToken");

    const data = yield call(axiosCall, {
      method: "DELETE",
      path: "/api/form/delete",
      token: token,

      data: { userId, deleteData },
    });
    if (data.status === 200) {
      yield put(userFormDeleteSuccess(deleteData));
    }
  } catch (e) {}
}

export function* userFormDeleteStart() {
  yield takeLatest(userTypes.USER_FORM_DELETE_START, userFormDelete);
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
  ]);
}
