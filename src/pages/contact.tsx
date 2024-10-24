import { ContactForm } from "../components/forms";
import { useScrollToTop } from "../components/utils";

function Contact() {
  useScrollToTop();
  return <ContactForm />;
}

export default Contact;
