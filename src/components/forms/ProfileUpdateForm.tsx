import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateProfileSchema } from "./schemas";
import Spinner from "react-bootstrap/Spinner";
import { UpdateProfileInterface, UpdatedProfileData } from "../api/const/interfaces";
import { useApi } from "../api";
import { getProfileUpdateEndpoint } from "../api/const/variables";

function ProfileUpdateForm() {
  // Fetching name for implementing into api endpoint
  const name = localStorage.getItem("name");
  // State for displaying loader in submit button
  const [loginLoader, setLoginLoader] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Check if user is already venue manager, if not, checkbox for becoming venueManager is displayed
  const [isVenueManager, setIsVenueManager] = useState(false);

  // For navigating after login
  const navigate = useNavigate();

  // Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileInterface>({
    resolver: yupResolver(updateProfileSchema),
    defaultValues: {
      venueManager: false,
    },
  });

  // Check status of isVenueManager

  useEffect(() => {
    const venueManagerStatus = localStorage.getItem("isVenueManager") === "true";
    setIsVenueManager(venueManagerStatus);
  }, []);

  // State for setting date for updating profile
  const [updateData, setUpdateData] = useState<UpdateProfileInterface | null>(null);

  // Api call for updating profile
  const { data: responseData, error, loading } = useApi<UpdateProfileInterface, null>(name ? getProfileUpdateEndpoint(name) : "", "PUT", updateData, true, false);

  useEffect(() => {
    if (error) {
      setErrorMessage("Something went wrong, please try again!");
      setLoginLoader(false);
    }
    if (responseData) {
      setLoginLoader(false);
      navigate("/profile");
    }
  }, [error, responseData, navigate]);

  const onSubmit: SubmitHandler<UpdateProfileInterface> = async (data) => {
    setLoginLoader(true);
    // Make sure venueManager choice is not sent to api if isVenueManager is true. This to not revert status to default value
    if (isVenueManager) {
      delete data.venueManager;
    }
    // If no data, error is shown and return
    if (!data.url && !data.bio && !data.venueManager) {
      setErrorMessage("No updates provided, form will not be submitted!");
      setLoginLoader(false);
      return;
    }
    // Only add data to api call if present, making all fields optional
    const updateData: UpdatedProfileData = {};
    if (data.url) {
      updateData.avatar = { url: data.url };
    }
    if (data.bio) {
      updateData.bio = data.bio;
    }
    if (!isVenueManager && data.venueManager !== undefined) {
      updateData.venueManager = data.venueManager;
      if (data.venueManager) {
        localStorage.setItem("isVenueManager", "true");
      }
    }
    setLoginLoader(true);
    setUpdateData(updateData as UpdateProfileInterface);
  };

  // useId for setting unique id to form inputs
  const id = React.useId();

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
            <h1 className="fs-1-5rem-to-2rem">Update profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-url"} className="mt-2 fs-0-75rem-to-1rem">
                  Update avatar
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" type="url" placeholder="E.g. Fagernes" id={id + "-url"} {...register("url")} />
                {errors.url && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.url.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-bio"} className="mt-2 fs-0-75rem-to-1rem">
                  Bio
                </label>
                <textarea className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem" placeholder="Enter bio text here" rows={4} id={id + "-bio"} {...register("bio")} />
                {errors.bio && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.bio.message}</p>}
              </div>
              {!isVenueManager && (
                <div className="col-6 form-check d-flex align-items-center pt-3">
                  <input className="cursor-pointer form-check-input" type="checkbox" value="" id={id + "-venueManager"} {...register("venueManager")} />
                  <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor={id + "-venueManager"}>
                    Become venue manager
                  </label>
                </div>
              )}

              <button className="main-button-gray mt-4 p-1 p-md-2" disabled={loading}>
                Update profile {loginLoader && <Spinner className="ms-1" animation="border" size="sm" variant="light" />}
              </button>
              {errorMessage && <p className="text-danger pt-3 ps-1 fs-0-75rem-to-1rem">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdateForm;
