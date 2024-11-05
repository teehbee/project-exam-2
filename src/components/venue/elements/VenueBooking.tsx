import { useState } from "react";
import { BookingCalendar, BookingNumberOfGuests, BookingSum } from "./";

function VenueBooking() {
  // state for number of guests
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  // handling of change in number of guests to be displayed in booking sum
  const handleGuestsChange = (newNumberOfGuests: number) => {
    setNumberOfGuests(newNumberOfGuests);
  };
  return (
    <div className="col-12 col-md-7">
      <BookingCalendar />
      <BookingNumberOfGuests onGuestsChange={handleGuestsChange} />
      <BookingSum numberOfGuests={numberOfGuests} />
    </div>
  );
}

export default VenueBooking;
