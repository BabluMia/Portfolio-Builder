import * as Types from "../types/Types";
import Axios from "axios";
import { BASE_URL } from "./../../../../Consts/consts";
import { showToast } from "../utils/ToastHelper";


export const SignInData = (postData) => async (dispatch) => {
  if (postData.email.length === 0) {
    showToast("error", "Email shouldn't be empty !");
    return 0;
  } else if (postData.password.length === 0) {
    showToast("error", "Password shouldn't be empty");
    return 0;
  }

  const url = `${BASE_URL}api/v1/auth/login/`;

  try {
    await Axios.post(url, postData)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          localStorage.setItem("is_logged_in", true);
          localStorage.setItem("access_token", res.data.data.token);
          localStorage.setItem("userData", JSON.stringify(res.data.data));
          console.log("res.data", res);
          dispatch({ type: Types.AFTER_LOGIN_DATA, payload: true });
        } else {
        }
      })
      .catch((err) => {
        const message = JSON.parse(err.request.response).message;
        const erroeMsg = JSON.parse(err.request.response).errors;
        for (let value of Object.values(erroeMsg)) {
          showToast("error", value[0]);
        }
        showToast("error", message);
      });
  } catch (error) {}
};
