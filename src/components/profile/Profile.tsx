import { ProfileHeader, ProfileBookings } from "./";

function ProfilePage() {
  return (
    <div className="container row mx-auto text-center py-5">
      <ProfileHeader />
      <ProfileBookings />
    </div>
  );
}

export default ProfilePage;
