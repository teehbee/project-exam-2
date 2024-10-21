import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

// Yup schema for validation
const schema = yup.object().shape({
  loginEmail: yup.string().email("Please enter a valid email address").required("Email is required"),
  loginPassword: yup.string().required("Password is required"),
});

interface LoginFormInputs {
  loginEmail: string;
  loginPassword: string;
}

function LoginForm() {
  // State for displaying loader in submit button
  const [loginLoader, setLoginLoader] = useState(false);
  // For navigating after login
  const navigate = useNavigate();
  // Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    // Set loader and navigate to success page for demonstration. Will later be connected to API
    // Console logs login data for now
    setLoginLoader(true);
    setTimeout(() => {
      setLoginLoader(false);
      navigate("/login-complete");
    }, 1000);
    console.log(data);
  };

  // useId for setting unique id to form inputs
  const id = React.useId();

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12 col-md-6 mx-auto my-5">
          <div className="custom-border-gray text-start p-3">
            <h1 className="fs-1-5rem-to-2rem fw-light">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-loginEmail"} className="mt-2 fs-0-75rem-to-1rem fw-light">
                  Email
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fw-light fs-0-75rem-to-0-875rem" type="email" placeholder="iamawesome@stud.noroff.no" id={id + "-loginEmail"} {...register("loginEmail")} />
                {errors.loginEmail && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.loginEmail.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-loginPassword"} className="mt-2 fs-0-75rem-to-1rem fw-light">
                  Password
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fw-light fs-0-75rem-to-0-875rem" type="password" placeholder="********" id={id + "-loginPassword"} {...register("loginPassword")} />
                {errors.loginPassword && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.loginPassword.message}</p>}
              </div>
              <button className="main-button-gray mt-4 p-1 p-md-2">Login {loginLoader && <Spinner className="ms-1" animation="border" size="sm" variant="light" />}</button>
              <p className="d-none pt-1 m-0 text-danger fs-0-75rem-to-0-875rem">Incorrect email address or password</p>
              <div className="mt-2 mt-md-3">
                <p className="fw-light fs-0-75rem-to-1rem">
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
