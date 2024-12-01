import { VenueImageAndText } from "../venue/elements";
import BookingsList from "./BookingsList";
import BookingsButtons from "./BookingsButtons";
import { useParams } from "react-router-dom";
import { FrontPageLoader, FrontPageError } from "../frontpageContent";
import { getVenueEndpoint } from "../api/const";
import { useApi } from "../api";
import { SingleVenueResponse } from "../api/const/interfaces";

const BookingsContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useApi<null, SingleVenueResponse>(getVenueEndpoint(id as string), "GET", null, true, true);

  if (loading) return <FrontPageLoader />;
  if (error) return <FrontPageError />;

  if (!data) {
    return <FrontPageError />;
  }

  return (
    <div className="container my-5">
      <div className="row text-center">
        <VenueImageAndText venue={data} />
        <BookingsList venue={data} />
      </div>
      <div>
        <BookingsButtons venue={data} />
      </div>
    </div>
  );
};

export default BookingsContent;
