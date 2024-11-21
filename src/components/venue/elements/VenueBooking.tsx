import { useState, useEffect } from "react";
import { SingleVenueProp } from "../../api/const/interfaces";
import { BookingCalendar, BookingNumberOfGuests, BookingSum } from "./";
import { formatDate } from "../../utils";
import { useApi } from "../../api";
import { BOOK_VENUE_ENDPOINT } from "../../api/const";
import { useCalculateTotalCost } from "../../utils";

const VenueBooking: React.FC<SingleVenueProp> = ({ venue }) => {
  console.log("id is", venue.data.id);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [fromDate, setFromDate] = useState<string | null>(null);
  const [toDate, setToDate] = useState<string | null>(null);

  const venueId = venue.data.id;
  const venuePrice = venue.data.price;

  const formattedFromDate = fromDate ? formatDate(fromDate) : null;
  const formattedToDate = toDate ? formatDate(toDate) : null;
  const { totalCost, numberOfNights } = useCalculateTotalCost(formattedFromDate || "", formattedToDate || "", venuePrice);

  console.log(venueId);
  console.log(formattedFromDate);
  console.log(formattedToDate);
  console.log(numberOfGuests);

  const handleBookingDates = (from: string | null, to: string | null) => {
    setFromDate(from);
    setToDate(to);
  };

  // handling of change in number of guests to be displayed in booking sum
  const handleGuestsChange = (newNumberOfGuests: number) => {
    setNumberOfGuests(newNumberOfGuests);
  };

  const bookingData = {
    venueId,
    fromDate: formattedFromDate,
    toDate: formattedToDate,
    numberOfGuests,
  };

  return (
    <div className="col-12 col-md-7">
      <BookingCalendar venue={venue} onDateChange={handleBookingDates} />
      <BookingNumberOfGuests onGuestsChange={handleGuestsChange} />
      <BookingSum numberOfGuests={numberOfGuests} sum={totalCost} nights={numberOfNights} onBooking={handleBooking} />
    </div>
  );
};

export default VenueBooking;
