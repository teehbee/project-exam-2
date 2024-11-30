import RegistrationPage from "../../components/registration";
import { useDispatch, useSelector } from "react-redux";
import { setVenueManager } from "../../redux/actions/registerActions";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";
import { useScrollToTop } from "../../components/utils";
import { Helmet } from "react-helmet";

const Register: React.FC = () => {
  useScrollToTop();
  const dispatch: AppDispatch = useDispatch();
  const isVenueManager = useSelector((state: RootState) => state.register.isVenueManager);

  const handleButtonClick = (isManager: boolean) => {
    dispatch(setVenueManager(isManager));
  };

  return (
    <>
      <Helmet>
        <title>Register on Holidaze - Customer or Venue Manager</title>
        <meta name="description" content="Join Holidaze today! Register as a customer to book amazing accommodations or sign up as a venue manager to list your properties. Start your journey with us and enjoy a seamless experience" />
      </Helmet>
      <RegistrationPage isVenueManager={isVenueManager} onButtonClick={handleButtonClick} />
    </>
  );
};

export default Register;
