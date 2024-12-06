// Get todays date for setting as initial value in booking calendar and search

export const getTodaysDate = (): string => {
  return new Date().toISOString().split("T")[0];
};

// Get tomorrows data, for setting as min dateTo in booking calendar and search

export const getTomorrowsDate = (): string => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow.toISOString().split("T")[0];
};
