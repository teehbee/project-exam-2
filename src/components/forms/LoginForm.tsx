import React from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function LoginForm() {
  const id = React.useId();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto mt-5">
          <div className="custom-border-gray text-start p-3">
            <h1 className="fs-1-5rem-to-2rem fw-light">Login</h1>
            <form action="">
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-loginEmail"} className="mt-2 fs-0-75rem-to-1rem fw-light">
                  Email
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fw-light fs-0-75rem-to-0-875rem" type="email" placeholder="iamawesome@stud.noroff.no" name="login-email" id={id + "-loginEmail"} />
                <p className="d-none pt-1 m-0 text-danger fs-0-75rem-to-0-875rem">Incorrect email address</p>
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor={id + "-loginPassword"} className="mt-2 fs-0-75rem-to-1rem fw-light">
                  Password
                </label>
                <input className="mt-1 custom-border-gray text-ident-5px p-1 p-md-2 form-input-bg fw-light fs-0-75rem-to-0-875rem" type="password" placeholder="********" name="login-password" id={id + "-loginPassword"} />
                <p className="d-none pt-1 m-0 text-danger fs-0-75rem-to-0-875rem">Password is incorrect</p>
              </div>
              <button className="main-button-gray mt-4 p-1 p-md-2">
                Login <Spinner className="d-none ms-1" animation="border" size="sm" variant="light" />
              </button>
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
