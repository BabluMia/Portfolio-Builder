import * as Types from "../types/Types";
const initialState = {
  loginInput: {
    email: "",
    password: "",
  },
  afterSignInData: false,
  loginMessage: "",
};
const LogInReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.INPUT_LOGIN_VALUE:
      const loginInput = { ...state.loginInput };
      loginInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        loginInput: loginInput,
      };
    case Types.AFTER_LOGIN_DATA:
      return {
        ...state,
        afterSignInData: action.payload,
      };
      case Types.SET_LOGIN_FALSE:
        return {
          ...state,
          afterSignInData: action.payload,
          loginInput: initialState.loginInput,
        };
      case Types.LOGIN_MESSAGE:
        return {
          ...state,
          loginMessage: action.payload,
        };

    default:
      break;
  }
  return newState;
};
export default LogInReducer;
