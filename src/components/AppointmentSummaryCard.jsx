import React from "react";
import { AppointmentData, UpcomingScheduleData } from "../data";

const AppointmentSummaryCard = ({ entry }) => (
  <div className={`p-6 rounded-[30px] shadow-card ${entry.BgColor} ${entry.TextColor} ${entry.width}`}>
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-semibold text-sm my-3 md:mr-8">{entry.title}</h4>
        <p className="text-xs">{entry.time}</p>
        <p className="text-xs mt-0.5">{entry.doctor}</p>
      </div>
      <div className="p-1.5 rounded-lg">{entry.icon}</div>
    </div>
  </div>
);

const UpcomingAppointmentCard = ({ schedule }) => (
  <div className={`p-4 rounded-[25px] shadow-card ${schedule.BgColor} ${schedule.TextColor} ${schedule.width}`}>
    <div className="flex justify-between items-start">
      <div className="p-2">
        <h4 className="font-semibold text-sm my-2">{schedule.title}</h4>
        <p className="text-xs">{schedule.time}</p>
      </div>
      <div className="p-1.5 rounded-lg">{schedule.icon}</div>
    </div>
  </div>
);

const ScheduleOverview = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:flex gap-4">
        {AppointmentData.map((entry) => (
          <AppointmentSummaryCard key={entry.id} entry={entry} />
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-cl-text-primary mb-3">
          Upcoming Schedule
        </h3>
        <div className="space-y-4">
          {UpcomingScheduleData.map((scheduleGroup) => (
            <div key={scheduleGroup.id}>
              <h4 className="text-md font-medium text-cl-text-secondary lg:mt-7 lg:mb-4 my-2">
                {scheduleGroup.day}
              </h4>
              <div className="grid grid-cols-1 sm:flex gap-4">
                {scheduleGroup.items.map((schedule) => (
                  <UpcomingAppointmentCard key={schedule.id} schedule={schedule} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleOverview;
