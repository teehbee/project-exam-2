import { ProfileHeader, ProfileBookings } from "./";
import { useApi } from "../api";
import { getProfileEndpoint } from "../api/const/variables";
import { VenueResponse } from "../api/interfaces";
import { FrontPageLoader } from "../frontpageContent";
import PageNotFound from "../error";

function ProfilePage() {
  const name = localStorage.getItem("name");

  const { data, error, loading } = useApi<null, VenueResponse>(name ? getProfileEndpoint(name) : "", "GET", null, true);

  const profileData = data?.data;

  console.log("Fetched Data:", profileData);

  if (loading) return <FrontPageLoader />;
  if (error) return <PageNotFound />;

  return (
    <div className="container row mx-auto text-center py-5">
      <ProfileHeader />
      <ProfileBookings />
    </div>
  );
}

export default ProfilePage;
