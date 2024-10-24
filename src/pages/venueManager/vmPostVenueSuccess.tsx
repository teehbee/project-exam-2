import { useRedirectTimer } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";
import { useScrollToTop } from "../../components/utils";

function CreateVenueSuccess() {
  useScrollToTop();
  useRedirectTimer("/", 3000);

  return <SuccessMessage title="Venue successfully created" linkTo="/venue-created" />;
}

export default CreateVenueSuccess;
