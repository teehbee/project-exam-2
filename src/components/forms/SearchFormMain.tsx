import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getTodaysDate, getTomorrowsDate } from "../utils";

// Type definition for search data

interface SearchFormInputFP {
  venueSearchLocationVP?: string;
  venueSearchNameVP?: string;
  venueSearchArrivalDateVP?: Date;
  venueSearchDepartureDateVP?: Date;
  venueSearchGuestNumberVP?: number;
}

// Yup schema for search inputs. No required fields

const schema = yup.object().shape({
  venueSearchLocationVP: yup.string(),
  venueSearchNameVP: yup.string(),
  venueSearchArrivalDateVP: yup.date(),
  venueSearchDepartureDateVP: yup.date(),
  venueSearchGuestNumberVP: yup.number().transform((_, originalValue) => (originalValue === "" ? undefined : Number(originalValue))),
});

function SearchFormMain() {
  const { register, handleSubmit } = useForm<SearchFormInputFP>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SearchFormInputFP> = (data) => {
    console.log(data);
  };
  // Setting unique id for input fields

  const id = React.useId();

  return (
    <div className="bg-dark-gray-color text-light search-form-main mx-auto px-4 pb-5 pt-3 form-box-shadow-no-br">
      <h2 className="secondary-font py-2 fs-1-5rem-to-2rem m-0">Search for accommodation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <div className="row">
          <div className="col-12 col-md-6 form-group d-flex flex-column">
            <label htmlFor={id + "-venueSearchLocationVP"} className="py-2 text-light fs-0-75rem-to-1rem">
              Destination
            </label>
            <input type="text" id={id + "-venueSearchLocationVP"} placeholder="Where do you want to go?" {...register("venueSearchLocationVP")} className="mb-1 fs-0-75rem-to-0-875rem text-light" />
          </div>
          <div className="col-12 col-md-6 form-group d-flex flex-column">
            <label htmlFor={id + "-venueSearchNameVP"} className="py-2 text-light fs-0-75rem-to-1rem">
              Name of venue
            </label>
            <input type="text" id={id + "-venueSearchNameVP"} placeholder="Enter name of the venue you want to visit" {...register("venueSearchNameVP")} className="mb-1 fs-0-75rem-to-0-875rem text-light" />
          </div>
          <div className="col-12 col-md-6 form-group d-flex flex-column">
            <label htmlFor={id + "-venueSearchArrivalDateVP"} className="py-2 text-light fs-0-75rem-to-1rem">
              Arrival date
            </label>
            <input type="date" id={id + "-venueSearchArrivalDateVP"} min={getTodaysDate()} defaultValue={getTodaysDate()} {...register("venueSearchArrivalDateVP")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
          </div>
          <div className="col-12 col-md-6 form-group d-flex flex-column">
            <label htmlFor={id + "-venueSearchDepartureDateVP"} className="py-2 text-light fs-0-75rem-to-1rem">
              Departure date
            </label>
            <input type="date" id={id + "-venueSearchDepartureDateVP"} min={getTomorrowsDate()} defaultValue={getTomorrowsDate()} {...register("venueSearchDepartureDateVP")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
          </div>
          <div className="col-12 col-md-6 form-group d-flex flex-column">
            <label htmlFor={id + "-venueSearchGuestNumberVP"} className="py-2 text-light fs-0-75rem-to-1rem">
              Number of guests
            </label>
            <input type="number" id={id + "-venueSearchGuestNumberVP"} defaultValue={1} {...register("venueSearchGuestNumberVP")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
          </div>
        </div>
        <button className="main-button-red mt-2 mt-md-4 fs-1-125rem">SEARCH</button>
      </form>
    </div>
  );
}

export default SearchFormMain;
