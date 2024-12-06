import { useRedirectTimer, useScrollToTop } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";
import { Helmet, HelmetProvider } from "react-helmet-async";

function CreateVenueSuccess() {
  useScrollToTop();
  useRedirectTimer("/", 3000);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Venue Listed Successfully - Holidaze Venue Manager</title>
          <meta name="description" content="Your venue has been successfully listed on Holidaze. Reach more customers and manage your property with ease. Thank you for choosing Holidaze to showcase your venue." />
        </Helmet>
      </HelmetProvider>
      <SuccessMessage title="Venue successfully listed" linkTo="/venue-created" />
    </>
  );
}

export default CreateVenueSuccess;
