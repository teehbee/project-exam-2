import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFrontpageSearchData } from "../../redux/actions/frontpageSearchActions";
import * as yup from "yup";
import { getTodaysDate, getTomorrowsDate } from "../utils";

// Define the schema for form validation
const schema = yup.object().shape({
  location: yup.string().required("Destination is required"),
  arrivalDate: yup
    .string()
    .required("Arrival date is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (yyyy-mm-dd)"),
  departureDate: yup
    .string()
    .required("Departure date is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (yyyy-mm-dd)"),
  numberOfGuests: yup
    .number()
    .required("Number of guests is required")
    .transform((_, originalValue) => (originalValue === "" ? undefined : Number(originalValue))),
});

// Define types for SearchFormInputFP and SerializedSearchFormInputFP

export interface SearchFormInputFP {
  location: string;
  arrivalDate: string;
  departureDate: string;
  numberOfGuests: number;
}

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

  const onSubmit: SubmitHandler<SearchFormInputFP> = (frontpageSearch) => {
    const convertedDates = {
      arrivalDate: new Date(frontpageSearch.arrivalDate).toISOString(),
      departureDate: new Date(frontpageSearch.departureDate).toISOString(),
    };

    const updatedFrontpageSearch = { ...frontpageSearch, ...convertedDates };

    dispatch(setFrontpageSearchData(updatedFrontpageSearch));
    navigate("/venues");
  };

  return (
    <div className="bg-dark-gray-color text-light search-form mx-auto px-4 pb-5 pt-3 form-box-shadow-no-br">
      <h2 className="secondary-font py-2 fs-1-5rem-to-2rem m-0">Search for accommodation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <label htmlFor="venueSearchNameFP" className="py-2 text-light fs-0-75rem-to-1rem">
          Destination
        </label>
        <input type="text" id="venueSearchNameFP" placeholder="Where do you want to go?" {...register("location")} className="mb-1 fs-0-75rem-to-0-875rem text-light" />
        {errors.location && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.location.message}</p>}

        <label htmlFor="venueSearchArrFP" className="py-2 text-light fs-0-75rem-to-1rem">
          Arrival date
        </label>
        <input type="date" id="venueSearchArrFP" min={getTodaysDate()} defaultValue={getTodaysDate()} {...register("arrivalDate")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.arrivalDate && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.arrivalDate.message}</p>}

        <label htmlFor="venueSearchDepFP" className="py-2 text-light fs-0-75rem-to-1rem">
          Departure date
        </label>
        <input type="date" id="venueSearchDepFP" min={getTomorrowsDate()} defaultValue={getTomorrowsDate()} {...register("departureDate")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.departureDate && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.departureDate.message}</p>}

        <label htmlFor="venueSearchNumberFP" className="py-2 text-light fs-0-75rem-to-1rem">
          Number of guests
        </label>
        <input type="number" id="venueSearchNumberFP" defaultValue={1} {...register("numberOfGuests")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.numberOfGuests && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.numberOfGuests.message}</p>}

        <button className="main-button-red mt-2 mt-md-4 fs-1-125rem">SEARCH</button>
      </form>
    </div>
  );
}

export default SearchForm;
