import { VenueImageAndText } from "../venue/elements";
import BookingsList from "./BookingsList";
import BookingsButtons from "./BookingsButtons";

function BookingsContent() {
  return (
    <div className="container my-5">
      <div className="row text-center">
        <VenueImageAndText />
        <BookingsList />
      </div>
      <div>
        <BookingsButtons />
      </div>
    </div>
  );
}

export default BookingsContent;
