import { ProfileImage, ProfileData, ProfileBio } from "./";
import { ProfileData as ProfileDataType } from "../api/interfaces";

interface ProfileHeaderProps {
  profileData: ProfileDataType;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profileData }) => {
  if (!profileData || !profileData.data) {
    return null;
  }

  return (
    <div className="col-12 col-lg-4 d-flex text-start align-items-start flex-column right-border">
      <div className="d-flex align-items-center">
        <ProfileImage url={profileData.data.avatar.url} alt={profileData.data.avatar.alt} />
        <ProfileData name={profileData.data.name} email={profileData.data.email} venueManager={profileData.data.venueManager} />
      </div>
      <div className="w-100">
        <ProfileBio bio={profileData.data.bio} name={profileData.data.name} />
      </div>
    </div>
  );
};

export default ProfileHeader;
