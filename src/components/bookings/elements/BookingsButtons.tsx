import { Link } from "react-router-dom";
import { SingleVenueProp } from "../../api/const/interfaces";

const BookingsButtons: React.FC<SingleVenueProp> = (venue) => {
  const bookingData = venue.venue.data;
  return (
    <div className="col-12 col-md-11 bookings-buttons-container d-flex justify-content-start gap-1 flex-column flex-md-row pt-3 mx-auto">
      <Link className="flex-fill" to={`/update-venue/${bookingData.id}`}>
        <button className="main-button-gray">Update venue</button>
      </Link>
      <Link className="flex-fill mt-3 mt-md-0" to="/">
        <button className="main-button-gray">Delete venue</button>
      </Link>
    </div>
  );
};

export default BookingsButtons;
