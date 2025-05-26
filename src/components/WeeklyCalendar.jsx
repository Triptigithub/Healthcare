
import React from "react";
import ScheduleOverview from "./AppointmentSummaryCard";
import { CalendarData } from "../data";

const TimeBlock = ({ timeSlot }) => {
  let classNames =
    "h-8 md:h-8 min-w-full flex items-center justify-center max-sm:rounded-md rounded-[10px] text-xs";
  if (timeSlot.booked) {
    classNames += ` ${timeSlot.bookedColor || "bg-cl-calendar-event text-white"}`;
  }
  return (
    <div className={`${classNames} relative`}>
      {timeSlot.time.substring(0, 5)}
      {timeSlot.bookedColor === "bg-cl-calendar-blue text-white font-medium" && (
        <div className="bg-white p-[0.3vh] absolute bottom-1 rounded-full"></div>
      )}
    </div>
  );
};

const DailyColumn = ({ dailyData }) => {
  const isSelectedDay = dailyData.dayName === "Tues";
  return (
    <div
      className={`flex flex-col xl:w-[120%] lg:p-4 lg:w-[80%] items-center space-y-2 2xl:space-y-3 xl:p-2 py-4 rounded-xl ${
        isSelectedDay ? "bg-[#ecf3fe] shadow-md" : ""
      }`}
    >
      <span
        className={`text-xs font-medium ${
          isSelectedDay ? "text-cl-blue" : "text-cl-text-secondary"
        }`}
      >
        {dailyData.dayName}
      </span>
      <span
        className={`text-lg font-semibold ${
          isSelectedDay ? "text-cl-blue" : "text-cl-text-primary"
        }`}
      >
        {dailyData.dateNumber}
      </span>
      <div className="space-y-0.5 w-full">
        {dailyData.slots.slice(0, 3).map((slot, index) => (
          <TimeBlock key={index} timeSlot={slot} />
        ))}
      </div>
    </div>
  );
};

const WeeklyCalendar = () => {
  return (
    <div className="bg-cl-background-light p-5 xl:pt-[15vh] overflow-y-auto xl:absolute top-0 rounded-2xl shadow-card-lg h-full 2xl:w-[37vw]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-semibold text-cl-text-primary">
          October 2021
        </h3>
        <div className="flex space-x-2 2xl:mr-2">
          <button
            className="p-1.5 rounded-md hover:bg-gray-100 text-cl-text-secondary hover:text-cl-blue"
            aria-label="Previous month"
          >
            <img className="rotate-180" src="../arrow.png" alt="Previous" />
          </button>
          <button
            className="p-1.5 rounded-md hover:bg-gray-100 text-cl-text-secondary hover:text-cl-blue"
            aria-label="Next month"
          >
            <img src="../arrow.png" alt="Next" />
          </button>
        </div>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 lg:pr-10 md:gap-1.5">
        {CalendarData.map((dailyData) => (
          <DailyColumn key={dailyData.dayName} dailyData={dailyData} />
        ))}
      </div>

      {/* Appointments Section */}
      <div className="mt-12 2xl:mr-12">
        <ScheduleOverview />
      </div>
    </div>
  );
};

export default WeeklyCalendar;