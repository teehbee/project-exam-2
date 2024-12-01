import { UpdateVenueForm } from "../../components/forms";
import { useScrollToTop } from "../../components/utils";
import { Helmet, HelmetProvider } from "react-helmet-async";

function UpdateVenue() {
  useScrollToTop();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Update Your Venue - Holidaze Venue Manager</title>
          <meta name="description" content="Make changes to your venue details on Holidaze. Ensure your property information is accurate and appealing to attract more customers. Manage your listings with ease and keep your venue up-to-date with Holidaze." />
        </Helmet>
      </HelmetProvider>
      <UpdateVenueForm />
    </>
  );
}

export default UpdateVenue;
