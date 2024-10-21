import useRedirectTimer from "../../components/utils";
import SuccessMessage from "../../components/successMessages";

function LoginComplete() {
  useRedirectTimer("/", 2000);

  return <SuccessMessage title="Login successful" linkTo="/" />;
}

export default LoginComplete;
