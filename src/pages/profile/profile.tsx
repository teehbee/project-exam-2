import { useScrollToTop } from "../../components/utils";
import { ProfilePage } from "../../components/profile";

function Profile() {
  useScrollToTop();
  return <ProfilePage />;
}

export default Profile;
