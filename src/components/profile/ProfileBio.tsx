import { Link } from "react-router-dom";
import { ProfileBioText } from "../api/const/interfaces";

const ProfileBio: React.FC<ProfileBioText> = ({ bio, name }) => {
  return (
    <div>
      <h2 className="fs-1rem-to-1-25rem py-3">Biography</h2>
      <p>{bio ? bio : "No bio text yet, please update profile to add bio. "}</p>
      <Link to={`/update-profile/${name}`}>
        <button className="main-button-gray my-3 w-50">Update profile</button>
      </Link>
    </div>
  );
};

export default ProfileBio;
