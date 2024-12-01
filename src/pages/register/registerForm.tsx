import { RegistrationForm } from "../../components/forms";
import { useScrollToTop } from "../../components/utils";
import { Helmet, HelmetProvider } from "react-helmet-async";

function RegisterFormPage() {
  useScrollToTop();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Register on Holidaze - Create Your Account"</title>
          <meta name="description" content="Join Holidaze today! Fill out the registration form to create your account. Whether you're looking to book accommodations or list your own properties, start your journey with us now." />
        </Helmet>
      </HelmetProvider>
      <RegistrationForm />
    </>
  );
}

export default RegisterFormPage;
