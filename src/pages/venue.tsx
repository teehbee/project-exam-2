import { useScrollToTop } from "../components/utils";
import SingleVenuePage from "../components/venue";

function Venue() {
  useScrollToTop();
  return <SingleVenuePage />;
}

export default Venue;
