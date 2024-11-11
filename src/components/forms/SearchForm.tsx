import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFrontpageSearchData } from "../../redux/actions/frontpageSearchActions";
import * as yup from "yup";
import { getTodaysDate, getTomorrowsDate } from "../utils";

// Type definition for search data

export interface SearchFormInputFP {
  venueSearchLocationFP: string;
  venueSearchArrFP: Date;
  venueSearchDepFP: Date;
  venueSearchNumberFP: number;
}

// Yup schema for search inputs

const schema = yup.object().shape({
  venueSearchLocationFP: yup.string().required("Destination is required"),
  venueSearchArrFP: yup.date().required("Arrival date is required"),
  venueSearchDepFP: yup.date().required("Arrival date is required"),
  venueSearchNumberFP: yup
    .number()
    .required("Number of guests is required")
    .transform((_, originalValue) => (originalValue === "" ? undefined : Number(originalValue))),
});

function SearchForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormInputFP>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SearchFormInputFP> = (data) => {
    dispatch(setFrontpageSearchData(data)); // Save data to Redux
    console.log(data);
    navigate("/venues"); // Redirect to /venues
  };
  // Setting unique id for input fields

  const id = React.useId();

  return (
    <div className="bg-dark-gray-color text-light search-form mx-auto px-4 pb-5 pt-3 form-box-shadow-no-br">
      <h2 className="secondary-font py-2 fs-1-5rem-to-2rem m-0">Search for accommodation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <label htmlFor={id + "-venueSearchNameFP"} className="py-2 text-light fs-0-75rem-to-1rem">
          Destination
        </label>
        <input type="text" id={id + "-venueSearchNameFP"} placeholder="Where do you want to go?" {...register("venueSearchLocationFP")} className="mb-1 fs-0-75rem-to-0-875rem text-light" />
        {errors.venueSearchLocationFP && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.venueSearchLocationFP.message}</p>}
        <label htmlFor={id + "-venueSearchNameFP"} className="py-2 text-light fs-0-75rem-to-1rem">
          Arrival date
        </label>
        <input type="date" id={id + "-venueSearchArrFP"} min={getTodaysDate()} defaultValue={getTodaysDate()} {...register("venueSearchArrFP")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.venueSearchArrFP && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.venueSearchArrFP.message}</p>}
        <label htmlFor={id + "-venueSearchDepFP"} className="py-2 text-light fs-0-75rem-to-1rem">
          Departure date
        </label>
        <input type="date" id={id + "-venueSearchDepFP"} min={getTomorrowsDate()} defaultValue={getTomorrowsDate()} {...register("venueSearchDepFP")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.venueSearchDepFP && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.venueSearchDepFP.message}</p>}
        <label htmlFor={id + "-venueSearchDepFP"} className="py-2 text-light fs-0-75rem-to-1rem">
          Number of guests
        </label>
        <input type="number" id={id + "-venueSearchNumberFP"} defaultValue={1} {...register("venueSearchNumberFP")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.venueSearchNumberFP && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.venueSearchNumberFP.message}</p>}
        <button className="main-button-red mt-2 mt-md-4 fs-1-125rem">SEARCH</button>
      </form>
    </div>
  );
}

export default SearchForm;
