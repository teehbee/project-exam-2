import { VenueImageAndText, VenueBooking } from "./elements";
import { useParams } from "react-router-dom";
import { FrontPageLoader, FrontPageError } from "../frontpageContent";
import { getVenueEndpoint } from "../api/const";
import { useApi } from "../api";
import { SingleVenueResponse } from "../api/const/interfaces";

const SingleVenuePage: React.FC = () => {
  // find id from url
  const { id } = useParams<{ id: string }>();

  //Api call for single venue data
  const { data, error, loading } = useApi<null, SingleVenueResponse>(getVenueEndpoint(id as string), "GET", null, true, true);

  if (loading) return <FrontPageLoader />;
  if (error) return <FrontPageError />;

  console.log("data is", data);
  return (
    <div className="container my-5">
      <div className="row text-center">
        <VenueImageAndText venue={data} />
        <VenueBooking />
      </div>
    </div>
  );
};

export default SingleVenuePage;
