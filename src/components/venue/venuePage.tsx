import { VenueImageAndText, VenueBooking } from "./elements";

function SingleVenuePage() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <VenueImageAndText />
        <VenueBooking />
      </div>
    </div>
  );
}

export default SingleVenuePage;
