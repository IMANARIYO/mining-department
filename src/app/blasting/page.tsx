import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Clock } from "lucide-react";

interface BlastData {
  id: string;
  location: string;
  status: string;
  scheduledTime: string;
  supervisor: string;
}

const BlastingDashboard = () => {
  const activeBlast: BlastData = {
    id: "BL-2025-0234",
    location: "Level 450 West",
    status: "In Progress",
    scheduledTime: "15:30",
    supervisor: "Mike Johnson"
  };

  return (
    <div className="p-6">
      {/* Grid for Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[
          { title: "Total Blasts This Week", value: "24", change: "+12%" },
          { title: "Meters Advanced", value: "156m", change: "+8%" },
          { title: "Misfire Rate", value: "0.5%", change: "-0.2%" }
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <div
                className={`text-sm ${
                  item.change.includes("+") ? "text-green-600" : "text-red-600"
                }`}>
                {item.change} from last week
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Grid for Active Blasts & Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Active Blasts Table */}
        <Card className="overflow-x-auto">
          <CardHeader>
            <CardTitle>Active Blasts</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-sm text-gray-500 border-b">
                  {[
                    "Blast ID",
                    "Location",
                    "Status",
                    "Scheduled Time",
                    "Supervisor"
                  ].map((header) => (
                    <th key={header} className="text-left py-2">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-blue-600">{activeBlast.id}</td>
                  <td className="py-2">{activeBlast.location}</td>
                  <td className="py-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {activeBlast.status}
                    </span>
                  </td>
                  <td className="py-2">{activeBlast.scheduledTime}</td>
                  <td className="py-2">{activeBlast.supervisor}</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Right Section: Resources & Alerts */}
        <div className="grid gap-6">
          {/* Resource Availability */}
          <Card>
            <CardHeader>
              <CardTitle>Resource Availability</CardTitle>
            </CardHeader>
            <CardContent>
              {[
                { label: "Explosives Stock", value: 75 },
                { label: "Detonators", value: 60 }
              ].map((resource, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between text-sm">
                    <span>{resource.label}</span>
                    <span>{resource.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${resource.value}%` }}></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Safety Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Safety Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: AlertTriangle,
                  message: "Weather Warning: High winds expected at 16:00",
                  variant: "destructive" as "destructive"
                },
                {
                  icon: Clock,
                  message: "Maintenance scheduled for Equipment #B-123",
                  variant: "default" as "default"
                }
              ].map((alert, index) => (
                <Alert key={index} variant={alert.variant}>
                  <alert.icon className="h-4 w-4" />
                  <AlertDescription>{alert.message}</AlertDescription>
                </Alert>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlastingDashboard;
