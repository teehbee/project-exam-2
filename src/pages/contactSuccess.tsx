import { useRedirectTimer } from "../components/utils";
import SuccessMessage from "../components/successMessages";
import { useScrollToTop } from "../components/utils";

// Success message for contact form. Redirects to homepage

function ContactSuccess() {
  useScrollToTop();
  useRedirectTimer("/", 2000);

  return <SuccessMessage title="Message sent" linkTo="/" />;
}

export default ContactSuccess;
