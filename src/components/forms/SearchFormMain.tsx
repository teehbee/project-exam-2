import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { venuesSearchSchema } from "./schemas";
import { getTodaysDate, getTomorrowsDate } from "../utils";
import { SearchFormInputInterface, ConvertedSearchDataInterface, SearchFormMainProps } from "../api/const/interfaces";

function SearchFormMain({ onSearch }: SearchFormMainProps) {
  const { register, handleSubmit } = useForm<SearchFormInputInterface>({
    resolver: yupResolver(venuesSearchSchema),
  });

  // Convert dates from search inputs before sending them to parent container as formattedData
  const onSubmit: SubmitHandler<SearchFormInputInterface> = (data) => {
    const formattedData: ConvertedSearchDataInterface = {
      ...data,
      dateFrom: data.dateFrom ? new Date(data.dateFrom).toISOString() : undefined,
      dateTo: data.dateTo ? new Date(data.dateTo).toISOString() : undefined,
    };
    onSearch(formattedData);
  };

  const id = React.useId();

  return (
    <div className="bg-dark-gray-color text-light search-form-main mx-auto px-4 pb-5 pt-3 form-box-shadow-no-br">
      <h2 className="secondary-font py-2 fs-1-5rem-to-2rem m-0">Search for accommodation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <div className="row">
          <div className="col-12 col-md-6 form-group d-flex flex-column">
            <label htmlFor={id + "-location"} className="py-2 text-light fs-0-75rem-to-1rem">
              Destination
            </label>
            <input type="text" id={id + "-location"} placeholder="Where do you want to go?" {...register("location")} className="mb-1 fs-0-75rem-to-0-875rem text-light" />
          </div>
          <div className="col-12 col-md-6 form-group d-flex flex-column">
            <label htmlFor={id + "-name"} className="py-2 text-light fs-0-75rem-to-1rem">
              Name of venue
            </label>
            <input type="text" id={id + "-name"} placeholder="Enter name of the venue you want to visit" {...register("name")} className="mb-1 fs-0-75rem-to-0-875rem text-light" />
          </div>
          <div className="col-12 col-md-6 form-group d-flex flex-column">
            <label htmlFor={id + "-dateFrom"} className="py-2 text-light fs-0-75rem-to-1rem">
              Arrival date
            </label>
            <input type="date" id={id + "-dateFrom"} min={getTodaysDate()} defaultValue={getTodaysDate()} {...register("dateFrom")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
          </div>
          <div className="col-12 col-md-6 form-group d-flex flex-column">
            <label htmlFor={id + "-dateTo"} className="py-2 text-light fs-0-75rem-to-1rem">
              Departure date
            </label>
            <input type="date" id={id + "-dateTo"} min={getTomorrowsDate()} defaultValue={getTomorrowsDate()} {...register("dateTo")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
          </div>
          <div className="col-12 col-md-6 form-group d-flex flex-column">
            <label htmlFor={id + "-guests"} className="py-2 text-light fs-0-75rem-to-1rem">
              Number of guests
            </label>
            <input type="number" id={id + "-venueSearchGuestNumberVP"} defaultValue={1} {...register("guests")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
          </div>
        </div>
        <button className="main-button-red mt-2 mt-md-4 fs-1-125rem">SEARCH</button>
      </form>
    </div>
  );
}

export default SearchFormMain;
