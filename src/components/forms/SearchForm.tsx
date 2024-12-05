import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFrontpageSearchData } from "../../redux/actions/frontpageSearchActions";
import { frontpageSearchSchema } from "./schemas";
import { getTodaysDate } from "../utils";
import useDateAdjust from "../utils/useDateAdjust";
import { SearchFormInputFP } from "../api/const/interfaces";

function SearchForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SearchFormInputFP>({
    resolver: yupResolver(frontpageSearchSchema),
  });

  // State and watch for updating dateTo automatically to not be earlier then arrival date

  const dateFrom = watch("dateFrom");

  const minDateTo = useDateAdjust(dateFrom, setValue);

  const onSubmit: SubmitHandler<SearchFormInputFP> = (frontpageSearch) => {
    const convertedDates = {
      dateFrom: new Date(frontpageSearch.dateFrom).toISOString(),
      departureDate: new Date(frontpageSearch.dateTo).toISOString(),
    };

    const updatedFrontpageSearch = { ...frontpageSearch, ...convertedDates };

    dispatch(setFrontpageSearchData(updatedFrontpageSearch));
    navigate("/venues");
  };

  return (
    <div className="bg-dark-gray-color text-light search-form mx-auto px-4 pb-5 pt-3 form-box-shadow-no-br">
      <h2 className="secondary-font py-2 fs-1-5rem-to-2rem m-0">Search for accommodation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <label htmlFor="MainSearchLocation" className="py-2 text-light fs-0-75rem-to-1rem">
          Destination
        </label>
        <input type="text" id="MainSearchLocation" placeholder="Where do you want to go?" {...register("location")} className="mb-1 fs-0-75rem-to-0-875rem text-light" />
        {errors.location && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.location.message}</p>}

        <label htmlFor="MainSearchDateFrom" className="py-2 text-light fs-0-75rem-to-1rem">
          Arrival date
        </label>
        <input type="date" id="MainSearchDateFrom" min={getTodaysDate()} defaultValue={getTodaysDate()} {...register("dateFrom")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.dateFrom && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.dateFrom.message}</p>}

        <label htmlFor="MainSearchDateTo" className="py-2 text-light fs-0-75rem-to-1rem">
          Departure date
        </label>
        <input type="date" id="MainSearchDateTo" min={minDateTo} defaultValue={minDateTo} {...register("dateTo")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.dateTo && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.dateTo.message}</p>}

        <label htmlFor="MainSearchGuests" className="py-2 text-light fs-0-75rem-to-1rem">
          Number of guests
        </label>
        <input type="number" id="MainSearchGuests" defaultValue={1} {...register("guests")} className="date-search-input mb-1 fs-0-75rem-to-0-875rem text-light pe-2" />
        {errors.guests && <p className="text-danger m-0 fs-0-75rem-to-0-875rem">{errors.guests.message}</p>}

        <button className="main-button-red mt-2 mt-md-4 fs-1-125rem">SEARCH</button>
      </form>
    </div>
  );
}

export default SearchForm;
