import { RegistrationForm } from "../../components/forms";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const RegisterFormPage: React.FC = () => {
  const isVenueManager = useSelector((state: RootState) => state.register.isVenueManager);
  console.log("Is venue manager", isVenueManager);
  return <RegistrationForm />;
};

export default RegisterFormPage;
