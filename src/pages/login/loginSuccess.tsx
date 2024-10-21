import useRedirectTimer from "../../components/utils";
import LoginSuccessMessage from "../../components/login";

function LoginComplete() {
  useRedirectTimer("/", 2000);

  return <LoginSuccessMessage />;
}

export default LoginComplete;
