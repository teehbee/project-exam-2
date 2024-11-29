export const checkIsVenueManager = () => {
  const value = localStorage.getItem("isVenueManager");
  return value !== null && value === "true";
};
