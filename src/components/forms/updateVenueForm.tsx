import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { CreateVenueFormInputs } from "../api/const/interfaces";
import { createVenueSchema } from "./schemas";

// Types for rental form message

function UpdateVenueForm() {
  const [loginLoader, setLoginLoader] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  console.log("id is", id);

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

  const onSubmit: SubmitHandler<CreateVenueFormInputs> = (data) => {
    // Set loader and navigate to success page for demonstration
    // Content is logged for now
    setLoginLoader(true);
    setTimeout(() => {
      setLoginLoader(false);
      navigate("/venue-updated");
    }, 1000);
    console.log(data);
  };

  // const onSubmit: SubmitHandler<CreateVenueFormInputs> = async (data) => {
  //   const meta = {
  //     wifi: data.wifi,
  //     parking: data.parking,
  //     breakfast: data.breakfast,
  //     pets: data.pets,
  //   };

  //   const createVenueData = {
  //     ...data,
  //     meta,
  //   };

  //   setLoginLoader(true);
  //   setCreateVenueData(createVenueData);
  // };

  // useId for setting unique id to form inputs

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12 col-md-6 mx-auto my-5">
          <div className="form-box-shadow text-start p-4">
            <div className="pb-1 pb-md-2">
              <Link className="pb-3 font-gray fs-0-75rem-to-1rem text-decoration-none " to="/profile">
                Back to profile
              </Link>
            </div>
            <h1 className="fs-1-5rem-to-2rem">Update venue</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateName" className="mt-2 fs-0-75rem-to-1rem">
                  Name<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="Enter name of venue here" id="updateName" {...register("name")} />
                {errors.name && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.name.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateCity" className="mt-2 fs-0-75rem-to-1rem">
                  City<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="E.g. Fagernes" id="updateCity" {...register("location.city")} />
                {errors.location?.city && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.location.city.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateCountry" className="mt-2 fs-0-75rem-to-1rem">
                  Country<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="E.g. Norway" id="updateCountry" {...register("location.country")} />
                {errors.location?.country && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.location.country.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateDescription" className="mt-2 fs-0-75rem-to-1rem">
                  Description<span className="text-danger">*</span>
                </label>
                <textarea className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" placeholder="Description of venue" rows={4} id="updateDescription" {...register("description")} />
                {errors.description && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.description.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateUrl" className="mt-2 fs-0-75rem-to-1rem">
                  Image<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="url" placeholder="E.g. https://image.com" id="updateUrl" {...register("media.0.url")} />
                {errors.media?.[0]?.url && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.media[0].url.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateAlt" className="mt-2 fs-0-75rem-to-1rem">
                  Image description
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="E.g. Beautiful sunset in Valdres" id="updateAlt" {...register("media.0.alt")} />
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updatePrice" className="mt-2 fs-0-75rem-to-1rem">
                  Price per night in NOK<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="number" placeholder="E.g. 1000" id="updatePrice" {...register("price")} />
                {errors.price && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.price.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateGuests" className="mt-2 fs-0-75rem-to-1rem">
                  Max number of guests<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="number" placeholder="E.g. 1" id="updateGuests" {...register("maxGuests")} />
                {errors.maxGuests && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.maxGuests.message}</p>}
              </div>
              <div className="ms-1 row pt-3 pt-md-4 pb-3">
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="form-check-input cursor-pointer" type="checkbox" value="" id="updateWifi" {...register("wifi")} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor="updateWifi">
                    Wifi
                  </label>
                </div>
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="form-check-input cursor-pointer" type="checkbox" value="" id="updateParking" />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor="updateParking" {...register("parking")}>
                    Parking
                  </label>
                </div>
              </div>
              <div className="ms-1 row pb-2 justify-content-center w-100">
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="cursor-pointer form-check-input" type="checkbox" value="" id="updateBreakfast" />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor="updateBreakfast" {...register("breakfast")}>
                    Breakfast
                  </label>
                </div>
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="cursor-pointer form-check-input" type="checkbox" value="" id="updatePets" {...register("pets")} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor="updatePets">
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

export default UpdateVenueForm;
