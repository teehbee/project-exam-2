import { ContactForm } from "../components/forms";
import { useScrollToTop } from "../components/utils";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Contact() {
  useScrollToTop();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact Us - Holidaze</title>
          <meta name="description" content="Have questions or need assistance? Reach out to the Holidaze team for support. We're here to help with any inquiries or issues you may have regarding your bookings or listings." />
        </Helmet>
      </HelmetProvider>
      <ContactForm />
    </>
  );
}

export default Contact;
