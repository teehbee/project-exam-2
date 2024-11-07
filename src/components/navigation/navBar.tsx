import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logoSmall, logoLarge } from "../../assets/logo";
import { profileIcon, bars, signOutIcon } from "../../assets/icon";
import { NavLink, Link } from "react-router-dom";

interface NavBarProps {
  handleLinkClick: () => void;
  expanded: boolean;
  handleToggleClick: () => void;
  addDarkBackground: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ handleLinkClick, expanded, handleToggleClick, addDarkBackground }) => {
  return (
    <header className={`position-relative ${addDarkBackground ? "bg-dark-gray-color" : ""}`}>
      <div className="main-nav">
        <div className="upper-nav d-none d-md-flex py-2 ps-0 justify-content-between border-bottom-white">
          <ul className="d-md-flex flex-row d-none ps-5">
            <li className="pe-4 text-light fs-0-875rem">+47 123 45 678</li>
            <li className="text-light fs-0-875rem">example@gmail.com</li>
          </ul>
          <ul className="d-md-flex d-none pe-5">
            <li className="pe-4">
              <Link className="nav-link-styling fs-0-875rem" to="login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link-styling fs-0-875rem" to="register">
                Register
              </Link>
            </li>
            <li>
              <Link className="d-none" to="profile">
                <img className="" src={profileIcon} aria-label="profile link" />
              </Link>
              <img className="d-none ps-2" src={signOutIcon} aria-label="sign out" />
            </li>
          </ul>
        </div>
        <Navbar expand="lg" className={`py-3 ${addDarkBackground ? "bg-dark-gray-color" : ""}`} expanded={expanded}>
          <Link to="/" className="ps-3 ps-md-5">
            <picture className="cursor-pointer">
              <source media="(min-width: 992px)" srcSet={logoLarge} />
              <img src={logoSmall} aria-label="main logo" />
            </picture>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3 me-md-5" onClick={handleToggleClick}>
            <img src={bars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="pe-5">
            <Nav className="dropdown-active ms-auto align-items-center">
              <Link className="nav-link-styling fs-1-125rem m-2" to="/" onClick={handleLinkClick}>
                HOME
              </Link>
              <Link className="nav-link-styling fs-1-125rem m-2" to="venues" onClick={handleLinkClick}>
                ACCOMMODATIONS
              </Link>
              <Link className="nav-link-styling fs-1-125rem m-2" to="contact" onClick={handleLinkClick}>
                CONTACT
              </Link>
              <Link className="nav-link-styling fs-1-125rem m-2" to="rent-out" onClick={handleLinkClick}>
                RENT OUT
              </Link>
              <Link to="venues" onClick={handleLinkClick}>
                <button className="main-button-red fs-1-125rem ms-2">BOOK NOW</button>
              </Link>
              <div className="d-md-none text-center">
                <Link className="text-light fs-1-125rem fw-light nav-link" to="login" onClick={handleLinkClick}>
                  Login
                </Link>
                <Link className="text-light fs-1-125rem fw-light nav-link" to="register" onClick={handleLinkClick}>
                  Register
                </Link>
                <Link className="text-light fs-1-125rem fw-light nav-link d-none" to="profile" onClick={handleLinkClick}>
                  Profile
                </Link>
                <Link className="text-light fs-1-125rem fw-light nav-link d-none" to="profile" onClick={handleLinkClick}>
                  Sign out
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default NavBar;
