import { useScrollToTop } from "../components/utils";
import { BookingSuccessButtons, BookingSuccessContent } from "../components/booking";
import { Helmet, HelmetProvider } from "react-helmet-async";

function BookingSuccess() {
  useScrollToTop();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Booking Confirmed - Holidaze</title>
          <meta name="description" content="Your booking has been successfully confirmed! Thank you for choosing Holidaze. We hope you have a wonderful stay. Check your email for the booking details and further instructions." />
        </Helmet>
      </HelmetProvider>
      <BookingSuccessContent />
      <BookingSuccessButtons />
    </>
  );
}

export default BookingSuccess;
