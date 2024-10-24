import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

// Yup schema for validation
const schema = yup.object().shape({
  createVenueName: yup.string().required("Please enter name of venue"),
  createVenueLocation: yup.string().required("Please enter location of venue"),
  createVenueDescription: yup.string().required("Please enter description of venue"),
  createVenueImage: yup.string().required("Please enter a full url"),
  createVenueImageDescription: yup.string(),
  createVenuePrice: yup
    .number()
    .required("Price per night is required")
    .transform((_, originalValue) => (originalValue === "" ? undefined : Number(originalValue))),
  createVenueNumberOfGuests: yup
    .number()
    .required("Max number of guests is required")
    .transform((_, originalValue) => (originalValue === "" ? undefined : Number(originalValue)))
    .min(1, "Number of guests must be at least 1"),
  createVenueWifi: yup.boolean(),
  createVenueParking: yup.boolean(),
  createVenueRestaurant: yup.boolean(),
  createVenuePets: yup.boolean(),
});

// Types for rental form message

interface CreateVenueFormInputs {
  createVenueName: string;
  createVenueLocation: string;
  createVenueDescription: string;
  createVenueImage: string;
  createVenueImageDescription?: string;
  createVenuePrice: number;
  createVenueNumberOfGuests: number;
  createVenueWifi?: boolean;
  createVenueParking?: boolean;
  createVenueRestaurant?: boolean;
  createVenuePets?: boolean;
}

function CreateVenueForm() {
  // State for displaying loader in submit button
  const [loginLoader, setLoginLoader] = useState(false);
  // For navigating after login
  const navigate = useNavigate();
  // Form validation including default values for checkboxes
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVenueFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      createVenueWifi: false,
      createVenueParking: false,
      createVenueRestaurant: false,
      createVenuePets: false,
    },
  });

  const onSubmit: SubmitHandler<CreateVenueFormInputs> = (data) => {
    // Set loader and navigate to success page for demonstration
    // Content is logged for now
    setLoginLoader(true);
    setTimeout(() => {
      setLoginLoader(false);
      navigate("/venue-created");
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
            <div className="pb-1 pb-md-2">
              <Link className="pb-3 font-gray fs-0-75rem-to-1rem text-decoration-none " to="/">
                Back to home page
              </Link>
            </div>
            <h1 className="fs-1-5rem-to-2rem">Rent out venue</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-createVenueName"} className="mt-2 fs-0-75rem-to-1rem">
                  Name<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="Enter your full name here" id={id + "-createVenueName"} {...register("createVenueName")} />
                {errors.createVenueName && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.createVenueName.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-createVenueLocation"} className="mt-2 fs-0-75rem-to-1rem">
                  Location<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="E.g. Fagernes" id={id + "-createVenueLocation"} {...register("createVenueLocation")} />
                {errors.createVenueLocation && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.createVenueLocation.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-createVenueDescription"} className="mt-2 fs-0-75rem-to-1rem">
                  Description<span className="text-danger">*</span>
                </label>
                <textarea className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" placeholder="Write description of venue here" rows={4} id={id + "-createVenueDescription"} {...register("createVenueDescription")} />
                {errors.createVenueDescription && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.createVenueDescription.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-createVenueImage"} className="mt-2 fs-0-75rem-to-1rem">
                  Image<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="url" placeholder="E.g. Fagernes" id={id + "-createVenueImage"} {...register("createVenueImage")} />
                {errors.createVenueImage && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.createVenueImage.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-createVenueImageDescription"} className="mt-2 fs-0-75rem-to-1rem">
                  Image description
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="E.g. Beautiful sunset in Valdres" id={id + "-createVenueImageDescription"} {...register("createVenueImageDescription")} />
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-createVenuePrice"} className="mt-2 fs-0-75rem-to-1rem">
                  Price per night in NOK<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="number" placeholder="E.g. 1000" id={id + "-createVenuePrice"} {...register("createVenuePrice")} />
                {errors.createVenuePrice && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.createVenuePrice.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-createVenueNumberOfGuests"} className="mt-2 fs-0-75rem-to-1rem">
                  Max number of guests<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="number" placeholder="E.g. 1" id={id + "-createVenueNumberOfGuests"} {...register("createVenueNumberOfGuests")} />
                {errors.createVenueNumberOfGuests && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.createVenueNumberOfGuests.message}</p>}
              </div>

              <div className="ms-1 row pt-3 pt-md-4 pb-3">
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="form-check-input cursor-pointer" type="checkbox" value="" id={id + "-createVenueWifi"} {...register("createVenueWifi")} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor={id + "-createVenueWifi"}>
                    Wifi
                  </label>
                </div>
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="form-check-input cursor-pointer" type="checkbox" value="" id={id + "-createVenueParking"} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor={id + "-createVenueParking"} {...register("createVenueParking")}>
                    Parking
                  </label>
                </div>
              </div>
              <div className="ms-1 row pb-2 justify-content-center w-100">
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="cursor-pointer form-check-input" type="checkbox" value="" id={id + "-createVenueRestaurant"} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor={id + "-createVenueRestaurant"} {...register("createVenueRestaurant")}>
                    Restaurant
                  </label>
                </div>
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="cursor-pointer form-check-input" type="checkbox" value="" id={id + "-createVenuePets"} {...register("createVenuePets")} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor={id + "-createVenuePets"}>
                    Pets allowed
                  </label>
                </div>
              </div>
              <button className="main-button-gray mt-4 mb-2 p-1 p-md-2">Create venue {loginLoader && <Spinner className="ms-1" animation="border" size="sm" variant="light" />}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateVenueForm;
