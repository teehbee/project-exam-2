import { avatarIcon, avatarIconLarge } from "../../assets/avatar";

function ProfileImage() {
  return (
    <div>
      <picture>
        <source media="(min-width: 992px)" srcSet={avatarIconLarge} />
        <img className="avatar-image img-fluid" src={avatarIcon} aria-label="placeholder" />
      </picture>
    </div>
  );
}

export default ProfileImage;
