import { VenueImageAndText, VenueBooking } from "./elements";
import { useParams } from "react-router-dom";
import { useApi } from "../api";

const SingleVenuePage: React.FC = () => {
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
