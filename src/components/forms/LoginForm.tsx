import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto mt-5">
          <div className="custom-border-gray text-start p-3">
            <h1 className="fs-1-5rem-to-2rem fw-light">Login</h1>
            <form action="">
              <div className="form-group d-flex flex-column">
                <label htmlFor="login-email" className="mt-2 fs-0-75rem-to-1rem fw-light">
                  Email
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fw-light fs-0-75rem-to-0-875rem" type="email" placeholder="iamawesome@stud.noroff.no" name="login-email" />
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="login-password" className="mt-2 fs-0-75rem-to-1rem fw-light">
                  Password
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fw-light fs-0-75rem-to-0-875rem" type="password" placeholder="********" name="login-password" />
              </div>
              <button className="main-button-gray mt-4 p-1 p-md-2">Login</button>
              <div className="mt-2 mt-md-3">
                <p className="fw-light fs-0-75rem-to-1rem">
                  Not registered?{" "}
                  <Link className="font-gray" to="register">
                    Create a new user here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
