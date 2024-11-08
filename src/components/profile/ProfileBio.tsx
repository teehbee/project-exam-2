import { Link } from "react-router-dom";

function ProfileBio() {
  return (
    <div>
      <h2 className="fs-0-75rem-to-1rem py-3">Biography</h2>
      <p className="fs-0-75rem-to-1rem fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <Link to="/update-profile">
        <button className="main-button-gray fs-0-75rem-to-1rem w-50 my-3">Update profile</button>
      </Link>
    </div>
  );
}

export default ProfileBio;
