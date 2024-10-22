export const getTodaysDate = (): string => {
  return new Date().toISOString().split("T")[0];
};

export const getTomorrowsDate = (): string => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow.toISOString().split("T")[0];
};
