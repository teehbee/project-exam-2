import { useScrollToTop } from "../../components/utils";
import { BookingsContent } from "../../components/bookings";
import { Helmet } from "react-helmet";

function VenueManagerBookings() {
  useScrollToTop();
  return (
    <>
      <Helmet>
        <title>Manage Upcoming Bookings - Holidaze Venue Manager</title>
        <meta name="description" content="Stay on top of your properties' reservations with Holidaze. View and manage all upcoming bookings made by guests on the properties you administer. Ensure a smooth experience for your guests and streamline your management tasks." />
      </Helmet>
      <BookingsContent />
    </>
  );
}

export default VenueManagerBookings;
