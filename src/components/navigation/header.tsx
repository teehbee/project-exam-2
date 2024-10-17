import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { logoSmall, logoLarge } from "../../assets/logo";
import profileIcon from "../../assets/icon";

function Header() {
  return (
    <header className="position-relative">
      <div className="main-nav container">
        <div className="upper-nav d-none d-md-flex py-2 ps-0 justify-content-between border-bottom-white">
          <ul className="d-md-flex flex-row d-none ps-0">
            <li className="pe-4 text-light fs-0-875rem">+47 123 45 678</li>
            <li className="text-light fs-0-875rem">example@gmail.com</li>
          </ul>
          <ul className="d-md-flex d-none">
            <li className="pe-4">
              <Link className="text-decoration-none text-light fs-0-875rem fw-light" to="venues">
                Login
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-light fs-0-875rem fw-light" to="register">
                Register
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-light fs-0-875rem fw-light" to="profile">
                <img className="d-none" src={profileIcon} alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <Navbar expand="lg" className="py-3">
          <Link to="/">
            <picture className="cursor-pointer">
              <source media="(min-width: 992px)" srcSet={logoLarge} />
              <img src={logoSmall} aria-label="main logo" />
            </picture>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Link className="text-light fs-1-125rem fw-light nav-link" to="/">
                HOME
              </Link>
              <Link to="venues" className="text-light fs-1-125rem fw-light"></Link>
              <Link className="text-light fs-1-125rem fw-light nav-link" to="contact">
                ACCOMODATIONS
              </Link>
              <Link className="text-light fs-1-125rem fw-light nav-link" to="contact">
                CONTACT
              </Link>
              <Link className="text-light fs-1-125rem fw-light nav-link" to="rent-out">
                RENT OUT
              </Link>
              <Link to="venues">
                <button className="main-button-red fw-light fs-1-125rem fw-light">BOOK NOW</button>
              </Link>
              <div className="d-md-none text-center">
                <Link className="text-light fs-1-125rem fw-light nav-link" to="login">
                  Login
                </Link>
                <Link className="text-light fs-1-125rem fw-light nav-link" to="register">
                  Register
                </Link>
                <Link className="text-light fs-1-125rem fw-light nav-link d-none" to="profile">
                  Profile
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
