import { checkIcon } from "../../assets/icon";

interface ProfileDataProps {
  name: string;
  email: string;
  venueManager: boolean;
}

const ProfileData: React.FC<ProfileDataProps> = ({ name, email, venueManager }) => {
  return (
    <div className="ps-3">
      <h1 className="secondary-font fs-1-5rem-to-2rem">{name}</h1>
      <p className="mb-1">{email}</p>
      <div className="d-flex align-items-center">
        {venueManager && (
          <>
            <p className="fs-0-75rem-to-1rem mb-0 pe-1">Certified venue manager</p>
            <img src={checkIcon} alt="" />
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileData;
