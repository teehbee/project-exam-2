import { VenueImageAndText, VenueBooking } from "./elements";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FrontPageLoader, FrontPageError } from "../frontpageContent";
import { getVenueEndpoint } from "../api/const";
import { useApi } from "../api";
import { SingleVenueResponse } from "../api/const/interfaces";

interface SingleVenuePageProps {
  onSendData: (data: SingleVenueResponse) => void;
}

const SingleVenuePage: React.FC<SingleVenuePageProps> = ({ onSendData }) => {
  const { id } = useParams<{ id: string }>();

  //Api call for single venue data
  const { data, error, loading } = useApi<null, SingleVenueResponse>(getVenueEndpoint(id as string), "GET", null, true, true);

  // Make sure data for dynamic meta data is only sent once the component is rendered to avoid errors
  useEffect(() => {
    if (data) {
      onSendData(data);
    }
  }, [data, onSendData]);

  if (loading) return <FrontPageLoader />;
  if (error) return <FrontPageError />;

  if (!data) {
    return <FrontPageError />;
  }

  onSendData(data);

  return (
    <div className="container my-5">
      <div className="row text-center">
        <VenueImageAndText venue={data} />
        <VenueBooking venue={data} />
      </div>
    </div>
  );
};

export default SingleVenuePage;
