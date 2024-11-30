import { VenuesPage } from "../components/venues";
import { useScrollToTop } from "../components/utils";
import { Helmet } from "react-helmet";

function Venues() {
  useScrollToTop();
  return (
    <>
      <Helmet>
        <title>Explore and Search Venues - Holidaze</title>
        <meta name="description" content="Discover a wide range of accommodations on Holidaze. Use our search feature to find the perfect venue for your next trip. Book now and enjoy a seamless travel experience!" />
      </Helmet>
      <VenuesPage />
    </>
  );
}

export default Venues;
