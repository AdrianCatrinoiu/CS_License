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
  stepUploadDocuments: [],
  adminBadge: "",
  emissionBadge: "",
};

const userEmissionsInitialState = {
  electricity: { CO2: 0 },
  heating: { CO2: 0, CH4: 0, N2O: 0 },
  waste: { CO2: 0, CH4: 0, N2O: 0 },
  refrigerants: { CO2: 0 },
  transportation: { CO2: 0, CH4: 0, N2O: 0 },
};

const rankingsInitialState = {
  filters: "",
  rankings: [],
};

const INITIAL_STATE = {
  user: null,
  userErr: "",
  userForm: userFormInitialState,
  emissions: userEmissionsInitialState,
  emissionsList: [],
  rankings: rankingsInitialState,
  formsList: [],
  formStatistics: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        userErr: "",
        userForm: action.payload.formData,
        emissionsList: action.payload.emissionsList,
      };
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        formStatistics: {
          ...state.formStatistics,
        },
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
      if (action.payload.updateData.step === "stepYear") {
        return {
          ...state,
          userForm: {
            ...userFormInitialState,
            formId: action.payload.formId,
            [action.payload.updateData.step]: action.payload.updateData.data,
          },
          user: {
            ...state.user,
            userFormYears: [
              ...state.user.userFormYears,
              action.payload.updateData.data,
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
    //if emissions in emissionsList found, update, else add
    case userTypes.USER_FORM_CALCULATE_SUCCESS:
      const isEmissionFound = state.emissionsList.find(
        (item) => item.formId === action.payload.formId
      );
      if (isEmissionFound) {
        return {
          ...state,
          emissionsList: [
            ...state.emissionsList.map((item) => {
              if (item.formId === action.payload.formId) {
                return {
                  formId: item.formId,
                  year: item.year,
                  adminBadge: action.payload.adminBadge,
                  emissionBadge: action.payload.emissionBadge,
                  emissions: action.payload.emissions,
                };
              }
              return item;
            }),
          ],
        };
      } else {
        return {
          ...state,
          emissionsList: [
            ...state.emissionsList,
            {
              formId: action.payload.formId,
              year: action.payload.year,
              adminBadge: action.payload.adminBadge,
              emissionBadge: action.payload.emissionBadge,
              emissions: action.payload.emissions,
            },
          ],
        };
      }

    case userTypes.USER_FORM_RANKINGS_SUCCESS:
      return {
        ...state,
        rankings: {
          filters: action.payload.filters,
          rankings: action.payload.rankings,
        },
      };

    case userTypes.USER_FORM_UPLOAD_DOCUMENTS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          userForm: {
            ...state.user.userForm,
            stepUploadDocuments: [
              ...state.userForm.stepUploadDocuments.map((unit) => {
                if (unit.id === action.payload.uploadData.id) {
                  return {
                    ...unit,
                    step: action.payload.uploadData.step,
                    file: action.payload.uploadData.file.name,
                  };
                }
                return unit;
              }),
            ],
          },
        },
      };
    case userTypes.ADMIN_GET_ALL_FORMS_SUCCESS:
      return {
        ...state,
        formsList: action.payload.allFormsData,
      };

    case userTypes.ADMIN_SUBMIT_DOCUMENT_VERDICT_SUCCESS:
      return {
        ...state,
        formsList: state.formsList.map((item) => {
          if (item.id === action.payload.formId) {
            return {
              ...item,
              documentVerdict: action.payload.verdict,
            };
          }
          return item;
        }),
      };

    case userTypes.USER_GET_EMISSIONS_LIST_SUCCESS:
      return {
        ...state,
        emissionsList: action.payload.emissionsList,
      };

    case userTypes.SHARE_FORM_SUCCESS:
      return {
        ...state,
        shareData: action.payload.formData,
      };
    case userTypes.GET_FORM_STATISTICS_SUCCESS:
      return {
        ...state,
        formStatistics: action.payload.formStatistics,
      };
    default:
      return state;
  }
};

export default userReducer;
