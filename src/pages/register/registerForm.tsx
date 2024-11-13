import { RegistrationForm } from "../../components/forms";
import { useScrollToTop } from "../../components/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const RegisterFormPage: React.FC = () => {
  useScrollToTop();
  const isVenueManager = useSelector((state: RootState) => state.register.isVenueManager);
  return <RegistrationForm isVenueManager={isVenueManager} />;
};

export default RegisterFormPage;
