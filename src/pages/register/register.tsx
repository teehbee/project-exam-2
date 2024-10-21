import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto mt-5">
          <div className="custom-border-gray text-start p-3">
            <h1 className="fs-1-5rem-to-2rem fw-light">Register user</h1>
            <p className="fw-light fs-0-75rem-to-1rem pt-2">Choose whether to register as a customer or as a venue manager</p>
            <div className="d-flex justify-space-between">
              <button className="registration-button-gray w-50 me-1 fs-1-25rem-to-1-5rem fw-light">Customer</button>
              <button className="registration-button-gray w-50 m2-1 fs-1-25rem-to-1-5rem fw-light">Venue manager</button>
            </div>
            <button className="main-button-gray py-2 mt-5 mb-2">Continue</button>
            <p className="fw-light fs-0-75rem-to-1rem pt-4">
              Already have a user?{" "}
              <Link className="font-gray" to="/login">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
