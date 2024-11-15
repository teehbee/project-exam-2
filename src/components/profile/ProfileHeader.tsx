import { ProfileImage, ProfileData, ProfileBio } from "./";
import { ProfileData as ProfileDataType } from "../api/interfaces";

interface ProfileHeaderProps {
  profileData: ProfileDataType;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profileData }) => {
  console.log("Profile data received", profileData);

  if (!profileData || !profileData.data) {
    return null;
  }

  const avatarUrl = profileData.data.avatar.length > 0 ? profileData.data.avatar[0].url : "";
  return (
    <div className="col-12 col-lg-4 d-flex text-start align-items-start flex-column right-border">
      <div className="d-flex align-items-center">
        <ProfileImage avatar={profileData.data.avatar.url} alt={avatarUrl} />
        <ProfileData name={profileData.data.name} email={profileData.data.email} venueManager={profileData.data.venueManager} />
      </div>
      <div className="">
        <ProfileBio />
      </div>
    </div>
  );
};

export default ProfileHeader;
