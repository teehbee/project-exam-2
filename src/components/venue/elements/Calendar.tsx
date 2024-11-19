import { useState, useEffect } from "react";
import { SingleVenueResponse } from "../../api/const/interfaces";
import { Calendar, CalendarSelected } from "@demark-pro/react-booking-calendar";
import "@demark-pro/react-booking-calendar/dist/react-booking-calendar.css";

// Move to interface file

interface BookingCalendarProps {
  onDateChange: (fromDate: string | null, toDate: string | null) => void;
  venue: SingleVenueResponse;
}

export const BookingCalendar: React.FC<BookingCalendarProps> = ({ venue, onDateChange }) => {
  const bookingDates = venue.data.bookings;

  const reservedDates = bookingDates.map((booking) => ({
    startDate: new Date(booking.dateFrom),
    endDate: new Date(booking.dateTo),
  }));

  const [selectedDates, setSelectedDates] = useState<CalendarSelected[]>([]);

  useEffect(() => {
    if (selectedDates.length === 2) {
      const parsedFromDate = selectedDates[0] ? new Date(selectedDates[0]).toISOString() : null;
      const parsedToDate = selectedDates[1] ? new Date(selectedDates[1]).toISOString() : null;
      onDateChange(parsedFromDate, parsedToDate);
    }
  }, [selectedDates, onDateChange]);

  return (
    <div className="calendar form-box-shadow mx-auto mt-5 mt-md-3 p-3">
      <Calendar reserved={reservedDates} onChange={setSelectedDates} selected={selectedDates} range={true} />
    </div>
  );
};
