import { useScrollToTop } from "../../components/utils";
import { BookingsContent } from "../../components/bookings";

function VenueManagerBookings() {
  useScrollToTop();
  return <BookingsContent />;
}

export default VenueManagerBookings;
