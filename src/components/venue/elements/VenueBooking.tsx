import { BookingCalendar, BookingNumberOfGuests } from "./";

function VenueBooking() {
  return (
    <div className="col-12 col-md-7">
      <BookingCalendar />
      <BookingNumberOfGuests />
    </div>
  );
}

export default VenueBooking;
