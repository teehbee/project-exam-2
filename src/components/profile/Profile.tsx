import { ProfileHeader, ProfileBookings } from "./";
import { useApi } from "../api";
import { getProfileEndpoint } from "../api/const/variables";
import { VenueResponse } from "../api/interfaces";

function ProfilePage() {
  const name = localStorage.getItem("name");

  const { data, error, loading } = useApi<null, VenueResponse>(name ? getProfileEndpoint(name) : "", "GET", null, true);

  console.log("Fetched Data:", data);

  if (loading) return <div>loader</div>;
  if (error) return;

  return (
    <div className="container row mx-auto text-center py-5">
      <ProfileHeader />
      <ProfileBookings />
    </div>
  );
}

export default ProfilePage;
