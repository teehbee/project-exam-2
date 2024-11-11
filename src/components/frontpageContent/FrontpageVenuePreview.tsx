import { Link } from "react-router-dom";
import { useApi } from "../api";
import { Venue } from "../api/interfaces";
import { VENUES_ENDPOINT } from "../api/const";

function FrontpageVenuePreview() {
  const { data, error, loading } = useApi<{ data: Venue[] }>(VENUES_ENDPOINT, "GET", null, false);

  console.log("Fetched Data:", data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const venues = data?.data || [];

  return (
    <section className="container text-center mt-125px mt-md-4">
      <h2 className="pb-5 py-md-5 secondary-font fs-1-5rem-to-2-5rem">Find your next getaway</h2>
      <div className="row pb-5 gy-4">
        {venues.slice(0, 4).map((venue) => (
          <div key={venue.id} className="col-6 col-lg-3 fp-img-container">
            <div className="position-relative">
              <Link to={`venue/${venue.id}`}>
                <img className="img-fluid form-box-shadow-no-br" src={venue.media[0]?.url} alt={venue.media[0]?.alt || "Venue image"} />
                <div className="fp-img-overlay">
                  <div className="fp-img-overlay-text text-start ps-3">
                    <p className="secondary-font text-light">{venue.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-end">
        <Link className="text-decoration-none" to="venues#venues-list">
          <p className="secondary-font text-decoration-none dark-font fs-1rem-to-1-5rem">See full list..</p>
        </Link>
      </div>
    </section>
  );
}

export default FrontpageVenuePreview;
