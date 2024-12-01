import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useApi } from "../api";
import { REGISTER_ENDPOINT } from "../api/const";
import { RegisterFormInputs } from "../api/const/interfaces";
import Spinner from "react-bootstrap/Spinner";

// form validation schema

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/, "Email must be a valid Noroff student email")
    .required("Email is required"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

function RegistrationForm() {
  const [registrationError, setRegistrationError] = useState<string | null>(null);
  const [registrationLoader, setRegistrationLoader] = useState(false);
  const navigate = useNavigate();
  const venueManager = useSelector((state: RootState) => state.register.isVenueManager);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  // State for combined data from form and from imported venueManager state

  const [combinedData, setCombinedData] = useState<RegisterFormInputs | null>(null);

  // Api call for registering user

  const { data: responseData, error, loading } = useApi(REGISTER_ENDPOINT, "POST", combinedData, false, false);

  useEffect(() => {
    if (error) {
      setRegistrationError("Name or email address already belongs to a user");
      setRegistrationLoader(false);
    }
    if (responseData) {
      setRegistrationLoader(false);
      navigate("/registration-complete");
    }
  }, [error, responseData, navigate]);

  // onSubmit changes combinedData which again runs api call

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    const combinedData = {
      name: data.name,
      email: data.email,
      password: data.password,
      venueManager,
    };

    setRegistrationLoader(true);
    // Trigger for api call
    setCombinedData(combinedData);
  };

  // Set unique id for each form input

  const id = React.useId();

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto my-5">
          <div className="form-box-shadow text-start p-4">
            <Link className="mb-3 font-gray fs-0-75rem-to-1rem text-decoration-none " to="/register">
              Back to account types
            </Link>
            <h1 className="fs-1-5rem-to-2rem mt-2">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-registerName"} className="mt-2 fs-0-75rem-to-1rem">
                  Name<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="I hate my life" id={id + "-name"} {...register("name")} />
                {errors.name && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.name.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-registerEmail"} className="mt-2 fs-0-75rem-to-1rem">
                  Email<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="email" placeholder="ihatemylife@stud.noroff.no" id={id + "-email"} {...register("email")} />
                {errors.email && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.email.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-registerPassword"} className="mt-2 fs-0-75rem-to-1rem">
                  Password<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="password" placeholder="********" id={id + "-password"} {...register("password")} />
                {errors.password && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.password.message}</p>}
              </div>
              <button className="main-button-gray mt-4 p-1 p-md-2" disabled={loading}>
                Sign up {registrationLoader && <Spinner className="ms-1" animation="border" size="sm" variant="light" />}
              </button>
              {registrationError && <p className="text-danger pt-2 fs-0-75rem-to-0-875rem">{registrationError}</p>}
              <div className="mt-2 mt-md-3">
                <p className="fs-0-75rem-to-1rem">
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
