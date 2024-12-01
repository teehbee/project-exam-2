import { VenuesPage } from "../components/venues";
import { useScrollToTop } from "../components/utils";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Venues() {
  useScrollToTop();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Explore and Search Venues - Holidaze</title>
          <meta name="description" content="Discover a wide range of accommodations on Holidaze. Use our search feature to find the perfect venue for your next trip. Book now and enjoy a seamless travel experience!" />
        </Helmet>
      </HelmetProvider>
      <VenuesPage />
    </>
  );
}

export default Venues;
