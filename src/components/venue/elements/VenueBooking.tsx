import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SingleVenueProp, bookingDate } from "../../api/const/interfaces";
import { BookingCalendar, BookingNumberOfGuests, BookingSum } from "./";
import { formatDate, useCalculateTotalCost } from "../../utils";
import { useApi } from "../../api";
import { BOOK_VENUE_ENDPOINT } from "../../api/const";

const VenueBooking: React.FC<SingleVenueProp> = ({ venue }) => {
  const navigate = useNavigate();

  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [fromDate, setFromDate] = useState<string | null>(null);
  const [toDate, setToDate] = useState<string | null>(null);
  const [bookingloading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingData, setBookingData] = useState<bookingDate | null>(null);

  const id = venue.data.id;
  const venuePrice = venue.data.price;

  // Convert dates for calculating cost of stay

  const formattedFromDate = fromDate ? formatDate(fromDate) : null;
  const formattedToDate = toDate ? formatDate(toDate) : null;

  // Calculate cost of stay

  const { totalCost, numberOfNights } = useCalculateTotalCost(formattedFromDate || "", formattedToDate || "", venuePrice);

  // Handler for receiving and converting booking dates from calendar component

  const handleBookingDates = (from: string | null, to: string | null) => {
    setFromDate(from);
    setToDate(to);
  };

  // handling of change in number of guests to be displayed in booking sum
  const handleGuestsChange = (newNumberOfGuests: number) => {
    setNumberOfGuests(newNumberOfGuests);
  };

  // Api call for booking venue

  useEffect(() => {
    if (isBooking && fromDate && toDate) {
      const bookingDetails = {
        venueId: id,
        dateFrom: fromDate,
        dateTo: toDate,
        guests: numberOfGuests,
      };
      setBookingData(bookingDetails);
    }
  }, [isBooking, fromDate, toDate, id, numberOfGuests]);

  const { data: responseData, error, loading } = useApi(BOOK_VENUE_ENDPOINT, "POST", bookingData, true, false);

  useEffect(() => {
    if (loading) {
      setBookingLoading(true);
    }
    if (error) {
      setBookingError("Something went wrong with you booking, please try again later");
      setBookingLoading(false);
    }
    if (responseData) {
      setIsBooking(false);
      setBookingLoading(false);
      setBookingError(null);
      navigate(`/success/${id}`);
    }
  }, [error, responseData, loading, navigate, id]);

  // Trigger api call when booking button is clicked or return
  // error not both dates are selected

  const handleBooking = () => {
    if (!fromDate || !toDate) {
      setBookingError("Select departure date before you can proceed with booking");
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
