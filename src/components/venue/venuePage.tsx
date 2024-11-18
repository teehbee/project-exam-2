import { VenueImageAndText, VenueBooking } from "./elements";
import { useParams } from "react-router-dom";
// import { VENUE_ENDPOINT } from "../api/const/variables";
// import { useApi } from "../api";

const SingleVenuePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
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
