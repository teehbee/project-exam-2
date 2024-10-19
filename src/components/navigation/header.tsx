import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { logoSmall, logoLarge } from "../../assets/logo";
import { profileIcon, bars } from "../../assets/icon";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const [expanded, setExpanded] = useState(false);

  const isTransparent = location.pathname === "/" || location.pathname === "venues";

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addDarkBackground = !isTransparent || isSmallScreen;

  const handleLinkClick = () => {
    setExpanded(false);
  };

  const handleToggleClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

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
              <Link to="profile">
                <img className="d-none" src={profileIcon} alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <Navbar expand="lg" className={`py-3 ${addDarkBackground ? "bg-dark-gray-color" : ""}`} expanded={expanded}>
          <Link to="/" className="ps-5">
            <picture className="cursor-pointer">
              <source media="(min-width: 992px)" srcSet={logoLarge} />
              <img src={logoSmall} aria-label="main logo" />
            </picture>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-5" onClick={handleToggleClick}>
            <img src={bars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="pe-5">
            <Nav className="dropdown-active ms-auto align-items-center">
              <Link className="nav-link-styling fs-1-125rem m-2" to="/" onClick={handleLinkClick}>
                HOME
              </Link>
              <Link className="nav-link-styling fs-1-125rem m-2" to="contact" onClick={handleLinkClick}>
                ACCOMMODATIONS
              </Link>
              <Link className="nav-link-styling fs-1-125rem m-2" to="contact" onClick={handleLinkClick}>
                CONTACT
              </Link>
              <Link className="nav-link-styling fs-1-125rem m-2" to="rent-out" onClick={handleLinkClick}>
                RENT OUT
              </Link>
              <Link to="venues">
                <button className="main-button-red fs-1-125rem ms-2">BOOK NOW</button>
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
