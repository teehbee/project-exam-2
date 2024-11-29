export const handleSignOut = (navigate) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("name");
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("isVenueManager");
  navigate("/");
};
