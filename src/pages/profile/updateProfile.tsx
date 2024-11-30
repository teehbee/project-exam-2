import { ProfileUpdateForm } from "../../components/forms";
import { Helmet } from "react-helmet";

function UpdateProfile() {
  return (
    <>
      <Helmet>
        <title>Update Your Profile - Holidaze</title>
        <meta name="description" content="Enhance your Holidaze profile by adding a profile image, updating your status to Venue Manager, and writing a bio. Keep your profile up to date to make the most of our platform." />
      </Helmet>
      <ProfileUpdateForm />
    </>
  );
}

export default UpdateProfile;
