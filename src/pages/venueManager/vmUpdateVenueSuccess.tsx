import { useRedirectTimer } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";
import { useScrollToTop } from "../../components/utils";

function UpdateVenueSuccess() {
  useScrollToTop();
  useRedirectTimer("/", 3000);

  return <SuccessMessage title="Venue successfully updated" linkTo="/" />;
}

export default UpdateVenueSuccess;
