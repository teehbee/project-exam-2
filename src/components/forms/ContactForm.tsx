import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "./schemas";
import Spinner from "react-bootstrap/Spinner";
import { ContactFormInputs } from "../api/const/interfaces";

function ContactForm() {
  const [loginLoader, setLoginLoader] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    setLoginLoader(true);
    setTimeout(() => {
      setLoginLoader(false);
      navigate("/message-sent");
    }, 2000);
    console.log("contact data is", data);
  };

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
            <h1 className="fs-1-5rem-to-2rem">Contact</h1>
            <p>We will get back to you within 24 hours</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-name"} className="mt-2 fs-0-75rem-to-1rem">
                  Username<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="Enter username here" id={id + "-name"} {...register("name")} />
                {errors.name && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.name.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-email"} className="mt-2 fs-0-75rem-to-1rem">
                  E-mail<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="email" placeholder="iamawesome@stud.noroff.no" id={id + "-email"} {...register("email")} />
                {errors.email && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.email.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-message"} className="mt-2 fs-0-75rem-to-1rem">
                  Message<span className="text-danger">*</span>
                </label>
                <textarea className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" placeholder="Write message here" rows={4} id={id + "-message"} {...register("message")} />
                {errors.message && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.message.message}</p>}
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
