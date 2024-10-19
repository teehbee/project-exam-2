import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  venueSearchName: yup.string().required("Search field cannot be empty"),
});

function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: { venueSearchName: string }) {
    console.log(data);
  }

  return (
    <div className="bg-dark-gray-color text-light search-form mx-auto px-4 py-5">
      <h2 className="secondary-font py-3 fs-1-5rem-to-2rem">Search for accommodation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <label htmlFor="venueSearchName" className="py-2 text-light">
          Enter search text here
        </label>
        <input type="text" id="venueSearchName" placeholder="Fagernes" {...register("venueSearchName")} className="mb-3" />
        {errors.venueSearchName && <p className="text-danger m-0">{errors.venueSearchName.message}</p>}
        <button className="main-button-red py-2 mt-2 mt-md-4 fs-1-125rem">SEARCH</button>
      </form>
    </div>
  );
}

export default SearchForm;
