import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useApi } from "../api";
import { LOGIN_ENDPOINT } from "../api/const";
import { LoginFormInputs, LoginResponse } from "../api/interfaces";
import Spinner from "react-bootstrap/Spinner";

// Yup schema for validation

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/, "Email must be a valid Noroff student email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

function LoginForm() {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginLoader, setLoginLoader] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  // State for loginData

  const [loginData, setLoginData] = useState<LoginFormInputs | null>(null);

  // Api call for login

  const { data: responseData, error, loading } = useApi<LoginFormInputs, LoginResponse>(LOGIN_ENDPOINT, "POST", loginData, false, false);

  useEffect(() => {
    if (error) {
      setLoginError(error);
      setLoginLoader(false);
    }
    if (responseData) {
      setLoginLoader(false);

      // Save token and name to redux reducer

      localStorage.setItem("accessToken", responseData.data.accessToken);
      localStorage.setItem("name", responseData.data.name);
      localStorage.setItem("loggedIn", "true");
      navigate("/login-complete");
    }
  }, [error, responseData, navigate]);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    setLoginLoader(true);

    // Trigger for api call

    setLoginData(loginData);
  };

  // useId for setting unique id to form inputs

  const id = React.useId();

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12 col-md-6 mx-auto my-5">
          <div className="form-box-shadow text-start p-4">
            <div className="pb-1 pb-md-2">
              <Link className="pb-3 font-gray fs-0-75rem-to-1rem text-decoration-none " to="/">
                Back to home page
              </Link>
            </div>
            <h1 className="fs-1-5rem-to-2rem">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-loginEmail"} className="mt-2 fs-0-75rem-to-1rem">
                  Email
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="email" placeholder="iamawesome@stud.noroff.no" id={id + "-loginEmail"} {...register("email")} />
                {errors.email && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.email.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-loginPassword"} className="mt-2 fs-0-75rem-to-1rem">
                  Password
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="password" placeholder="********" id={id + "-loginPassword"} {...register("password")} />
                {errors.password && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.password.message}</p>}
              </div>
              <button className="main-button-gray mt-4 p-1 p-md-2" disabled={loading}>
                Login {loginLoader && <Spinner className="ms-1" animation="border" size="sm" variant="light" />}
              </button>
              {loginError && <p className="pt-1 m-0 text-danger fs-0-75rem-to-0-875rem">Incorrect email address or password</p>}
              <div className="mt-2 mt-md-3">
                <p className="fs-0-75rem-to-1rem">
                  Not registered?{" "}
                  <Link className="font-gray" to="/register">
                    Create a new user here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
