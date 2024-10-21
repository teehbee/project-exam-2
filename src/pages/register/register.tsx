import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setVenueManager } from "../../redux/actions/registerActions";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";

const Register: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isVenueManager = useSelector((state: RootState) => state.register.isVenueManager);

  const handleButtonClick = (isManager: boolean) => {
    dispatch(setVenueManager(isManager));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto mt-5">
          <div className="custom-border-gray text-start p-3">
            <h1 className="fs-1-5rem-to-2rem fw-light">Register user</h1>
            <p className="fw-light fs-0-75rem-to-1rem pt-2">Choose whether to register as a customer or as a venue manager</p>
            <div className="d-flex justify-space-between">
              <button className={`registration-button-gray w-50 me-1 fs-1-25rem-to-1-5rem fw-light ${!isVenueManager ? "reg-button-clicked" : ""}`} onClick={() => handleButtonClick(false)}>
                Customer
              </button>

              <button className={`registration-button-gray w-50 m2-1 fs-1-25rem-to-1-5rem fw-light ${isVenueManager ? "reg-button-clicked" : ""}`} onClick={() => handleButtonClick(true)}>
                Venue manager
              </button>
            </div>
            <Link to="/registration-form">
              <button className="main-button-gray py-2 mt-5 mb-2">Continue</button>
            </Link>
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
};

export default Register;
