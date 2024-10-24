import SuccessMessage from "../../components/successMessages";
import { useScrollToTop } from "../../components/utils";
import { useRedirectTimer } from "../../components/utils";

function RegistrationComplete() {
  useScrollToTop();
  useRedirectTimer("/", 2000);
  return <SuccessMessage title="Registration complete" linkTo="/" />;
}

export default RegistrationComplete;
