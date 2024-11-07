import { VenuesPage } from "../components/venues";
import { useScrollToTop } from "../components/utils";

function Venues() {
  useScrollToTop();
  return <VenuesPage />;
}

export default Venues;
