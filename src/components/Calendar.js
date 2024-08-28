import React from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  return (
    <div>
      <h2>Book a Meeting</h2>
      <Calendar />
      {/* Add integration with calendar APIs and booking forms here */}
    </div>
  );
};

export default CalendarComponent;
