import { useState } from "react";
import { Calendar, CalendarSelected } from "@demark-pro/react-booking-calendar"; // Import CalendarSelected type
import "@demark-pro/react-booking-calendar/dist/react-booking-calendar.css";

const oneDay = 86400000;
const today = new Date().getTime() + oneDay;

const reserved = Array.from({ length: 3 }, (_, i) => {
  const daysCount = Math.floor(Math.random() * (7 - 4) + 3);
  const startDate = new Date(today + oneDay * 8 * i);

  return {
    startDate,
    endDate: new Date(startDate.getTime() + oneDay * daysCount),
  };
});

export const BookingCalendar = () => {
  const [selectedDates, setSelectedDates] = useState<CalendarSelected[]>([]);

  return (
    <div className="calendar form-box-shadow mx-auto mt-5 mt-md-3 p-3">
      <Calendar selected={selectedDates} reserved={reserved} onChange={setSelectedDates} />
    </div>
  );
};
