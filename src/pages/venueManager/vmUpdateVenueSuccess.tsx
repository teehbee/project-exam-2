import { useRedirectTimer } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";

function UpdateVenueSuccess() {
  useRedirectTimer("/", 3000);

  return <SuccessMessage title="Venue successfully updated" linkTo="/" />;
}

export default UpdateVenueSuccess;
