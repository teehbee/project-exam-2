function BookingSum({ numberOfGuests }) {
  return (
    <div className="form-box-shadow px-3 py-4 mt-4 booking-sum-container mx-auto text-start">
      <h3 className="fs-1-25rem-to-1-5rem pb-3">Price of stay: NOK 0,-</h3>
      <p className="fs-1rem-to-1-25rem fw-light">Number of nights: 0</p>
      <p className="fs-1rem-to-1-25rem pb-3 fw-light">Number of people: {numberOfGuests}</p>
      <button className="main-button-red w-100">BOOK NOW</button>
    </div>
  );
}

export default BookingSum;
