import { SingleVenueProp } from "../api/const/interfaces";
import { formatDate } from "../utils";

const BookingsList: React.FC<SingleVenueProp> = ({ venue }) => {
  const bookingData = venue.data.bookings;

  return (
    <div className="col-10 col-md-6 mx-auto">
      <h2 className="secondary-font">Bookings</h2>
      {bookingData.length > 0 ? (
        bookingData.map((booking, index) => (
          <div key={index} className="d-flex justify-content-between pt-3 border-bottom-gray">
            <div>
              <p className="mb-1 fs-0-75rem-to-0-875rem">
                {booking.customer.name} - {booking.customer.email}
              </p>
            </div>
            <div className="d-flex">
              <div className="pe-2">
                <p className="mb-1 fs-0-75rem-to-0-875rem">
                  {formatDate(booking.dateFrom)} - {formatDate(booking.dateTo)} -
                </p>
              </div>
              <div>
                <p className="mb-1 fs-0-75rem-to-0-875rem">
                  {booking.guests} {booking.guests === 1 ? "guest" : "guests"}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="mb-1 pt-3 ">No bookings done at this venue</p>
      )}
    </div>
  );
};

export default BookingsList;
