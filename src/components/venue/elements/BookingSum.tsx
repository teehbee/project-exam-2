import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

interface BookingSumProps {
  numberOfGuests: number;
  sum: number;
  nights: number;
  onBooking: () => void;
  loading: boolean;
  error: string | null;
}

function BookingSum({ numberOfGuests, nights, sum, onBooking, loading, error }: BookingSumProps) {
  const loggedIn = localStorage.getItem("loggedIn");
  return (
    <div className="form-box-shadow px-3 py-4 mt-4 booking-sum-container mx-auto text-start">
      <h3 className="fs-1-25rem-to-1-5rem pb-3">Price of stay: NOK {sum},-</h3>
      <p className="fs-1rem-to-1-25rem fw-light">Number of nights: {nights}</p>
      <p className="fs-1rem-to-1-25rem pb-3 fw-light">Number of people: {numberOfGuests}</p>
      {loggedIn === "true" ? (
        <button className="main-button-red w-100" onClick={onBooking} disabled={loading}>
          {loading ? <Spinner className="ms-1" animation="border" size="sm" variant="light" /> : "BOOK NOW"}
        </button>
      ) : (
        <>
          <p className="text-danger mb-2">You must be logged in to book this venue</p>
          <Link to="/login" className="font-gray">
            Login here
          </Link>
        </>
      )}
      {error && <p className="text-danger pt-3">{error}</p>}
    </div>
  );
}

export default BookingSum;
