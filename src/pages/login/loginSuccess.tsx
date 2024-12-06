import { useRedirectTimer, useScrollToTop } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";
import { Helmet, HelmetProvider } from "react-helmet-async";

function LoginComplete() {
  useScrollToTop();
  useRedirectTimer("/", 2000);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Login Successful - Holidaze</title>
          <meta name="description" content="Welcome back to Holidaze! Your login was successful. You can now manage your bookings, listings, and personal information with ease." />
        </Helmet>
      </HelmetProvider>
      <SuccessMessage title="Login successful" linkTo="/" />
    </>
  );
}

export default LoginComplete;
