import { useState } from "react";
import { SingleVenueProp } from "../../api/const/interfaces";
import { BookingCalendar, BookingNumberOfGuests, BookingSum } from "./";

const VenueBooking: React.FC<SingleVenueProp> = ({ venue }) => {
  console.log("calendar", venue.data.bookings);
  console.log("id is", venue.data.id);
  // state for number of guests
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  // Handler for dates from calendar

  const handleDateSelection = (fromDate: Date, toDate: Date) => {
    setFromDate(fromDate);
    setToDate(toDate);
    console.log("From date:", fromDate);
    console.log("To date", toDate);
  };

  // handling of change in number of guests to be displayed in booking sum
  const handleGuestsChange = (newNumberOfGuests: number) => {
    setNumberOfGuests(newNumberOfGuests);
  };
  return (
    <div className="col-12 col-md-7">
      <BookingCalendar venue={venue} onDateSelect={handleDateSelection} />
      <BookingNumberOfGuests onGuestsChange={handleGuestsChange} />
      <BookingSum numberOfGuests={numberOfGuests} />
    </div>
  );
};

export default VenueBooking;
