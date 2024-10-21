import SuccessMessage from "../../components/successMessages";
import useRedirectTimer from "../../components/utils";

function RegistrationComplete() {
  useRedirectTimer("/", 2000);
  return <SuccessMessage title="Registration complete" linkTo="/" />;
}

export default RegistrationComplete;
