import { useScrollToTop } from "../components/utils";
import { BookingSuccessButtons, BookingSuccessContent } from "../components/booking";

function BookingSuccess() {
  useScrollToTop();
  return (
    <>
      <BookingSuccessContent />
      <BookingSuccessButtons />
    </>
  );
}

export default BookingSuccess;
