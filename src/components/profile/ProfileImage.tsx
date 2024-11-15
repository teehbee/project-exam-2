// import { avatarIcon, avatarIconLarge } from "../../assets/avatar";

interface ProfileImageProps {
  avatar: string; // Expecting a URL string
  alt: string; // Expecting alt text
}

const ProfileImage: React.FC<ProfileImageProps> = ({ avatar, alt }) => {
  return (
    <div>
      <img className="avatar-image img-fluid" src={avatar} aria-label={alt} />
    </div>
  );
};

export default ProfileImage;
