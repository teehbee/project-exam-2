import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { CreateVenueFormInputs, SingleVenueResponse } from "../api/const/interfaces";
import { createVenueSchema } from "./schemas";
import { useApi } from "../api";
import { getVenueEndpoint } from "../api/const";

// Types for rental form message

function UpdateVenueForm() {
  const [updateVenueData, setUpdateVenueData] = useState<CreateVenueFormInputs | null>(null);
  const [loginLoader, setLoginLoader] = useState(false);
  const [updateError, setUpdateError] = useState(false);
  const [initialLoader, setInitialLoader] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  // fetch initial venue data for inserting into form

  const { data: responseData, error, loading } = useApi<null, SingleVenueResponse>(getVenueEndpoint(id as string), "GET", null, true, true);

  useEffect(() => {
    if (loading) {
      setInitialLoader(true);
    }
    if (error) {
      console.error(error);
      setInitialLoader(false);
    }
    if (responseData) {
      setInitialLoader(false);
    }
  }, [error, responseData, navigate, loading]);

  const { data: updateVenueResponse, error: apiError, loading: isLoading } = useApi<CreateVenueFormInputs, null>(getVenueEndpoint(id as string), "PUT", updateVenueData, true, false);

  useEffect(() => {
    if (isLoading) {
      setLoginLoader(true);
    }
    if (apiError) {
      console.error(apiError);
      setUpdateError(true);
      setLoginLoader(false);
    }
    // if (!updateVenueData) {
    //   setUpdateError(true);
    //   return;
    // }
    if (updateVenueResponse) {
      // console.log("Venue updated successfully");
      navigate("/venue-updated");
      setLoginLoader(false);
    }
  }, [updateVenueResponse, apiError, isLoading, navigate, updateVenueData, setUpdateError]);

  console.log(responseData);

  // Form validation including default values for checkboxes
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
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

  const onSubmit: SubmitHandler<CreateVenueFormInputs> = async (data) => {
    try {
      const meta = {
        wifi: data.wifi,
        parking: data.parking,
        breakfast: data.breakfast,
        pets: data.pets,
      };
      const createUpdateData = {
        ...data,
        meta,
      };
      setUpdateVenueData(createUpdateData);
    } catch (error) {
      console.error("Error updating venue:", error);
      setUpdateError(true);
    }
  };

  // Set initial values for correct validation
  useEffect(() => {
    if (responseData) {
      setValue("name", responseData.data.name);
      setValue("location", { city: responseData.data.location.city, country: responseData.data.location.country });
      setValue("description", responseData.data.description);
      setValue("media", [{ url: responseData.data.media[0].url, alt: responseData.data.media[0].alt }]);
      setValue("price", responseData.data.price);
      setValue("maxGuests", responseData.data.maxGuests);
      setValue("wifi", responseData.data.meta.wifi || false);
      setValue("parking", responseData.data.meta.parking || false);
      setValue("breakfast", responseData.data.meta.breakfast || false);
      setValue("pets", responseData.data.meta.pets || false);
      trigger();
    }
  }, [responseData, setValue, trigger]);

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
            <div className="d-flex align-items-center">
              <h1 className="fs-1-5rem-to-2rem">Update venue</h1>
              {initialLoader && <Spinner className="ms-3" animation="border" size="sm" />}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateName" className="mt-2 fs-0-75rem-to-1rem">
                  Name<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="Enter name of venue here" id="updateName" {...register("name")} defaultValue={responseData?.data.name} />
                {errors.name && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.name.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateCity" className="mt-2 fs-0-75rem-to-1rem">
                  City<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="E.g. Fagernes" id="updateCity" {...register("location.city")} defaultValue={responseData?.data.location.city} />
                {errors.location?.city && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.location.city.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateCountry" className="mt-2 fs-0-75rem-to-1rem">
                  Country<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="E.g. Norway" id="updateCountry" {...register("location.country")} defaultValue={responseData?.data.location.country} />
                {errors.location?.country && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.location.country.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateDescription" className="mt-2 fs-0-75rem-to-1rem">
                  Description<span className="text-danger">*</span>
                </label>
                <textarea className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" placeholder="Description of venue" rows={4} id="updateDescription" {...register("description")} defaultValue={responseData?.data.description} />
                {errors.description && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.description.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateUrl" className="mt-2 fs-0-75rem-to-1rem">
                  Image<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="url" placeholder="E.g. https://image.com" id="updateUrl" {...register("media.0.url")} defaultValue={responseData?.data.media[0].url} />
                {errors.media?.[0]?.url && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.media[0].url.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateAlt" className="mt-2 fs-0-75rem-to-1rem">
                  Image description
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="text" placeholder="E.g. Beautiful sunset in Valdres" id="updateAlt" {...register("media.0.alt")} defaultValue={responseData?.data.media[0].alt} />
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updatePrice" className="mt-2 fs-0-75rem-to-1rem">
                  Price per night in NOK<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="number" placeholder="E.g. 1000" id="updatePrice" {...register("price")} defaultValue={responseData?.data.price} />
                {errors.price && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.price.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="updateGuests" className="mt-2 fs-0-75rem-to-1rem">
                  Max number of guests<span className="text-danger">*</span>
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="number" placeholder="E.g. 1" id="updateGuests" {...register("maxGuests")} defaultValue={responseData?.data.maxGuests} />
                {errors.maxGuests && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.maxGuests.message}</p>}
              </div>
              <div className="ms-1 row pt-3 pt-md-4 pb-3">
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="form-check-input cursor-pointer" type="checkbox" id="updateWifi" {...register("wifi")} defaultChecked={responseData?.data.meta.wifi} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor="updateWifi">
                    Wifi
                  </label>
                </div>
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="form-check-input cursor-pointer" type="checkbox" id="updateParking" defaultChecked={responseData?.data.meta.parking} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor="updateParking" {...register("parking")}>
                    Parking
                  </label>
                </div>
              </div>
              <div className="ms-1 row pb-2 justify-content-center w-100">
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="cursor-pointer form-check-input" type="checkbox" id="updateBreakfast" defaultChecked={responseData?.data.meta.breakfast} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor="updateBreakfast" {...register("breakfast")}>
                    Breakfast
                  </label>
                </div>
                <div className="col-6 form-check d-flex align-items-center">
                  <input className="cursor-pointer form-check-input" type="checkbox" id="updatePets" {...register("pets")} defaultChecked={responseData?.data.meta.pets} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor="updatePets">
                    Pets allowed
                  </label>
                </div>
              </div>
              <button className="main-button-gray mt-4 mb-2 p-1 p-md-2">Create venue {loginLoader && <Spinner className="ms-1" animation="border" size="sm" variant="light" />}</button>
              {updateError && <p className="text-danger pt-2 fs-0-75rem-to-0-875rem">No updates were made.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateVenueForm;
