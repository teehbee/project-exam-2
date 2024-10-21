import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

// Yup schema for validation
const schema = yup.object().shape({
  registerName: yup.string().required("Name is required"),
  registerEmail: yup
    .string()
    .matches(/^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/, "Email must be a valid Noroff student email")
    .required("Email is required"),
  registerPassword: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  registerPasswordConfirm: yup
    .string()
    .required("Please confirm password")
    .oneOf([yup.ref(`registerPassword`)], "Passwords must match"),
});

interface RegisterFormInputs {
  registerName: string;
  registerEmail: string;
  registerPassword: string;
  registerPasswordConfirm: string;
}

function RegistrationForm() {
  // State for displaying loader in submit button
  const [registrationLoader, setRegistrationLoader] = useState(false);
  // For navigating after login
  const navigate = useNavigate();
  // Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    // Set loader and navigate to success page for demonstration. Will later be connected to API
    // Console logs login data for now
    setRegistrationLoader(true);
    setTimeout(() => {
      setRegistrationLoader(false);
      navigate("/registration-complete");
    }, 1000);
    console.log(data);
  };

  // useId for setting unique id to form inputs
  const id = React.useId();

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto my-5">
          <div className="custom-border-gray text-start p-3">
            <Link className="mb-3 font-gray fs-0-75rem-to-1rem text-decoration-none " to="/register">
              Back to account types
            </Link>
            <h1 className="fs-1-5rem-to-2rem fw-light mt-2">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-registerName"} className="mt-2 fs-0-75rem-to-1rem fw-light">
                  Name<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fw-light fs-0-75rem-to-0-875rem" type="text" placeholder="I hate my life" id={id + "-registerName"} {...register("registerName")} />
                {errors.registerName && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.registerName.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-registerEmail"} className="mt-2 fs-0-75rem-to-1rem fw-light">
                  Email<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fw-light fs-0-75rem-to-0-875rem" type="email" placeholder="ihatemylife@stud.noroff.no" id={id + "-registerEmail"} {...register("registerEmail")} />
                {errors.registerEmail && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.registerEmail.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-registerPassword"} className="mt-2 fs-0-75rem-to-1rem fw-light">
                  Password<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fw-light fs-0-75rem-to-0-875rem" type="password" placeholder="********" id={id + "-loginPassword"} {...register("registerPassword")} />
                {errors.registerPassword && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.registerPassword.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-registerPasswordConfirm"} className="mt-2 fs-0-75rem-to-1rem fw-light">
                  Confirm password<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fw-light fs-0-75rem-to-0-875rem" type="password" placeholder="********" id={id + "-registerPasswordConfirm"} {...register("registerPasswordConfirm")} />
                {errors.registerPasswordConfirm && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.registerPasswordConfirm.message}</p>}
              </div>
              <button className="main-button-gray mt-4 p-1 p-md-2">Login {registrationLoader && <Spinner className="ms-1" animation="border" size="sm" variant="light" />}</button>
              <p className="d-none pt-1 m-0 text-danger fs-0-75rem-to-0-875rem">Incorrect email address or password</p>
              <div className="mt-2 mt-md-3">
                <p className="fw-light fs-0-75rem-to-1rem">
                  Already have a user?{" "}
                  <Link className="font-gray" to="/login">
                    Sign in here
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

export default RegistrationForm;
