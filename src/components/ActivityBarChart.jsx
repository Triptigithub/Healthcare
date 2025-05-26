
import React from "react";
import { ActivityGraphData } from "../data";

const ActivityBarChart = () => {
  return (
    <div className="bg-cl-background-light p-6 xl:ml-6 rounded-2xl shadow-card-lg">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-semibold text-cl-text-primary">Activity</h3>
        <span className="text-xs text-cl-text-muted">3 appointments this week</span>
      </div>

      <div className="mt-4 h-42 min-w-fit grid grid-cols-8 items-end justify-around space-x-2 px-2">
        {ActivityGraphData.map((dayData) => (
          <div key={dayData.name} className="flex flex-col col-span-1 items-center">
            <div className="flex w-full items-end justify-around h-full">
              {dayData.uv.map((barSegment, index) => (
                <div key={index} className="md:w-1 w-[3px]">
                  <div className={`bg-${
                    barSegment[4] === 0
                      ? "cl-bar-grey"
                      : barSegment[4] === 1
                      ? "cl-bar-blue"
                      : "cl-bar-dark"
                  } h-[${barSegment[0]}px]`}></div>

                  <div className={`h-[${barSegment[3]}px] w-full rounded-t-full`}></div>

                  <div
                    className={`bg-${
                      barSegment[5] === 0
                        ? "cl-bar-grey"
                        : barSegment[5] === 1
                        ? "cl-bar-blue"
                        : "cl-bar-dark"
                    } h-[${barSegment[1]}px] rounded-b-full mb-[${barSegment[2]}px]`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Weekday Labels */}
      <div className="flex justify-around w-full">
        {ActivityGraphData.slice(0, 7).map((weekday) => (
          <div key={weekday.name} className="flex flex-col items-center">
            <span className="mt-2 text-xs text-cl-text-muted">{weekday.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityBarChart;