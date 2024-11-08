import { ProfileImage, ProfileData, ProfileBio } from "./";

function ProfileHeader() {
  return (
    <div className="col-12 col-lg-4 d-flex text-start align-items-start flex-column right-border">
      <div className="d-flex align-items-center">
        <ProfileImage />
        <ProfileData />
      </div>
      <div className="">
        <ProfileBio />
      </div>
    </div>
  );
}

export default ProfileHeader;
