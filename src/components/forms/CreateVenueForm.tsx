import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createVenueSchema } from "./schemas";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { CreateVenueFormInputs } from "../api/const/interfaces";
import { useApi } from "../api";
import { CREATE_VENUE_ENDPOINT } from "../api/const";

// Yup schema for validation

function CreateVenueForm() {
  const [loginLoader, setLoginLoader] = useState(false);
  const [createVenueError, setCreateVenueError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Form validation including default values for checkboxes

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVenueFormInputs>({
    resolver: yupResolver(createVenueSchema),
    defaultValues: {
      wifi: false,
      parking: false,
      breakfast: false,
      pets: false,
      media: [{ url: "", alt: "" }],
    },
  });

  // State for setting data for creating venue, triggered by the onSubmit
  const [createVenueData, setCreateVenueData] = useState<CreateVenueFormInputs | null>(null);

  const { data: responseData, error, loading } = useApi<CreateVenueFormInputs, null>(CREATE_VENUE_ENDPOINT, "POST", createVenueData, true, false);

  useEffect(() => {
    if (error) {
      setCreateVenueError(error);
      setLoginLoader(false);
    }
    if (responseData) {
      setLoginLoader(false);
      navigate("/venue-created");
    }
  }, [error, responseData, navigate, loading]);

  // Trigger for api call

  const onSubmit: SubmitHandler<CreateVenueFormInputs> = async (data) => {
    const meta = {
      wifi: data.wifi,
      parking: data.parking,
      breakfast: data.breakfast,
      pets: data.pets,
    };

    const createVenueData = {
      ...data,
      meta,
    };

    setLoginLoader(true);
    setCreateVenueData(createVenueData);
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
            <h1 className="fs-1-5rem-to-2rem">Rent out venue</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-name"} className="mt-2 fs-0-75rem-to-1rem">
                  Name<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="Enter name of venue here" id={id + "-name"} {...register("name")} />
                {errors.name && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.name.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-city"} className="mt-2 fs-0-75rem-to-1rem">
                  City<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="E.g. Fagernes" id={id + "-city"} {...register("location.city")} />
                {errors.location?.city && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.location.city.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-country"} className="mt-2 fs-0-75rem-to-1rem">
                  Country<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="E.g. Norway" id={id + "-country"} {...register("location.country")} />
                {errors.location?.country && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.location.country.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-description"} className="mt-2 fs-0-75rem-to-1rem">
                  Description<span className="text-danger">*</span>
                </label>
                <textarea className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" placeholder="Description of venue" rows={4} id={id + "-description"} {...register("description")} />
                {errors.description && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.description.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-url"} className="mt-2 fs-0-75rem-to-1rem">
                  Image<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="url" placeholder="E.g. https://image.com" id={id + "-url"} {...register("media.0.url")} />
                {errors.media?.[0]?.url && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.media[0].url.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-alt"} className="mt-2 fs-0-75rem-to-1rem">
                  Image description
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="E.g. Beautiful sunset in Valdres" id={id + "-alt"} {...register("media.0.alt")} />
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-price"} className="mt-2 fs-0-75rem-to-1rem">
                  Price per night in NOK<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="number" placeholder="E.g. 1000" id={id + "-price"} {...register("price")} />
                {errors.price && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.price.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-maxGuests"} className="mt-2 fs-0-75rem-to-1rem">
                  Max number of guests<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="number" placeholder="E.g. 1" id={id + "-maxGuests"} {...register("maxGuests")} />
                {errors.maxGuests && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.maxGuests.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-rating"} className="mt-2 fs-0-75rem-to-1rem">
                  Star rating of hotel
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="number" placeholder="Between 1 and 5 stars" id={id + "-rating"} {...register("rating")} min="0" max="5" value="0" />
                {errors.rating && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.rating.message}</p>}
              </div>
              <div className="ms-1 row pt-3 pt-md-4 pb-3">
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="form-check-input cursor-pointer" type="checkbox" value="" id={id + "-wifi"} {...register("wifi")} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor={id + "-wifi"}>
                    Wifi
                  </label>
                </div>
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="form-check-input cursor-pointer" type="checkbox" value="" id={id + "-parking"} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor={id + "-parking"} {...register("parking")}>
                    Parking
                  </label>
                </div>
              </div>
              <div className="ms-1 row pb-2 justify-content-center w-100">
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="cursor-pointer form-check-input" type="checkbox" value="" id={id + "-breakfast"} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor={id + "-breakfast"} {...register("breakfast")}>
                    Breakfast
                  </label>
                </div>
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="cursor-pointer form-check-input" type="checkbox" value="" id={id + "-pets"} {...register("pets")} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor={id + "-pets"}>
                    Pets allowed
                  </label>
                </div>
              </div>
              <button className="main-button-gray mt-4 mb-2 p-1 p-md-2">Create venue {loginLoader && <Spinner className="ms-1" animation="border" size="sm" variant="light" />}</button>
              {createVenueError && <p className="text-danger pt-2 fs-0-75rem-to-0-875rem">Something went wrong, don't try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateVenueForm;
