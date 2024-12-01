import { Link } from "react-router-dom";
import { logoSmall, logoLarge } from "../../assets/logo";

function Footer() {
  return (
    <footer className="bg-dark-gray-color py-3 pt-lg-5 pb-lg-4">
      <div className="container text-light text-center border-bottom-white">
        <div className="row pb-3">
          <div className="col-12 col-lg-3">
            <Link to="/">
              <picture>
                <source media="(min-width: 992px)" srcSet={logoLarge} />
                <img src={logoSmall} aria-label="main logo" />
              </picture>
            </Link>
          </div>
          <div className="col-12 col-lg-2 py-3 py-lg-0 text-decoration-none d-lg-flex flex-column text-start-lg">
            <Link className="nav-link-styling fs-0-75rem-to-1-125rem px-2 py-lg-2" to="/">
              HOME
            </Link>
            <Link className="nav-link-styling fs-0-75rem-to-1-125rem px-2 py-lg-2" to="venues">
              ACCOMMODATION
            </Link>
            <Link className="nav-link-styling fs-0-75rem-to-1-125rem px-2 py-lg-2" to="contact">
              CONTACT
            </Link>
            <Link className="nav-link-styling fs-0-75rem-to-1-125rem px-2 py-lg-2" to="rent-out">
              RENT OUT
            </Link>
          </div>
          <div className="col-12 col-lg-2 text-decoration-none d-lg-flex flex-column text-start-lg">
            <Link className="nav-link-styling fs-0-75rem-to-1-125rem px-2 py-lg-1" to="login">
              Login
            </Link>
            <Link className="nav-link-styling fs-0-75rem-to-1-125rem px-2 py-lg-1" to="register">
              Register
            </Link>
          </div>
          <div className="col-12 col-lg-5 text-decoration-none pt-3 pt-lg-0">
            <p className="text-light fs-0-625rem-to-1rem mb-1">Acknowledgements: </p>
            <p className="fw-light text-light fs-0-625rem-to-1rem">This website is not real and is not representing a real company. This website is created by Tor-Håkon Bergseng as an exam delivery for the Front-End development studies at Noroff School of technology and digital media</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
