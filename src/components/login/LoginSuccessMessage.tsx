import { Link } from "react-router-dom";

function LoginSuccessMessage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto mt-5">
          <div className="custom-border-gray text-start p-3">
            <h1 className="fs-1-5rem-to-2rem fw-light">Login successful</h1>
            <p className="fw-light fs-0-75rem-to-1rem">
              You will be redirected to the homepage in a few seconds, if not{" "}
              <Link className="font-gray" to="/register">
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSuccessMessage;
