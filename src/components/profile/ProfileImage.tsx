import { ProfileMedia } from "../api/interfaces";

const ProfileImage: React.FC<ProfileMedia> = ({ url, alt }) => {
  return (
    <div>
      <img className="avatar-image" src={url} aria-label={alt} />
    </div>
  );
};

export default ProfileImage;
