import userTypes from "./user.types";
import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  adminGetAllFormsSuccess,
  adminSubmitDocumentVerdicSuccess,
  shareFormSuccess,
  signInSuccessAction,
  signOutUserSuccess,
  userError,
  userFormAddSuccess,
  userFormCalculateSuccess,
  userFormDataUpdate,
  userFormDeleteSuccess,
  userFormRankingsSuccess,
  userFormUpdateSuccess,
  userFormUploadDocumentSuccess,
  userGetEmissionsListSuccess,
} from "./user.actions";
import { axiosCall, axiosCallUpload } from "../../api-routes/utils";

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
    console.log("1");
    yield put(signOutUserSuccess());
    console.log("2");
    localStorage.setItem("accessToken", null);
  } catch (err) {
    console.log(err);
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({
  payload: { companyName, email, password, confirmPassword },
}) {
  if (!companyName || !email || !password || !confirmPassword) {
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
      data: { email, password, companyName },
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
      yield put(
        userFormCalculateSuccess(data.data, formData.formId, formData.stepYear)
      );
    }
  } catch (e) {}
}

export function* userFormCalculateStart() {
  yield takeLatest(userTypes.USER_FORM_CALCULATE_START, userFormCalculate);
}

export function* userFormRankings({ payload: { filters } }) {
  try {
    const token = localStorage.getItem("accessToken");
    const data = yield call(axiosCall, {
      method: "POST",
      path: "/form/rankings",
      token: token,
      data: { filters },
    });

    if (data.status === 200) {
      yield put(userFormRankingsSuccess(filters, data.data));
    }
  } catch (e) {}
}

export function* userFormRankingsStart() {
  yield takeLatest(userTypes.USER_FORM_RANKINGS_START, userFormRankings);
}

export function* userUploadDocuments({ payload: { uploadData } }) {
  try {
    const token = localStorage.getItem("accessToken");
    const data = yield call(axiosCallUpload, {
      method: "POST",
      path: "/form/uploadDocuments",
      token: token,
      data: uploadData,
    });

    if (data.status === 200) {
      yield put(
        userFormUploadDocumentSuccess({
          ...data.data,
          step: uploadData.get("step"),
          file: uploadData.get("file"),
        })
      );
    }
  } catch (e) {}
}

export function* userFormUploadDocumentStart() {
  yield takeLatest(
    userTypes.USER_FORM_UPLOAD_DOCUMENTS_START,
    userUploadDocuments
  );
}

export function* adminGetAllForms() {
  try {
    const token = localStorage.getItem("accessToken");
    const data = yield call(axiosCall, {
      method: "GET",
      path: "/form/getForms",
      token: token,
    });

    if (data.status === 200) {
      yield put(adminGetAllFormsSuccess(data.data));
    }
  } catch (e) {}
}

export function* adminGetAllFormsStart() {
  yield takeLatest(userTypes.ADMIN_GET_ALL_FORMS_START, adminGetAllForms);
}

export function* adminSubmitDocumentVerdict({ payload: { verdict } }) {
  try {
    const token = localStorage.getItem("accessToken");
    const data = yield call(axiosCall, {
      method: "POST",
      path: "/form/verifyDocuments",
      token: token,
      data: { verdict },
    });

    if (data.status === 200) {
      yield put(adminSubmitDocumentVerdicSuccess(data.data));
    }
  } catch (e) {}
}

export function* adminSubmitDocumentVerdictStart() {
  yield takeLatest(
    userTypes.ADMIN_SUBMIT_DOCUMENT_VERDICT_START,
    adminSubmitDocumentVerdict
  );
}

export function* userGetAllEmissionsList() {
  try {
    const token = localStorage.getItem("accessToken");
    const data = yield call(axiosCall, {
      method: "GET",
      path: "/form/getEmissionsList",
      token: token,
    });

    if (data.status === 200) {
      yield put(userGetEmissionsListSuccess(data.data));
    }
  } catch (e) {}
}

export function* userGetEmissionsListStart() {
  yield takeLatest(
    userTypes.USER_GET_EMISSIONS_LIST_START,
    userGetAllEmissionsList
  );
}

export function* shareForm({ payload: { params } }) {
  try {
    const token = localStorage.getItem("accessToken");
    console.log("params", params);

    const data = yield call(axiosCall, {
      method: "GET",
      path: `/form/share/${params.formUuid}`,
      token: token,
    });
    console.log("Data", data);
    if (data.status === 200) {
      yield put(shareFormSuccess(data.data));
    }
  } catch (e) {}
}

export function* shareFormStart() {
  yield takeLatest(userTypes.SHARE_FORM_START, shareForm);
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
    call(userFormRankingsStart),
    call(userFormUploadDocumentStart),
    call(adminGetAllFormsStart),
    call(adminSubmitDocumentVerdictStart),
    call(userGetEmissionsListStart),
    call(shareFormStart),
  ]);
}
