import { useRedirectTimer } from "../../components/utils";
import { useScrollToTop } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";

function UpdateProfileSuccess() {
  useScrollToTop();
  useRedirectTimer("/", 2000);

  return <SuccessMessage title="Profile Updated" linkTo="/" />;
}

export default UpdateProfileSuccess;
