import { NavBar } from "./";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  // Used to check url for correct background color on nav

  const location = useLocation();

  // State for handling screen size to set background color on nav on smaller screens

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  // State for expanded and not-expanded dropdown menu

  const [expanded, setExpanded] = useState(false);

  // Handling transparency of header when needed

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

  return <NavBar handleLinkClick={handleLinkClick} expanded={expanded} handleToggleClick={handleToggleClick} addDarkBackground={addDarkBackground} />;
}

export default Header;
