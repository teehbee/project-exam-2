import { Link } from "react-router-dom";

interface RegistrationPageProps {
  isVenueManager: boolean;
  onButtonClick: (isManager: boolean) => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ isVenueManager, onButtonClick }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto my-5">
          <div className="form-box-shadow text-start p-4">
            <div className="pb-1 pb-md-2">
              <Link className="pb-3 font-gray fs-0-75rem-to-1rem text-decoration-none " to="/">
                Back to home page
              </Link>
            </div>
            <h1 className="fs-1-5rem-to-2rem">Register user</h1>
            <p className="fs-0-75rem-to-1rem pt-2">Choose whether to register as a customer or as a venue manager</p>
            <div className="d-flex justify-space-between">
              <button className={`form-box-shadow registration-button-gray w-50 me-1 fs-1-25rem-to-1-5rem ${!isVenueManager ? "reg-button-clicked" : ""}`} onClick={() => onButtonClick(false)}>
                Customer
              </button>

              <button className={`form-box-shadow registration-button-gray w-50 m2-1 fs-1-25rem-to-1-5rem ${isVenueManager ? "reg-button-clicked" : ""}`} onClick={() => onButtonClick(true)}>
                Venue manager
              </button>
            </div>
            <Link to="/registration-form">
              <button className="main-button-gray py-2 mt-5 mb-2">Continue</button>
            </Link>
            <p className="fs-0-75rem-to-1rem pt-4">
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
};

export default RegistrationPage;
