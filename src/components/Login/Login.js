import React, { useEffect, useState } from "react";
import "../../assets/css/signup.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { InputTextValue, SetSigninStatusFalse, SignInData } from "./../../_redux/reducers/LoginReducer";
import { InputTextValue, SetSigninStatusFalse, SignInData } from "./_redux/actions/LoginActions";
const Login = ({setHideToolbar}) => {
  const [LoginForm, setLoginForm] = useState(1);
  let history = useHistory();
  const dispatch = useDispatch();

  const [LoginInfo, setLoginInfo] = useState({
    login_username: "",
    login_password: "",
  });
  const [SignUpInfo, setSignUpInfo] = useState({
    sign_up_username: "",
    sign_up_email: "",
    sign_up_confirm_password: "",
    sign_up_password: "",
  });

  const handleInputs = (e, setval) => {
    console.log(e.target.name);
    const InputName = e.target.name;
    const Inputval = e.target.value;
    setval((previous_values) => {
      return { ...previous_values, [InputName]: Inputval };
    });
  };

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("is_logged_in") || "false";
  //   if (isLoggedIn === "true") {
  //     history("/home");
  //   }
  // }, []);

  const doLogin = (e) => {
    console.log(LoginInfo);
      history.push("/home");

  };

  useEffect(() => {
    setHideToolbar(true);
    return () => {
      setHideToolbar(false);
    };
  }, []);
  return (
    <section className="forms-section">
      <h1 className="section-title">Please,Do a Quick Signup,It won't take more than 20 seconds..</h1>
      <div className="forms">
        <div id="login_div" className={`form-wrapper  ${!LoginForm ? "is-active" : ""}`}>
          <button type="button" onClick={() => setLoginForm(0)} className="switcher switcher-login">
            Login
            <span className="underline"></span>
          </button>
          <div className="form form-login"  id="loginForm">
            <fieldset>
              <div className="input-block">
                <label for="login-email">Username</label>
                <input
                  id="login-email"
                  // onChange={(e) => handleInputs(e, setLoginInfo)}
                  type="text"
                  className=""
                  name="login_username"
                  placeholder="Username"
                  required="required"
                  onChange={(e) =>handleInputs(e,setLoginInfo)}
                />
              </div>
              <div className="input-block">
                <lasign_up_el for="login-password">Password</lasign_up_el>
                <input
                  id="login-password"
                  // onChange={(e) => handleInputs(e, setLoginInfo)}
                  type="password"
                  name="login_password"
                  placeholder="Password"
                  required="required"
                  onChange={(e) =>handleInputs(e,setLoginInfo)}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      doLogin();
                    }
                  }}
                />
              </div>
            </fieldset>
            <button onClick={doLogin} type="submit" id="login_btn" className="signup_button">
              Login
            </button>
          </div>
        </div>
        <div className={`form-wrapper  ${LoginForm ? "is-active" : ""}`}>
          <button type="button" className="switcher switcher-signup" onClick={() => setLoginForm(1)}>
            Sign Up
            <span className="underline"></span>
          </button>
          <form className="form form-signup">
            <fieldset>
              <div className="input-block">
                <label for="signup-username">Username</label>
                <input id="signup-email" onChange={(e) => handleInputs(e, setSignUpInfo)} name="sign_up_username" type="text" required />
              </div>
              <div className="input-block">
                <label for="signup-email">E-mail</label>
                <input id="signup-email" onChange={(e) => handleInputs(e, setSignUpInfo)} name="sign_up_email" type="email" required />
              </div>
              <div className="input-block">
                <label for="signup-password ">Password</label>
                <input id="signup-password" onChange={(e) => handleInputs(e, setSignUpInfo)} name="sign_up_password" type="password" required />
              </div>

              <div className="input-block">
                <label for="signup-password ">Confirm Password</label>
                <input
                  id="signup-password"
                  onChange={(e) => handleInputs(e, setSignUpInfo)}
                  name="sign_up_confirm_password"
                  type="password"
                  required
                />
              </div>
            </fieldset>
            <button type="submit" id="signup_btn" className="signup_button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
