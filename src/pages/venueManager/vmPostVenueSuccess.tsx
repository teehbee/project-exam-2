import { useRedirectTimer } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";
import { useScrollToTop } from "../../components/utils";
import { Helmet } from "react-helmet";

function CreateVenueSuccess() {
  useScrollToTop();
  useRedirectTimer("/", 3000);

  return (
    <>
      <Helmet>
        <title>Venue Listed Successfully - Holidaze Venue Manager</title>
        <meta name="description" content="Your venue has been successfully listed on Holidaze. Reach more customers and manage your property with ease. Thank you for choosing Holidaze to showcase your venue." />
      </Helmet>
      <SuccessMessage title="Venue successfully listed" linkTo="/venue-created" />
    </>
  );
}

export default CreateVenueSuccess;
