import { Bookings } from "../../api/const/interfaces";

export const isDateAvailable = (bookings: Bookings[], dateFrom: string, dateTo: string): boolean => {
  const searchArrival = new Date(dateFrom).getTime();
  const searchDeparture = new Date(dateTo).getTime();

  return bookings.every((booking) => {
    const bookingArrival = new Date(booking.fromDate).getTime();
    const bookingDeparture = new Date(booking.toDate).getTime();

    return searchDeparture < bookingArrival || searchArrival > bookingDeparture;
  });
};
