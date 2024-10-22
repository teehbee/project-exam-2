import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface SearchFormInputFP {
  venueSearchNameFP: string;
  venueSearchArrFP: string;
  venueSearchDepFP: string;
  venueSearchNumberFP: number;
}

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

  const onSubmit: SubmitHandler<SearchFormInputFP> = (data) => {
    console.log(data);
  };

  const id = React.useId();

  return (
    <div className="bg-dark-gray-color text-light search-form mx-auto px-4 pb-5 pt-3">
      <h2 className="secondary-font py-2 fs-1-5rem-to-2rem m-0">Search for accommodation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <label htmlFor={id + "-venueSearchNameFP"} className="py-2 text-light fs-0-75rem-to-1rem">
          Enter search text here
        </label>
        <input type="text" id={id + "-venueSearchNameFP"} placeholder="Fagernes" {...register("venueSearchNameFP")} className="mb-1 fs-0-75rem-to-0-875rem text-light" />
        {errors.venueSearchNameFP && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.venueSearchNameFP.message}</p>}
        <label htmlFor={id + "-venueSearchNameFP"} className="py-2 text-light fs-0-75rem-to-1rem">
          Arrival date
        </label>
        <input type="date" id={id + "-venueSearchArrFP"} placeholder="Fagernes" {...register("venueSearchArrFP")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.venueSearchArrFP && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.venueSearchArrFP.message}</p>}
        <label htmlFor={id + "-venueSearchDepFP"} className="py-2 text-light fs-0-75rem-to-1rem">
          Departure date
        </label>
        <input type="date" id={id + "-venueSearchDepFP"} placeholder="Fagernes" {...register("venueSearchDepFP")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.venueSearchDepFP && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.venueSearchDepFP.message}</p>}
        <label htmlFor={id + "-venueSearchDepFP"} className="py-2 text-light fs-0-75rem-to-1rem">
          Number of guests
        </label>
        <input type="number" id={id + "-venueSearchNumberFP"} placeholder="0" {...register("venueSearchNumberFP")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.venueSearchNumberFP && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.venueSearchNumberFP.message}</p>}
        <button className="main-button-red mt-2 mt-md-4 fs-1-125rem">SEARCH</button>
      </form>
    </div>
  );
}

export default SearchForm;
