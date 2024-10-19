import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { logoSmall, logoLarge } from "../../assets/logo";
import { profileIcon, bars } from "../../assets/icon";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [dropDownOpen, setIsDropDownOpen] = useState(false);

  const isTransparent = location.pathname === "/" || location.pathname === "venues";

  // Makes sure the header is transparent on homepage and venue page only

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsDropDownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically changes the header color to dark when dropdown is open

  return (
    <header className={`position-relative ${isTransparent && !dropDownOpen ? "" : "bg-dark-gray-color"}`}>
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
        <Navbar expand="lg" className={`py-3 ${isTransparent && !dropDownOpen ? "" : "bg-dark-gray-color"}`}>
          <Link to="/" className="ps-3 ps-md-5">
            <picture className="cursor-pointer">
              <source media="(min-width: 992px)" srcSet={logoLarge} />
              <img src={logoSmall} aria-label="main logo" />
            </picture>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className=" me-3 me-md-5" onClick={() => setIsDropDownOpen(!dropDownOpen)}>
            <img src={bars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="pe-5">
            <Nav className="dropdown-active ms-auto align-items-center">
              <Link className="nav-link-styling fs-1-125rem m-2" to="/">
                HOME
              </Link>
              <Link className="nav-link-styling fs-1-125rem m-2" to="contact">
                ACCOMMODATIONS
              </Link>
              <Link className="nav-link-styling fs-1-125rem m-2" to="contact">
                CONTACT
              </Link>
              <Link className="nav-link-styling fs-1-125rem m-2" to="rent-out">
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
