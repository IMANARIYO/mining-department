"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { User } from "lucide-react";
// Importing the DatePickerWithRange component
import { DateRange } from "react-day-picker"; // Ensure the correct import for DateRange
import { DatePickerWithRange } from "@/components/dateRangePicker";
import CustomSelect from "@/components/CustomSelect";
const MineManagerDashboard = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date("2025-01-01"),
    to: new Date("2025-12-31")
  });
  
  


   // State to store selected values
   const [selectedDepartment, setSelectedDepartment] = useState("");
   const [selectedDataType, setSelectedDataType] = useState("");
   const [selectedSite, setSelectedSite] = useState("");


  const [requests] = useState([
    {
      id: "#REQ001",
      department: "Site Management",
      dataType: "Production Data",
      status: "Pending",
      lastUpdated: "2025-01-15"
    },
    {
      id: "#REQ002",
      department: "Tunnel Operations",
      dataType: "Safety Reports",
      status: "Completed",
      lastUpdated: "2025-01-14"
    }
  ]);

  const handleDateRangeChange = (newDateRange: DateRange | undefined) => {
    setDateRange(newDateRange); // Update the date range in the parent state
  };
 const handleSubmit = () => {
   console.log("Selected Department:", selectedDepartment);
   console.log("Selected Data Type:", selectedDataType);
   console.log("Selected Site/Tunnel:", selectedSite);
 };
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-slate-100 rounded">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold">Mine Manager Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          {/* Displaying selected date range */}
          {/* <span>
            {dateRange?.from
              ? `${dateRange.from.toLocaleDateString()} to `
              : "Pick a date range"}
            {dateRange?.to && dateRange.to.toLocaleDateString()}
          </span> */}

          <DatePickerWithRange onDateChange={handleDateRangeChange} />

          <User className="w-6 h-6" />
        </div>
      </div>

      {/* New Data Request Section */}
      {/* New Data Request Section */}
      <Card>
        <CardHeader>
          <CardTitle>New Data Request</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <CustomSelect
              options={[
                { label: "Site Management", value: "site" },
                { label: "Tunnel Operations", value: "tunnel" }
              ]}
              placeholder="Select Department"
              onChange={setSelectedDepartment}
            />

            <CustomSelect
              options={[
                { label: "Production Data", value: "production" },
                { label: "Safety Reports", value: "safety" }
              ]}
              placeholder="Select Data Type"
              onChange={setSelectedDataType}
            />

            <CustomSelect
              options={[
                { label: "Tunnel 1", value: "tunnel1" },
                { label: "Tunnel 2", value: "tunnel2" },
                { label: "Tunnel 3", value: "tunnel3" }
              ]}
              placeholder="Select Site/Tunnel"
              onChange={setSelectedSite}
            />
          </div>
          <Textarea placeholder="Additional details..." className="w-full" />
          <Button
            onClick={handleSubmit}
            className="bg-slate-900 text-white hover:bg-slate-800">
            Send Request
          </Button>
        </CardContent>
      </Card>

      {/* Date Range Picker */}

      {/* Request Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Request Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="py-2">Request ID</th>
                <th>Department</th>
                <th>Data Type</th>
                <th>Status</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-t">
                  <td className="py-3">{request.id}</td>
                  <td>{request.department}</td>
                  <td>{request.dataType}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        request.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}>
                      {request.status}
                    </span>
                  </td>
                  <td>{request.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Message Board */}
      <div className="grid grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Message Board</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded">
              <User className="w-8 h-8" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">John Smith</span>
                  <span className="text-sm text-slate-500">Site Manager</span>
                </div>
                <p className="mt-1">
                  Updated production report for Tunnel 3 is now available.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <User className="w-8 h-8" />
              <div>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-slate-500">
                  Tunnel Operations Lead
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Review */}
      <div className="grid grid-cols-3 gap-6">
        <Card className="bg-slate-700 text-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-center">
              Production Chart
            </h3>
          </CardContent>
        </Card>
        <Card className="bg-slate-700 text-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-center">
              Safety Metrics
            </h3>
          </CardContent>
        </Card>
        <Card className="bg-slate-700 text-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-center">
              Equipment Status
            </h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MineManagerDashboard;
