import { useState, useEffect } from "react";
import { SingleVenueProp } from "../../api/const/interfaces";
import { Calendar, CalendarSelected } from "@demark-pro/react-booking-calendar";
import "@demark-pro/react-booking-calendar/dist/react-booking-calendar.css";

export const BookingCalendar: React.FC<SingleVenueProp> = ({ venue }) => {
  const bookingDates = venue.data.bookings;

  const reservedDates = bookingDates.map((booking) => ({
    startDate: new Date(booking.dateFrom),
    endDate: new Date(booking.dateTo),
  }));

  const [selectedDates, setSelectedDates] = useState<CalendarSelected[]>([]);
  const [fromDate, setFromDate] = useState<string | null>(null); // State expects strings
  const [toDate, setToDate] = useState<string | null>(null);

  useEffect(() => {
    if (selectedDates.length === 2) {
      // Handle undefined safely and convert to ISO strings
      const parsedFromDate = selectedDates[0] ? new Date(selectedDates[0]).toISOString() : null;
      const parsedToDate = selectedDates[1] ? new Date(selectedDates[1]).toISOString() : null;

      setFromDate(parsedFromDate);
      setToDate(parsedToDate);
    }
  }, [selectedDates]);

  console.log("Selected Dates:", selectedDates);
  console.log("From Date:", fromDate);
  console.log("To Date:", toDate);

  return (
    <div className="calendar form-box-shadow mx-auto mt-5 mt-md-3 p-3">
      <Calendar reserved={reservedDates} onChange={setSelectedDates} selected={selectedDates} range={true} />
    </div>
  );
};
