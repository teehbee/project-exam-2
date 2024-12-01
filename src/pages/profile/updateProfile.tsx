import { ProfileUpdateForm } from "../../components/forms";
import { Helmet, HelmetProvider } from "react-helmet-async";

function UpdateProfile() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Update Your Profile - Holidaze</title>
          <meta name="description" content="Enhance your Holidaze profile by adding a profile image, updating your status to Venue Manager, and writing a bio. Keep your profile up to date to make the most of our platform." />
        </Helmet>
      </HelmetProvider>
      <ProfileUpdateForm />
    </>
  );
}

export default UpdateProfile;
