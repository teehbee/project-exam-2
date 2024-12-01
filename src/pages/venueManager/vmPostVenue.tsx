import { CreateVenueForm } from "../../components/forms";
import { useScrollToTop } from "../../components/utils";
import { Helmet, HelmetProvider } from "react-helmet-async";

function RentOutVenue() {
  useScrollToTop();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>List Your Property - Holidaze Venue Manager</title>
          <meta name="description" content="Become a Holidaze Venue Manager and start renting out your property. Register and post your venue to reach a wide audience of travelers. Join us today and maximize your rental potential." />
        </Helmet>
      </HelmetProvider>
      <CreateVenueForm />
    </>
  );
}

export default RentOutVenue;
