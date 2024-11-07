import RegistrationPage from "../../components/registration";
import { useDispatch, useSelector } from "react-redux";
import { setVenueManager } from "../../redux/actions/registerActions";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";
import { useScrollToTop } from "../../components/utils";

const Register: React.FC = () => {
  useScrollToTop();
  const dispatch: AppDispatch = useDispatch();
  const isVenueManager = useSelector((state: RootState) => state.register.isVenueManager);

  const handleButtonClick = (isManager: boolean) => {
    dispatch(setVenueManager(isManager));
  };

  return <RegistrationPage isVenueManager={isVenueManager} onButtonClick={handleButtonClick} />;
};

export default Register;
