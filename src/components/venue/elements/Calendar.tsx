import { useState, useEffect } from "react";
import { BookingCalendarProps } from "../../api/const/interfaces";
import { Calendar, CalendarSelected } from "@demark-pro/react-booking-calendar";
import "@demark-pro/react-booking-calendar/dist/react-booking-calendar.css";

export const BookingCalendar: React.FC<BookingCalendarProps> = ({ venue, onDateChange }) => {
  const bookingDates = venue.data.bookings;

  const reservedDates = bookingDates.map((booking) => ({
    startDate: new Date(booking.dateFrom),
    endDate: new Date(booking.dateTo),
  }));

  const [selectedDates, setSelectedDates] = useState<CalendarSelected[]>([]);

  // Handling of dates from calendar array and correctly parsing before hoisting to parent component

  useEffect(() => {
    if (selectedDates.length === 2) {
      const parsedFromDate = selectedDates[0] ? new Date(selectedDates[0]).toISOString() : null;
      const parsedToDate = selectedDates[1] ? new Date(selectedDates[1]).toISOString() : null;
      onDateChange(parsedFromDate, parsedToDate);
    }
  }, [selectedDates, onDateChange]);

  return (
    <div className="calendar form-box-shadow mx-auto mt-5 mt-md-3 p-3">
      <Calendar reserved={reservedDates} onChange={setSelectedDates} selected={selectedDates} range={true} options={{ weekStartsOn: 1 }} />
    </div>
  );
};
