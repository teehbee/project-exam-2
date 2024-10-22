import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { logoSmall, logoLarge } from "../../assets/logo";
import { profileIcon, bars, signOutIcon } from "../../assets/icon";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  // Used to check url for correct background color on nav

  const location = useLocation();

  // State for handling screen size to set background color on nav on smaller screens

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  // State for expanded and not-expanded dropdown menu

  const [expanded, setExpanded] = useState(false);

  // Setting isTransparent if on the homepage or venue page, the only pages with transparent headers on large screens

  const isTransparent = location.pathname === "/" || location.pathname === "/venues";

  // Event listener and cleanup for window size

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Change background color if on other page than home or venue, or if screen size is smaller than 992px

  const addDarkBackground = !isTransparent || isSmallScreen;

  // Close dropdown menu when links clicked

  const handleLinkClick = () => {
    setExpanded(false);
  };

  // Close dropdown when clicking the dropdown icon

  const handleToggleClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  // Add no-scroll to body when dropdown is open

  useEffect(() => {
    if (expanded) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [expanded]);

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
}

export default Header;
