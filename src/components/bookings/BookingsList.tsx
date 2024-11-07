import BookingsListItem from "./BookingsListItem";

function BookingsList() {
  return (
    <div className="col-12 col-md-6">
      <h2 className="secondary-font">Bookings</h2>
      <BookingsListItem />
      <BookingsListItem />
      <BookingsListItem />
      <BookingsListItem />
      <BookingsListItem />
      <BookingsListItem />
    </div>
  );
}

export default BookingsList;
