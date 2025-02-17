"use client"

import React from "react";
import { Card } from "@/components/ui/card";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { FileText, Clock, AlertTriangle, ChevronRight } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Sample Volume",
        data: [200, 250, 180, 290, 230],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        tension: 0.4
      }
    ]
  };

  const pieData = {
    labels: ["Type A", "Type B", "Type C", "Type D"],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: ["#2563eb", "#22c55e", "#facc15", "#ef4444"]
      }
    ]
  };

  return (
    <div>
        {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    title: "Samples Today",
                    value: "247",
                    change: "+12.5%",
                    icon: <FileText />
                  },
                  {
                    title: "Analyses Completed",
                    value: "189",
                    change: "+5.3%",
                    icon: <Clock />
                  },
                  {
                    title: "Avg. Turnaround Time",
                    value: "4.2h",
                    change: "-0.5h",
                    icon: <Clock />
                  },
                  {
                    title: "Pending Analyses",
                    value: "58",
                    change: "Critical: 12",
                    icon: <Clock />
                  }
                ].map((card, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-gray-500">{card.title}</h3>
                      <div className="text-gray-400">{card.icon}</div>
                    </div>
                    <div className="text-3xl font-bold mb-2">{card.value}</div>
                    <div className="text-sm text-gray-600">{card.change}</div>
                  </Card>
                ))}
              </div>
      
              {/* Charts Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <h3 className="text-gray-500 mb-4">Sample Volume Trend</h3>
                  <div className="h-64">
                    <Line
                      data={lineData}
                      options={{ responsive: true, maintainAspectRatio: false }}
                    />
                  </div>
                </Card>
      
                <Card className="p-6">
                  <h3 className="text-gray-500 mb-4">Sample Type Distribution</h3>
                  <div className="h-64">
                    <Pie
                      data={pieData}
                      options={{ responsive: true, maintainAspectRatio: false }}
                    />
                  </div>
                </Card>
              </div>
              {/* Recent Activity & Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="md:col-span-2">
                  <Card className="p-6">
                    <h3 className="text-gray-500 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      {[
                        {
                          title: "New Sample Registered",
                          detail: "Sample ID: MN-2025-0234",
                          time: "2 min ago",
                          icon: <FileText />,
                          color: "bg-blue-100 text-blue-600"
                        },
                        {
                          title: "Analysis Completed",
                          detail: "Batch: B-2025-039",
                          time: "5 min ago",
                          icon: <Clock />,
                          color: "bg-green-100 text-green-600"
                        },
                        {
                          title: "Critical Alert",
                          detail: "High copper content detected",
                          time: "30 min ago",
                          icon: <AlertTriangle />,
                          color: "bg-red-100 text-red-600"
                        }
                      ].map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 bg-gray-100 py-2 rounded-md">
                          <div className={`${activity.color} p-2 rounded`}>
                            {activity.icon}
                          </div>
                          <div>
                            <div className="font-medium">{activity.title}</div>
                            <div className="text-sm text-gray-500">
                              {activity.detail}
                            </div>
                            <div className="text-sm text-gray-500">
                              {activity.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
      
                {/* Quick Actions */}
                <Card className="p-6">
                  <h3 className="text-gray-500 mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    {[
                      "Register New Sample",
                      "Start Analysis",
                      "Generate Report",
                      "View All Samples"
                    ].map((action, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center justify-between p-2 hover:bg-gray-200 rounded bg-gray-100">
                        <span>{action}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </Card>
              </div>
    </div>
  );
};

export default Dashboard;
