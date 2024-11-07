import { Link } from "react-router-dom";

function BookingSuccessButtons() {
  return (
    <div className="container booking-success-button-container text-center pb-5 d-flex justify-content-center gap-1 flex-column flex-md-row">
      <Link className="flex-fill" to="profile">
        <button className="main-button-gray">Your profile</button>
      </Link>
      <Link className="flex-fill mt-3 mt-md-0" to="/">
        <button className="main-button-gray">Back to homepage</button>
      </Link>
    </div>
  );
}

export default BookingSuccessButtons;
