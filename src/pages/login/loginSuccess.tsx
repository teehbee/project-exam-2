import { useRedirectTimer } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";
import { useScrollToTop } from "../../components/utils";

function LoginComplete() {
  useScrollToTop();
  useRedirectTimer("/", 2000);

  return <SuccessMessage title="Login successful" linkTo="/" />;
}

export default LoginComplete;
