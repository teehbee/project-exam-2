import { NavigateFunction } from "react-router-dom";

export const handleSignOut = (navigate: NavigateFunction) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("name");
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("isVenueManager");
  navigate("/");
};
