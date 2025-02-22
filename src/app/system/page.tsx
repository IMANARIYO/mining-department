"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DynamicPieChartComponent } from "@/components/DynamicPieChart";
import { DynamicPieChartLabelList } from "@/components/DynamicPieChartLabelList";
;
import { ActivityFeed } from "./activityFeed";
import { Separator } from "@/components/ui/separator";
import { SystemHealthCard } from "./SystemHealthCard";
import { StaticPieChart } from "@/components/pieChart";

// Example Data for Charts
const systemHealthData = [
  { name: "Storage", value: 30, fill: "#0088FE" },
  { name: "Memory", value: 50, fill: "#00C49F" },
  { name: "CPU", value: 20, fill: "#FFBB28" },
  { name: "Network", value: 40, fill: "#FF8042" }
];
const currentUtilizationData = [
  { name: "Storage", value: 30, fill: "#0088FE" },
  { name: "Memory", value: 50, fill: "#00C49F" },
  { name: "CPU", value: 20, fill: "#FFBB28" },
  { name: "Network", value: 40, fill: "#FF8042" }
];
const memoryUsageData = [
  { name: "Web Server", value: 25, fill: "#0088FE" },
  { name: "Database", value: 40, fill: "#00C49F" },
  { name: "Analytics", value: 15, fill: "#FFBB28" },
  { name: "Cache", value: 10, fill: "#FF8042" },
  { name: "Others", value: 10, fill: "#8884d8" }
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* 🟢 Top Row: System Utilization & Memory Usage Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DynamicPieChartLabelList
          chartData={currentUtilizationData}
          title="System Utilization"
          description="Current utilization levels"
          footerText="System Uptime: 95%"
          footerDescription="Last time backup: 2 hours"
        />
        {/* Memory Usage Donut Chart */}
        <DynamicPieChartComponent
          title="Memory Usage"
          description="Real-time resource utilization"
          data={memoryUsageData}
          className="w-full"
        />
        {/* <StaticPieChart /> */}
      </div>

      {/* 🟠 Bottom Row: Activity Feed (75%) & System Stats (25%) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* 📌 Activity Feed - Takes 75% of Width */}
        <div className="md:col-span-3">
          <ActivityFeed />
        </div>

        {/* 📌 System Stats - Takes 25% of Width */}
        <div className="grid gap-4">
          <SystemHealthCard />
          <Separator />
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-gray-800">
                ACTIVE USERS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-center">
              <div className="grid grid-cols-2 text-sm font-medium text-gray-600">
                <span>LOGINS</span>
                <span className="font-bold text-gray-900">18</span>
              </div>
              <Separator />
              <div className="grid grid-cols-2 text-sm font-medium text-gray-600">
                <span>LOGGED OFF</span>
                <span className="font-bold text-gray-900">12</span>
              </div>
              <Separator />
              <div className="grid grid-cols-2 text-sm font-medium text-gray-600">
                <span>PENDING</span>
                <span className="font-bold text-gray-900">4</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
