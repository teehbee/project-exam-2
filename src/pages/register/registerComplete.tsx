import SuccessMessage from "../../components/successMessages";
import { useScrollToTop } from "../../components/utils";
import { useRedirectTimer } from "../../components/utils";
import { Helmet } from "react-helmet";

function RegistrationComplete() {
  useScrollToTop();
  useRedirectTimer("/", 2000);
  return (
    <>
      <Helmet>
        <title>Registration Successful - Holidaze</title>
        <meta name="description" content="Welcome to Holidaze! Your registration was successful. You can now start exploring and booking amazing accommodations or listing your own properties. Enjoy your journey with us!" />
      </Helmet>
      <SuccessMessage title="Registration complete" linkTo="/" />
    </>
  );
}

export default RegistrationComplete;
