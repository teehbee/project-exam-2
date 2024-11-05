import { BookingCalendar, BookingNumberOfGuests } from "./";

function VenueBooking() {
  const handleGuestsChange = (numberOfGuests: number) => {
    console.log("Number of guests:", numberOfGuests);
  };
  return (
    <div className="col-12 col-md-7">
      <BookingCalendar />
      <BookingNumberOfGuests onGuestsChange={handleGuestsChange} />
    </div>
  );
}

export default VenueBooking;
