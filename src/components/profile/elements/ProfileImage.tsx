import { ProfileMedia } from "../../api/const/interfaces";

const ProfileImage: React.FC<ProfileMedia> = ({ url, alt }) => {
  return (
    <div>
      <img className="avatar-image" src={url} aria-label={alt || "profile image"} />
    </div>
  );
};

export default ProfileImage;
