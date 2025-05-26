
import React from 'react';
import HealthDashboard from './HealthMetricCard';
import ActivityBarChart from './ActivityBarChart';
import WeeklyCalendar from './WeeklyCalendar';

const DashboardLayout = () => {
  return (
    // Main section container for full dashboard view
    <div className="space-y-6 lg:space-y-8">
      <div className="grid grid-cols-1 xl:grid-cols-9 gap-6 lg:gap-8">
        {/* Left section with health overview and activity graph */}
        <div className="lg:col-span-1 xl:col-span-5 space-y-6 2xl:mb-[8vh] lg:space-y-8">
          <HealthDashboard />
          <ActivityBarChart />
        </div>

        {/* Right section with calendar and appointments */}
        <div className="lg:col-span-1 space-y-6 xl:col-span-4 lg:space-y-8">
          <WeeklyCalendar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
