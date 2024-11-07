function BookingsListItem() {
  return (
    <div className="d-flex justify-content-between pt-3 border-bottom-gray">
      <div>
        <p className="mb-1">Name of renter - Email address</p>
      </div>
      <div className="d-flex">
        <div className="pe-2">
          <p className="mb-1">From date - To date</p>
        </div>
        <div>
          <p className="mb-1">Number of guests</p>
        </div>
      </div>
    </div>
  );
}

export default BookingsListItem;
