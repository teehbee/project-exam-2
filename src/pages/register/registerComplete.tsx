import SuccessMessage from "../../components/successMessages";
import { useScrollToTop } from "../../components/utils";
import { useRedirectTimer } from "../../components/utils";
import { Helmet, HelmetProvider } from "react-helmet-async";

function RegistrationComplete() {
  useScrollToTop();
  useRedirectTimer("/", 2000);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Registration Successful - Holidaze</title>
          <meta name="description" content="Welcome to Holidaze! Your registration was successful. You can now start exploring and booking amazing accommodations or listing your own properties. Enjoy your journey with us!" />
        </Helmet>
      </HelmetProvider>
      <SuccessMessage title="Registration complete" linkTo="/" />
    </>
  );
}

export default RegistrationComplete;
