import { LoginForm } from "../../components/forms";
import { useScrollToTop } from "../../components/utils";

function Login() {
  useScrollToTop();
  return <LoginForm />;
}

export default Login;
