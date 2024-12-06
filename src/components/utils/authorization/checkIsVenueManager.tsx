// Checking if user is venue manager, will be adjusted to redux persist in the future

export const checkIsVenueManager = () => {
  const value = localStorage.getItem("isVenueManager");
  return value !== null && value === "true";
};
