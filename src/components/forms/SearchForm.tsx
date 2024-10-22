import { Link } from "react-router-dom";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getTodaysDate, getTomorrowsDate } from "../utils";

// Type definition for search data

interface SearchFormInputFP {
  venueSearchNameFP: string;
  venueSearchArrFP: string;
  venueSearchDepFP: string;
  venueSearchNumberFP: number;
}

// Yup schema for search inputs

const schema = yup.object().shape({
  venueSearchNameFP: yup.string().required("Destination is required"),
  venueSearchArrFP: yup.string().required("Arrival date is required"),
  venueSearchDepFP: yup.string().required("Departure date is required"),
  venueSearchNumberFP: yup
    .number()
    .required("Number of guests is required")
    .transform((_, originalValue) => (originalValue === "" ? undefined : Number(originalValue))),
});

function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormInputFP>({
    resolver: yupResolver(schema),
  });

  // Submit handling. For now just consol logging the received data

  const onSubmit: SubmitHandler<SearchFormInputFP> = (data) => {
    console.log(data);
  };

  // Setting unique id for input fields

  const id = React.useId();

  // Finding date of today for inserting as default value in arrival field

  const today = getTodaysDate();

  // Finding date of tomorrow for inserting as default value in departure field

  const tomorrow = getTomorrowsDate();

  return (
    <div className="bg-dark-gray-color text-light search-form mx-auto px-4 pb-5 pt-3">
      <h2 className="secondary-font py-2 fs-1-5rem-to-2rem m-0">Search for accommodation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <label htmlFor={id + "-venueSearchNameFP"} className="py-2 text-light fs-0-75rem-to-1rem">
          Enter search text here
        </label>
        <input type="text" id={id + "-venueSearchNameFP"} defaultValue={"Scranton"} {...register("venueSearchNameFP")} className="mb-1 fs-0-75rem-to-0-875rem text-light" />
        {errors.venueSearchNameFP && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.venueSearchNameFP.message}</p>}
        <label htmlFor={id + "-venueSearchNameFP"} className="py-2 text-light fs-0-75rem-to-1rem">
          Arrival date
        </label>
        <input type="date" id={id + "-venueSearchArrFP"} defaultValue={today} {...register("venueSearchArrFP")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.venueSearchArrFP && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.venueSearchArrFP.message}</p>}
        <label htmlFor={id + "-venueSearchDepFP"} className="py-2 text-light fs-0-75rem-to-1rem">
          Departure date
        </label>
        <input type="date" id={id + "-venueSearchDepFP"} defaultValue={tomorrow} {...register("venueSearchDepFP")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.venueSearchDepFP && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.venueSearchDepFP.message}</p>}
        <label htmlFor={id + "-venueSearchDepFP"} className="py-2 text-light fs-0-75rem-to-1rem">
          Number of guests
        </label>
        <input type="number" id={id + "-venueSearchNumberFP"} defaultValue={1} {...register("venueSearchNumberFP")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.venueSearchNumberFP && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.venueSearchNumberFP.message}</p>}
        <Link to="venues">
          <button className="main-button-red mt-2 mt-md-4 fs-1-125rem w-100">SEARCH</button>
        </Link>
      </form>
    </div>
  );
}

export default SearchForm;
