import { useRedirectTimer } from "../components/utils";
import SuccessMessage from "../components/successMessages";
import { useScrollToTop } from "../components/utils";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Success message for contact form. Redirects to homepage

function ContactSuccess() {
  useScrollToTop();
  useRedirectTimer("/", 2000);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Message Sent - Holidaze</title>
          <meta name="description" content="Thank you for reaching out! Your message has been successfully sent to the Holidaze team. We will get back to you as soon as possible. Have a great day!" />
        </Helmet>
      </HelmetProvider>
      <SuccessMessage title="Message sent" linkTo="/" />
    </>
  );
}

export default ContactSuccess;
