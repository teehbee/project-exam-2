import { useRedirectTimer } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";

function UpdateProfileSuccess() {
  useRedirectTimer("/", 2000);

  return <SuccessMessage title="Profile Updated" linkTo="/" />;
}

export default UpdateProfileSuccess;
