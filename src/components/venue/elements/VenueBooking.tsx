import { useState } from "react";
import { SingleVenueProp } from "../../api/const/interfaces";
import { BookingCalendar, BookingNumberOfGuests, BookingSum } from "./";

const VenueBooking: React.FC<SingleVenueProp> = ({ venue }) => {
  console.log("calendar", venue.data.bookings);
  // state for number of guests
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  // handling of change in number of guests to be displayed in booking sum
  const handleGuestsChange = (newNumberOfGuests: number) => {
    setNumberOfGuests(newNumberOfGuests);
  };
  return (
    <div className="col-12 col-md-7">
      <BookingCalendar venue={venue} />
      <BookingNumberOfGuests onGuestsChange={handleGuestsChange} />
      <BookingSum numberOfGuests={numberOfGuests} />
    </div>
  );
};

export default VenueBooking;
