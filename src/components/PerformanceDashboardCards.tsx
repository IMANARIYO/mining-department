import React, { JSX } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const PerformanceDashboardCards = () => {
  const performanceData = {
    maintenanceHours: {
      current: 45,
      lastWeek: 52,
      unit: "hours"
    },
    equipAvailability: {
      current: 92.5,
      lastWeek: 89.3,
      unit: "%"
    },
    breakdownFrequency: {
      current: 3.2,
      lastWeek: 4.7,
      unit: "incidents"
    }
  };

interface PerformanceData {
    current: number;
    lastWeek: number;
    unit: string;
}

interface PerformanceMetrics {
    maintenanceHours: PerformanceData;
    equipAvailability: PerformanceData;
    breakdownFrequency: PerformanceData;
}

const renderComparisonIcon = (current: number, lastWeek: number): JSX.Element => {
    const percentageChange = ((current - lastWeek) / lastWeek) * 100;

    return percentageChange >= 0 ? (
        <ArrowUp className="text-green-500" />
    ) : (
        <ArrowDown className="text-red-500" />
    );
};

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-600">Maintenance Hours</h3>
          {renderComparisonIcon(
            performanceData.maintenanceHours.current,
            performanceData.maintenanceHours.lastWeek
          )}
        </div>
        <div className="flex items-baseline mt-2">
          <span className="text-2xl font-bold">
            {performanceData.maintenanceHours.current}
          </span>
          <span className="text-sm text-gray-500 ml-2">
            {performanceData.maintenanceHours.unit}
          </span>
        </div>
        <div className="text-sm text-gray-500">
          vs last week: {performanceData.maintenanceHours.lastWeek} hours
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-600">Equipment Availability</h3>
          {renderComparisonIcon(
            performanceData.equipAvailability.current,
            performanceData.equipAvailability.lastWeek
          )}
        </div>
        <div className="flex items-baseline mt-2">
          <span className="text-2xl font-bold">
            {performanceData.equipAvailability.current}
          </span>
          <span className="text-sm text-gray-500 ml-2">
            {performanceData.equipAvailability.unit}
          </span>
        </div>
        <div className="text-sm text-gray-500">
          vs last week: {performanceData.equipAvailability.lastWeek}%
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-600">Breakdown Frequency</h3>
          {renderComparisonIcon(
            performanceData.breakdownFrequency.current,
            performanceData.breakdownFrequency.lastWeek
          )}
        </div>
        <div className="flex items-baseline mt-2">
          <span className="text-2xl font-bold">
            {performanceData.breakdownFrequency.current}
          </span>
          <span className="text-sm text-gray-500 ml-2">
            {performanceData.breakdownFrequency.unit}
          </span>
        </div>
        <div className="text-sm text-gray-500">
          vs last week: {performanceData.breakdownFrequency.lastWeek} incidents
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboardCards;
