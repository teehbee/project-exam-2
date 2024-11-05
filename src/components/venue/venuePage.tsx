import { VenueImageAndText, VenueCalendar } from "./elements";

function SingleVenuePage() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <VenueImageAndText />
        <VenueCalendar />
      </div>
    </div>
  );
}

export default SingleVenuePage;
