import { useRedirectTimer } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";

function CreateVenueSuccess() {
  useRedirectTimer("/", 3000);

  return <SuccessMessage title="Venue successfully created" linkTo="/venue-created" />;
}

export default CreateVenueSuccess;
