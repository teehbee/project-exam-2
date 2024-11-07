import { ProfileImage, ProfileData } from "./";

function ProfileHeader() {
  return (
    <div className="col-12 col-md-4 d-flex text-start align-items-center">
      <ProfileImage />
      <ProfileData />
    </div>
  );
}

export default ProfileHeader;
