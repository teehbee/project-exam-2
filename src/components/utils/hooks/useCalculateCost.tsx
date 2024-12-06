// Reusable hook to calculate total cost of stay by multiplying number of nights with price per night

const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split(".").map(Number);
  return new Date(year, month - 1, day);
};

export const useCalculateTotalCost = (dateFrom: string, dateTo: string, pricePerNight: number): { totalCost: number; numberOfNights: number } => {
  if (!dateFrom || !dateTo) {
    return { totalCost: 0, numberOfNights: 0 };
  }

  const startDate = parseDate(dateFrom);
  const endDate = parseDate(dateTo);

  const differenceInTime = endDate.getTime() - startDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  const totalCost = differenceInDays * pricePerNight;

  return {
    totalCost: totalCost >= 0 ? totalCost : 0,
    numberOfNights: differenceInDays >= 0 ? differenceInDays : 0,
  };
};
