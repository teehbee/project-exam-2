import { RegistrationForm } from "../../components/forms";
import { useScrollToTop } from "../../components/utils";
import { Helmet } from "react-helmet";

function RegisterFormPage() {
  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>Register on Holidaze - Create Your Account"</title>
        <meta name="description" content="Join Holidaze today! Fill out the registration form to create your account. Whether you're looking to book accommodations or list your own properties, start your journey with us now." />
      </Helmet>
      <RegistrationForm />
    </>
  );
}

export default RegisterFormPage;
