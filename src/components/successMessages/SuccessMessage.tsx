import { Link } from "react-router-dom";

// Reusable component for success pages. To be used on login, registration and other updates

interface SuccessMessageProps {
  title: string;
  linkTo: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ title, linkTo }) => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto mt-5">
          <div className="form-box-shadow text-start p-3">
            <h1 className="fs-1-5rem-to-2rem">{title}</h1>
            <p className="fs-0-75rem-to-1rem">
              You will be redirected to the homepage in a few seconds, if not{" "}
              <Link className="font-gray" to={linkTo}>
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
