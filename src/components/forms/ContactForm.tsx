import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

// Yup schema for validation
const schema = yup.object().shape({
  contactName: yup.string().required("Please enter your name"),
  contactEmail: yup
    .string()
    .matches(/^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/, "Email must be a valid Noroff student email")
    .required("Email is required"),
  contactMessage: yup.string().required("Message is required"),
});

// Types for contact message

interface LoginFormInputs {
  contactName: string;
  contactEmail: string;
  contactMessage: string;
}

function ContactForm() {
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
    // Set loader and navigate to success page for demonstration
    // Contact message is console logged
    setLoginLoader(true);
    setTimeout(() => {
      setLoginLoader(false);
      navigate("/message-sent");
    }, 1000);
    console.log(data);
  };

  // useId for setting unique id to form inputs
  const id = React.useId();

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12 col-md-6 mx-auto my-5">
          <div className="form-box-shadow text-start p-4">
            <h1 className="fs-1-5rem-to-2rem">Contact</h1>
            <p>We will get back to you within 24 hours</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-contactName"} className="mt-2 fs-0-75rem-to-1rem">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem"
                  type="text"
                  placeholder="Enter your full name here"
                  id={id + "-contactName"}
                  {...register("contactName")}
                />
                {errors.contactName && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.contactName.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-contactEmail"} className="mt-2 fs-0-75rem-to-1rem">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem"
                  type="email"
                  placeholder="iamawesome@stud.noroff.no"
                  id={id + "-contactEmail"}
                  {...register("contactEmail")}
                />
                {errors.contactEmail && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.contactEmail.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-contactMessage"} className="mt-2 fs-0-75rem-to-1rem">
                  Message<span className="text-danger">*</span>
                </label>
                <textarea
                  className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem"
                  placeholder="Write message here"
                  rows={4}
                  id={id + "-loginPassword"}
                  {...register("contactMessage")}
                />
                {errors.contactMessage && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.contactMessage.message}</p>}
              </div>
              <button className="main-button-gray mt-4 mb-2 p-1 p-md-2">Login {loginLoader && <Spinner className="ms-1" animation="border" size="sm" variant="light" />}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
