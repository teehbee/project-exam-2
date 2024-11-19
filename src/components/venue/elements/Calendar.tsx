import { useState } from "react";
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

  console.log(selectedDates);

  return (
    <div className="calendar form-box-shadow mx-auto mt-5 mt-md-3 p-3">
      <Calendar reserved={reservedDates} onChange={setSelectedDates} selected={selectedDates} range={true} />
    </div>
  );
};
