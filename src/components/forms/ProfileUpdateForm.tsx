import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

// Yup schema for validation
const schema = yup.object().shape({
  updateProfileAvatar: yup.string().required("Please enter a full url"),
  updateProfileBio: yup.string(),
  updateProfileVenueManager: yup.boolean(),
});

interface UpdateProfileFormInputs {
  updateProfileAvatar: string;
  updateProfileBio?: string;
  updateProfileVenueManager?: boolean;
}

function ProfileUpdateForm() {
  // State for displaying loader in submit button
  const [loginLoader, setLoginLoader] = useState(false);
  // For navigating after login
  const navigate = useNavigate();
  // Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      updateProfileVenueManager: false,
    },
  });

  const onSubmit: SubmitHandler<UpdateProfileFormInputs> = (data) => {
    // Set loader and navigate to success page for
    // Console logs updated profile data for now
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
          <div className="custom-border-gray text-start p-4">
            <h1 className="fs-1-5rem-to-2rem">Update profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-updateProfileAvatar"} className="mt-2 fs-0-75rem-to-1rem">
                  Update avatar
                </label>
                <input
                  className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem"
                  type="url"
                  placeholder="E.g. Fagernes"
                  id={id + "-updateProfileAvatar"}
                  {...register("updateProfileAvatar")}
                />
                {errors.updateProfileAvatar && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.updateProfileAvatar.message}</p>}
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-createVenueDescription"} className="mt-2 fs-0-75rem-to-1rem">
                  Bio
                </label>
                <textarea
                  className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fs-0-75rem-to-0-875rem"
                  placeholder="Enter bio text here"
                  rows={4}
                  id={id + "-updateProfileBio"}
                  {...register("updateProfileBio")}
                />
                {errors.updateProfileBio && <p className="text-danger fs-0-75rem-to-0-875rem pt-1">{errors.updateProfileBio.message}</p>}
              </div>
              <div className="col-6 form-check d-flex align-items-center pt-3">
                <input className="cursor-pointer form-check-input" type="checkbox" value="" id={id + "-updateProfileVenueManager"} {...register("updateProfileVenueManager")} />
                <label className="cursor-pointer form-check-label mt-1 ps-1 fs-0-75rem-to-1rem" htmlFor={id + "-updateProfileVenueManager"}>
                  Become venue manager
                </label>
              </div>
              <button className="main-button-gray mt-4 p-1 p-md-2">Update profile {loginLoader && <Spinner className="ms-1" animation="border" size="sm" variant="light" />}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdateForm;
