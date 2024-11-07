import { useScrollToTop } from "../components/utils";
import BookingSuccessContent from "../components/booking";

function BookingSuccess() {
  useScrollToTop();
  return <BookingSuccessContent />;
}

export default BookingSuccess;
