import { useRedirectTimer } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";
import { useScrollToTop } from "../../components/utils";
import { Helmet } from "react-helmet";

function UpdateVenueSuccess() {
  useScrollToTop();
  useRedirectTimer("/", 3000);

  return (
    <>
      <Helmet>
        <title>Venue Update Successful - Holidaze Venue Manager</title>
        <meta name="description" content="Your venue details have been successfully updated on Holidaze. Keep your listings fresh and attract more customers by ensuring your venue information is always up-to-date. Manage your properties effortlessly with Holidaze." />
      </Helmet>
      <SuccessMessage title="Venue successfully updated" linkTo="/" />
    </>
  );
}

export default UpdateVenueSuccess;
