import { useRedirectTimer } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";
import { useScrollToTop } from "../../components/utils";
import { Helmet } from "react-helmet";

function LoginComplete() {
  useScrollToTop();
  useRedirectTimer("/", 2000);

  return (
    <>
      <Helmet>
        <title>Login Successful - Holidaze</title>
        <meta name="description" content="Welcome back to Holidaze! Your login was successful. You can now manage your bookings, listings, and personal information with ease." />
      </Helmet>
      <SuccessMessage title="Login successful" linkTo="/" />
    </>
  );
}

export default LoginComplete;
