import { ProfileHeader, ProfileBookings } from "./";

function ProfilePage() {
  return (
    <div className="container text-center py-5">
      <div className="row">
        <ProfileHeader />
        <ProfileBookings />
      </div>
    </div>
  );
}

export default ProfilePage;
