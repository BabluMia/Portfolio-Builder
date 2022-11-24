import React, { useEffect, useState } from "react";
import "./style.css";
import right_img from "./img/right.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  InputTextValue,
  SetSigninStatusFalse,
  SignInData,
} from "../../_redux/action/LoginAction";

import Lottie from "react-lottie";
import json1 from "../../../../asstes/json_file/json1.json";
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [eye, setEye] = useState(false);
  const loginInput = useSelector((state) => state.logInInfo.loginInput);
  const afterSignInData = useSelector(
    (state) => state.logInInfo.afterSignInData
  );
  
  const handleChangeTextInput = (name, value) => {
    dispatch(InputTextValue(name, value));
  };
  const handleSignIn = async (data) => {
    // e.preventDefault()
    console.log("first", data);
    dispatch(SignInData(data));
  };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("is_logged_in") || "false";
    if (isLoggedIn === "true") {
      history.push("/home");
    }
  }, []);
  

  // ---------------------add json file---------------------

  
  return (
    <>
      <div className="login_container">
        {/* <div className="content_container"> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-12 col-md-6  order-sm-last   order-lg-first left ">
              <p className="welcome">Sign In</p>
              <p className="thank_p my-4">
                Thank you for get back to payment save,lets access our the best
                recommandation for you
              </p>

              <div className="">
                <div className="form-group mb-5">
                  <label htmlFor="email">E-mail</label>
                  <div className="input_icon_wrapper position-relative">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@mail.com"
                      value={loginInput.email}
                      onChange={(e) =>
                        handleChangeTextInput("email", e.target.value)
                      }
                    />
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2C0 0.89543 0.89543 0 2 0H18C19.1046 0 20 0.89543 20 2V14C20 15.1046 19.1046 16 18 16H2C0.89543 16 0 15.1046 0 14V2ZM3.51859 2L10 7.6712L16.4814 2H3.51859ZM18 3.32877L10.6585 9.7526C10.2815 10.0825 9.7185 10.0825 9.3415 9.7526L2 3.32877V14H18V3.32877Z"
                        fill="#BDBDBD"
                      />
                    </svg>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <div className="input_icon_wrapper position-relative">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="At least 6+ Characters, 1 uppercase letter"
                      value={loginInput.password}
                      onChange={(e) =>
                        handleChangeTextInput("password", e.target.value)
                      }
                      onKeyPress={(event) => {
                        if (event.key === "Enter") {
                          handleSignIn(loginInput);
                        }
                      }}
                    />
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2C6.3523 2 5 3.35228 5 5V8H14C15.1046 8 16 8.8954 16 10V18C16 19.1046 15.1046 20 14 20H2C0.89543 20 0 19.1046 0 18V10C0 8.8954 0.89543 8 2 8H3V5C3 2.24772 5.24771 0 8 0C10.7523 0 13 2.24772 13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5C11 3.35228 9.6477 2 8 2ZM2 10V18H14V10H2Z"
                        fill="#BDBDBD"
                      />
                    </svg>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="checkbox-parent">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember_me"
                      />
                      <label
                        className="form-check-label remember_me"
                        htmlFor="remember_me"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <a className="forget_pass" href="#">
                      Forget Password?
                    </a>
                  </div>
                </div>
                <button
                  className="signin_btn m-auto my-5 d-block"
                  onClick={() => handleSignIn(loginInput)}
                >
                  <span>Sign In</span>
                </button>
              </div>

              <p className="last_p">
                This site protected by reCAPTCHA and the Google
                <a href="#">Privacy Policy</a> and
                <a href="#">Terms of Service</a>Terms of Service apply
              </p>
            </div>
            <div className="col-lg-7 col-sm-12 col-md-6 order-first  order-lg-last right">
              <div className="img_container ml-lg-6">
                <img src={right_img} alt="" />
                {/* <Lottie options={defaultOptions} height={400} width={600} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
