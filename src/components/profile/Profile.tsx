import { ProfileHeader, ProfileBookings } from "./";
import { useApi } from "../api";
import { getProfileEndpoint } from "../api/const/variables";
import { ProfileData } from "../api/interfaces";
import { FrontPageLoader } from "../frontpageContent";
import PageNotFound from "../error";

function ProfilePage() {
  const name = localStorage.getItem("name");

  const { data, error, loading } = useApi<null, ProfileData>(name ? getProfileEndpoint(name) : "", "GET", null, true);

  const profileData = data;

  if (loading) return <FrontPageLoader />;
  if (error || !profileData) return <PageNotFound />;

  return (
    <div className="container row mx-auto text-center py-5">
      <ProfileHeader profileData={profileData} />
      <ProfileBookings profileData={profileData} />
    </div>
  );
}

export default ProfilePage;
