import { NavBar } from "./";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const [expanded, setExpanded] = useState(false);
  const isTransparent = location.pathname === "/" || location.pathname === "/venues";

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
