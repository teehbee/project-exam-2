import { useState } from "react";
import { SingleVenueProp } from "../../api/const/interfaces";
import { BookingCalendar, BookingNumberOfGuests, BookingSum } from "./";
import { formatDate } from "../../utils";
import { useCalculateTotalCost } from "../../utils";

const VenueBooking: React.FC<SingleVenueProp> = ({ venue }) => {
  console.log("id is", venue.data.id);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [fromDate, setFromDate] = useState<string | null>(null);
  const [toDate, setToDate] = useState<string | null>(null);

  const venuePrice = venue.data.price;

  const formattedFromDate = fromDate ? formatDate(fromDate) : null;
  const formattedToDate = toDate ? formatDate(toDate) : null;
  const { totalCost, numberOfNights } = useCalculateTotalCost(formattedFromDate || "", formattedToDate || "", venuePrice);

  const handleBookingDates = (from: string | null, to: string | null) => {
    setFromDate(from);
    setToDate(to);
  };

  // console.log("From Date:", fromDate);
  // console.log("To Date:", toDate);
  // console.log("nights", numberOfNights);

  // handling of change in number of guests to be displayed in booking sum
  const handleGuestsChange = (newNumberOfGuests: number) => {
    setNumberOfGuests(newNumberOfGuests);
  };
  return (
    <div className="col-12 col-md-7">
      <BookingCalendar venue={venue} onDateChange={handleBookingDates} />
      <BookingNumberOfGuests onGuestsChange={handleGuestsChange} />
      <BookingSum numberOfGuests={numberOfGuests} sum={totalCost} nights={numberOfNights} />
    </div>
  );
};

export default VenueBooking;
