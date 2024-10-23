import { useRedirectTimer } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";

function LoginComplete() {
  useRedirectTimer("/", 2000);

  return <SuccessMessage title="Message sent" linkTo="/" />;
}

export default LoginComplete;
