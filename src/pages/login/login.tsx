import { LoginForm } from "../../components/forms";
import { useScrollToTop } from "../../components/utils";
import { Helmet } from "react-helmet";

function Login() {
  useScrollToTop();
  return (
    <>
      <Helmet>
        <title>Log In to Your Account - Holidaze</title>
        <meta name="description" content="Access your Holidaze account to manage your bookings, listings, and personal information. Log in now to continue enjoying our seamless accommodation services." />
      </Helmet>
      <LoginForm />
    </>
  );
}

export default Login;
