import { useScrollToTop } from "../components/utils";
import SingleVenuePage from "../components/venue";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Venue() {
  useScrollToTop();

  // Handler for dynamic meta data for single venues

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Venue page - Holidaze</title>
          <meta name="description" content="Discover and book your perfect stay on Holidaze. Enjoy detailed descriptions, stunning images, and easy booking options for an unforgettable experience." />
        </Helmet>
      </HelmetProvider>
      <SingleVenuePage />
    </>
  );
}

export default Venue;
