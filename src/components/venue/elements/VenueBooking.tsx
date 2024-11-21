import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SingleVenueProp, bookingDate } from "../../api/const/interfaces";
import { BookingCalendar, BookingNumberOfGuests, BookingSum } from "./";
import { formatDate } from "../../utils";
import { useApi } from "../../api";
import { BOOK_VENUE_ENDPOINT } from "../../api/const";
import { useCalculateTotalCost } from "../../utils";

const VenueBooking: React.FC<SingleVenueProp> = ({ venue }) => {
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [fromDate, setFromDate] = useState<string | null>(null);
  const [toDate, setToDate] = useState<string | null>(null);
  const [bookingloading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);

  // State to trigger booking call to api

  const [isBooking, setIsBooking] = useState(false);
  const [bookingData, setBookingData] = useState<bookingDate | null>(null);

  const venueId = venue.data.id;
  const venuePrice = venue.data.price;

  const navigate = useNavigate();

  const formattedFromDate = fromDate ? formatDate(fromDate) : null;
  const formattedToDate = toDate ? formatDate(toDate) : null;
  const { totalCost, numberOfNights } = useCalculateTotalCost(formattedFromDate || "", formattedToDate || "", venuePrice);

  const handleBookingDates = (from: string | null, to: string | null) => {
    setFromDate(from);
    setToDate(to);
  };

  // handling of change in number of guests to be displayed in booking sum
  const handleGuestsChange = (newNumberOfGuests: number) => {
    setNumberOfGuests(newNumberOfGuests);
  };

  // Api call

  useEffect(() => {
    if (isBooking && fromDate && toDate) {
      const bookingDetails = {
        venueId,
        dateFrom: fromDate,
        dateTo: toDate,
        guests: numberOfGuests,
      };
      // updates the bookingData state when isBooking is triggered
      setBookingData(bookingDetails);
    }
  }, [isBooking, fromDate, toDate, venueId, numberOfGuests]);

  const { data: responseData, error, loading } = useApi(BOOK_VENUE_ENDPOINT, "POST", bookingData, true, false);

  useEffect(() => {
    if (loading) {
      setBookingLoading(true);
    }
    if (error) {
      console.error("Booking, error", error);
      setBookingError("Something went wrong with you booking, please try again later");
      setBookingLoading(false);
    }
    if (responseData) {
      console.log("Booking successful", responseData);
      setIsBooking(false);
      setBookingLoading(false);
      setBookingError(null);
      navigate("/success");
    }
  }, [error, responseData, loading, navigate]);

  // Trigger api call when booking button is clicked

  const handleBooking = () => {
    if (!fromDate || !toDate) {
      console.log("Please select both dates");
      return;
    }
    setIsBooking(true);
  };

  return (
    <div className="col-12 col-md-7">
      <BookingCalendar venue={venue} onDateChange={handleBookingDates} />
      <BookingNumberOfGuests onGuestsChange={handleGuestsChange} />
      <BookingSum numberOfGuests={numberOfGuests} sum={totalCost} nights={numberOfNights} onBooking={handleBooking} loading={bookingloading} error={bookingError} />
    </div>
  );
};

export default VenueBooking;
