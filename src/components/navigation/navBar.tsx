import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logoSmall, logoLarge } from "../../assets/logo";
import { profileIcon, bars, signOutIcon } from "../../assets/icon";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface NavBarProps {
  handleLinkClick: () => void;
  expanded: boolean;
  handleToggleClick: () => void;
  addDarkBackground: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ handleLinkClick, expanded, handleToggleClick, addDarkBackground }) => {
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  return (
    <header className={`position-relative ${addDarkBackground ? "bg-dark-gray-color" : ""}`}>
      <div className="main-nav">
        <div className="upper-nav d-none d-md-flex py-2 ps-0 justify-content-between border-bottom-white">
          <ul className="d-md-flex flex-row d-none ps-5">
            <li className="pe-4 text-light fs-0-875rem">
              <a className="nav-link-styling-no-hover" href="tel:+4712345678">
                +47 123 45 678
              </a>
            </li>
            <li className="text-light fs-0-875rem">
              <a className="nav-link-styling-no-hover" href="mailto:example@gmail.com">
                example@gmail.com
              </a>
            </li>
          </ul>
          <ul className="d-md-flex d-none pe-5">
            <li className="pe-4">
              <NavLink className="nav-link-styling fs-0-875rem" to="login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link-styling fs-0-875rem" to="register">
                Register
              </NavLink>
            </li>
            <li>
              <Link className="ps-2" to="profile">
                <img className="" src={profileIcon} aria-label="profile link" />
              </Link>
              <img className="ps-2 cursor-pointer" src={signOutIcon} aria-label="sign out" />
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
              <NavLink className="nav-link-styling fs-1-125rem m-2" to="/" onClick={handleLinkClick}>
                HOME
              </NavLink>
              <NavLink className="nav-link-styling fs-1-125rem m-2" to="venues" onClick={handleLinkClick}>
                ACCOMMODATIONS
              </NavLink>
              <NavLink className="nav-link-styling fs-1-125rem m-2" to="contact" onClick={handleLinkClick}>
                CONTACT
              </NavLink>
              <NavLink className="nav-link-styling fs-1-125rem m-2" to="rent-out" onClick={handleLinkClick}>
                RENT OUT
              </NavLink>
              <Link to="venues" onClick={handleLinkClick}>
                <button className="main-button-red fs-1-125rem ms-2">BOOK NOW</button>
              </Link>
              <div className="d-md-none text-center">
                <NavLink className="text-light fs-1-125rem fw-light nav-link" to="login" onClick={handleLinkClick}>
                  Login
                </NavLink>
                <NavLink className="text-light fs-1-125rem fw-light nav-link" to="register" onClick={handleLinkClick}>
                  Register
                </NavLink>
                <NavLink className="text-light fs-1-125rem fw-light nav-link" to="profile" onClick={handleLinkClick}>
                  Profile
                </NavLink>
                <NavLink className="text-light fs-1-125rem fw-light nav-link" to="/" onClick={handleLinkClick}>
                  Sign out
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default NavBar;
