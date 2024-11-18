import { VenueImageAndText, VenueBooking } from "./elements";
import { useParams } from "react-router-dom";
import { FrontPageLoader, FrontPageError } from "../frontpageContent";
import { getVenueEndpoint } from "../api/const";
import { useApi } from "../api";

const SingleVenuePage: React.FC = () => {
  // find id from url
  const { id } = useParams<{ id: string }>();

  //Api call for single venue data
  const { data, error, loading } = useApi<null, null>(getVenueEndpoint(id as string), "GET", null, true, true);

  if (loading) return <FrontPageLoader />;
  if (error) return <FrontPageError />;

  const venue = data;

  console.log(venue);
  return (
    <div className="container my-5">
      <div className="row text-center">
        <VenueImageAndText />
        <VenueBooking />
      </div>
    </div>
  );
};

export default SingleVenuePage;
