import userTypes from "./user.types";

const userFormInitialState = {
  stepYear: 0,
  stepCAEN: "",
  stepElectricity: {
    renewable: 0,
    nonRenewable: 0,
    country: "",
  },
  stepHeating: [],
  stepRefrigerants: [],
  stepTransportation: [],
};

const INITIAL_STATE = {
  user: null,
  userErr: [],
  userForm: userFormInitialState,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userErr: [],
        userForm: action.payload.formData,
      };
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case userTypes.USER_ERROR:
      return {
        ...state,
        userErr: action.payload,
      };
    case userTypes.USER_FORM_ADD_SUCCESS:
      if (Array.isArray(state.userForm[action.payload.addData.step])) {
        return {
          ...state,
          userForm: {
            ...state.userForm,
            [action.payload.addData.step]: [
              ...state.userForm[action.payload.addData.step],
              action.payload.addData.data,
            ],
          },
        };
      }
      return {
        ...state,
        userForm: {
          ...state.userForm,
          [action.payload.addData.step]: action.payload.addData.data,
        },
      };
    case userTypes.USER_FORM_UPDATE_SUCCESS:
      if (Array.isArray(state.userForm[action.payload.updateData.step])) {
        return {
          ...state,
          userForm: {
            ...state.userForm,
            [action.payload.updateData.data]: [
              ...state.userForm[action.payload.updateData.step],
              action.payload.updateData.data,
            ],
          },
        };
      }
      return {
        ...state,
        userForm: {
          ...state.userForm,
          [action.payload.updateData.step]: action.payload.updateData.data,
        },
      };

    case userTypes.USER_FORM_DELETE_SUCCESS:
      if (Array.isArray(state.userForm[action.payload.deleteData.step])) {
        return {
          ...state,
          userForm: {
            ...state.userForm,
            [action.payload.deleteData.step]: state.userForm[
              action.payload.deleteData.step
            ].filter((item) => item.id !== action.payload.deleteData.data.id),
          },
        };
      }
      if (action.payload.deleteData.step === "stepElectricity") {
        return {
          ...state,
          userForm: {
            ...state.userForm,
            [action.payload.deleteData.step]:
              action.payload.deleteData.step === {},
          },
        };
      }
      return {
        ...state,
        userForm: {
          ...state.userForm,
          [action.payload.deleteData.step]:
            action.payload.deleteData.step === "stepYear" ? 0 : "",
        },
      };

    default:
      return state;
  }
};

export default userReducer;
