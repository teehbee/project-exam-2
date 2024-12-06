import { NavigateFunction } from "react-router-dom";

// Handler for signing out user, to be moved to redux persist in the future

export const handleSignOut = (navigate: NavigateFunction) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("name");
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("isVenueManager");
  navigate("/");
};
