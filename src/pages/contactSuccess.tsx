import { useRedirectTimer} from "../components/utils";
import SuccessMessage from "../components/successMessages";

// Success message for contact form. Redirects to homepage

function ContactSuccess() {
    useRedirectTimer("/", 2000);

    return <SuccessMessage title="Message sent" linkTo="/" />

}

export default ContactSuccess;