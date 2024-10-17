import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  venueSearchLocation: yup.string().required("Location is required"),
  venueSearchStartDate: yup.date().required("Start date is required"),
  venueSearchEndDate: yup.date().required("End date is required"),
  venueSearchNrGuests: yup.number().required("Number of guests is required"),
});

function SearchForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setIsSubmitted(true);
  }

  return (
    <div className="bg-dark-gray-color text-light search-form mx-auto px-4 py-5">
      <h2 className="secondary-font py-3 fs-1-5rem-to-2rem">Book accommodation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <label htmlFor="venueSearchLocation">Location</label>
        <input type="text" id="venueSearchLocation" placeholder="Fagernes" {...register("venueSearchLocation")} className="mb-2"/>
        {errors.venueSearchLocation && <p className="text-danger">{errors.venueSearchLocation.message}</p>}
        <label htmlFor="venueSearchStartDate">Arrival date</label>
        <input type="date" value="2024-10-16" id="venueSearchStartDate" {...register("venueSearchStartDate")} className="mb-2"/>
        {errors.venueSearchStartDate && <p className="text-danger">{errors.venueSearchStartDate.message}</p>}
        <label htmlFor="venueSearchEndDate">Checkout date</label>
        <input type="date" value="2024-10-16" id="venueSearchEndDate" {...register("venueSearchEndDate")} className="mb-2"/>
       {errors.venueSearchEndDate && <p className="text-danger">{errors.venueSearchEndDate.message}</p>}
        <p className="fw-light d-none">Number of nights</p>
        <label htmlFor="venueSearchNrGuests">Number of guests</label>
        <input type="number" id="venueSearchNrGuests" {...register("venueSearchNrGuests")} placeholder="1" min="0" max="100" className="mb-2"/>
        {errors.venueSearchNrGuests && <p className="text-danger">{errors.venueSearchNrGuests.message}</p>}
        <button className="main-button-red py-2 mt-3 fs-1-125rem">SEARCH</button>
      </form>
    </div>
  )
}

export default SearchForm;