import { useScrollToTop } from "../../components/utils";
import { ProfilePage } from "../../components/profile";
import { Helmet } from "react-helmet";

function Profile() {
  useScrollToTop();
  return (
    <>
      <Helmet>
        <title>Your Profile - Holidaze</title>
        <meta name="description" content="Manage your Holidaze profile, update your personal information, view your booking history, and manage your listings. Keep your account details up to date for a seamless experience." />
      </Helmet>
      <ProfilePage />
    </>
  );
}

export default Profile;
