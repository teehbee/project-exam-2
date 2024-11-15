import { Link } from "react-router-dom";

interface ProfileBio {
  bio: string;
}

const ProfileBio: React.FC<ProfileBio> = ({ bio }) => {
  return (
    <div>
      <h2 className="fs-0-75rem-to-1rem py-3">Biography</h2>
      <p className="fs-0-75rem-to-1rem fw-light">{bio ? bio : "No bio text yet, please update profile to add bio. "}</p>
      <Link to="/update-profile">
        <button className="main-button-gray fs-0-75rem-to-1rem my-3 w-50">Update profile</button>
      </Link>
    </div>
  );
};

export default ProfileBio;
