import { checkIcon } from "../../assets/icon";

function ProfileData() {
  return (
    <div className="ps-3">
      <h1 className="secondary-font fs-1-5rem-to-2rem">Name of user</h1>
      <p className="fs-0-75rem-to-1rem">Email address</p>
      <div className="d-flex align-items-center">
        <p className="mb-0 pe-1 fs-0-625rem-to-0-875rem fw-light">Certified venue manager</p>
        <img src={checkIcon} alt="" />
      </div>
    </div>
  );
}

export default ProfileData;
