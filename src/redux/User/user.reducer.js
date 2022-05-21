import userTypes from "./user.types";

const userFormInitialState = {
  formId: null,
  stepYear: 0,
  stepCAEN: "",
  stepElectricity: {
    renewableAmount: 0,
    nonRenewableAmount: 0,
    country: "",
    emissionsAmountCO2: 0,
  },
  stepHeating: [],
  stepWaste: [],
  stepRefrigerants: [],
  stepTransportation: [],
};

const userEmissionsInitialState = {
  electricity: { CO2: 0 },
  heating: { CO2: 0, CH4: 0, N2O: 0 },
  waste: { CO2: 0, CH4: 0, N2O: 0 },
  refrigerants: { CO2: 0 },
  transportation: { CO2: 0, CH4: 0, N2O: 0 },
};

const INITIAL_STATE = {
  user: null,
  userErr: "",
  userForm: userFormInitialState,
  emissions: userEmissionsInitialState,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        userErr: "",
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
            [action.payload.updateData.step]: [
              ...state.userForm[action.payload.updateData.step].map((unit) => {
                if (unit.id === action.payload.updateData.data.id) {
                  return action.payload.updateData.data;
                }
                return unit;
              }),
            ],
          },
        };
      }
      return {
        ...state,
        userForm: {
          ...state.userForm,
          formId: action.payload.formId,
          [action.payload.updateData.step]: action.payload.updateData.data,
        },
      };
    case userTypes.USER_FORMDATA_UPDATE:
      return {
        ...state,
        userForm: {
          ...action.payload.formData,
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

    case userTypes.USER_FORM_CALCULATE_SUCCESS:
      return {
        ...state,
        emissions: action.payload.emissions,
      };

    default:
      return state;
  }
};

export default userReducer;
