import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";


import { Droplet, Wind, Sun } from "lucide-react";

const MineOpsDashboard = () => {
    const productionData = [
      {
        title: "Overall Production",
        data: [
          { label: "Total Ore Mined", value: "245,678 tons" },
          {
            label: "+12.5% vs last period",
            value: "Updated 5m ago",
            textColor: "text-green-600"
          }
        ]
      },
      {
        title: "Safety Incidents",
        data: [
          { label: "LTI", value: "2", textColor: "text-red-600" },
          { label: "Recordable", value: "5", textColor: "text-yellow-600" },
          { label: "Near Miss", value: "12", textColor: "text-blue-600" }
        ]
      }
    ];

    const equipmentOptions = ["machine1", "machine2", "machine3", "equip2"];
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">MineOps</h1>
          <span className="text-gray-600">Copper Mountain Mine, BC</span>
        </div>
        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="select days" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>days</SelectLabel>
                <SelectItem value="7">last 7days</SelectItem>
                <SelectItem value="10">last 10 days</SelectItem>
                <SelectItem value="20">last 20 dyas</SelectItem>
                <SelectItem value="30">month</SelectItem>
                <SelectItem value="60">two moths</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Upper Section - Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Production Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Overall Production</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="grid grid-cols-2 items-center">
                <div className="text-sm text-gray-500">Total Ore Mined</div>
                <div className="text-md font-bold text-right">245,678 tons</div>
              </div>
            </div>

            {/* Placeholder (Same Height for All Cards) */}
            <div className="h-24 bg-gray-200 rounded-md"></div>

            <div className="grid grid-cols-2 items-center">
              <div className="text-sm text-green-600">
                +12.5% vs last period
              </div>
              <div className="text-xs text-gray-400 text-right">
                Updated 5m ago
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety Incidents Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Safety Incidents</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">2</div>
                <div className="text-sm text-gray-500">LTI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600">5</div>
                <div className="text-sm text-gray-500">Recordable</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">12</div>
                <div className="text-sm text-gray-500">Near Miss</div>
              </div>
            </div>

            {/* Placeholder */}
            <div className="h-24 bg-gray-200 rounded-md"></div>
          </CardContent>
        </Card>

        {/* Equipment Utilization Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Equipment Utilization</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Select equipment" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Equipments</SelectLabel>
                  <SelectItem value="machine1">Machine 1</SelectItem>
                  <SelectItem value="machine2">Machine 2</SelectItem>
                  <SelectItem value="machine3">Machine 3</SelectItem>
                  <SelectItem value="equip1">Equip 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Placeholder */}
            <div className="h-24 bg-gray-200 rounded-md mt-2"></div>
          </CardContent>
        </Card>
      </div>

      {/* Middle Section - Map and Equipment */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mine Map Section */}
        <div className="md:col-span-2">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Mine Map</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="h-64 bg-gray-100 rounded-md"></div>

              {/* Map Controls */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                <button className="p-2 bg-white rounded shadow text-gray-700">
                  Geology
                </button>
                <button className="p-2 bg-white rounded shadow text-gray-700">
                  Topography
                </button>
                <button className="p-2 bg-white rounded shadow text-gray-700">
                  Infrastructure
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Equipment Status - Scrollable & Dynamic */}
        <Card className="max-h-[400px] overflow-y-auto overflow-x-hidden">
          <CardHeader className="sticky top-0 bg-white z-10 ">
            <CardTitle>Equipment Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                name: "Excavator #EX-101",
                status: "Active",
                statusColor: "green",
                operator: "John Smith",
                location: "Pit A-North",
                runtime: "6.5 hrs"
              },
              {
                name: "Haul Truck #HT-205",
                status: "Maintenance",
                statusColor: "blue",
                operator: "Sarah Johnson",
                location: "Workshop",
                runtime: "Downtime: 2.3 hrs"
              },
              {
                name: "Drill Rig #DR-456",
                status: "Inactive",
                statusColor: "red",
                operator: "Mike Brown",
                location: "Drill Site",
                runtime: "Idle"
              },
              {
                name: "Bulldozer #BD-789",
                status: "Active",
                statusColor: "green",
                operator: "David Lee",
                location: "Clearing Zone",
                runtime: "4 hrs"
              },
              {
                name: "Dump Truck #DT-302",
                status: "Maintenance",
                statusColor: "blue",
                operator: "Lisa Wong",
                location: "Garage",
                runtime: "Repair Ongoing"
              }
            ].map((equipment, index) => (
              <Card
                key={index}
                className="transition-transform hover:scale-[1.02] hover:shadow-lg w-full">
                <CardHeader>
                  <CardTitle>{equipment.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500">
                      Operator: {equipment.operator}
                    </span>
                    <span
                      className={`px-2 py-1 bg-${equipment.statusColor}-100 text-${equipment.statusColor}-800 rounded text-sm`}>
                      {equipment.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Location: {equipment.location}
                  </p>
                  <p className="text-sm text-gray-500">{equipment.runtime}</p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section - Resources and Weather */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Resource Management */}
        <Card>
          <CardHeader>
            <CardTitle>Resource Management</CardTitle>
          </CardHeader>
          <CardContent>
            {[
              { label: "Fuel", percentage: 75 },
              { label: "Explosives", percentage: 50 },
              { label: "Consumables", percentage: 25 }
            ].map((resource, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span>{resource.label}</span>
                  <span>{resource.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-600 h-2 rounded-full"
                    style={{ width: `${resource.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weather & Environmental */}
        <Card>
          <CardHeader>
            <CardTitle>Weather & Environmental</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Weather Icons */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: <Sun className="w-6 h-6 text-yellow-500" />,
                  value: "25°C"
                },
                {
                  icon: <Wind className="w-6 h-6 text-blue-500" />,
                  value: "15 km/h"
                },
                {
                  icon: <Droplet className="w-6 h-6 text-blue-500" />,
                  value: "0%"
                }
              ].map((weather, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-2 bg-gray-100 rounded-md">
                  {weather.icon}
                  <div className="text-xl font-bold">{weather.value}</div>
                </div>
              ))}
            </div>

            {/* Environmental Data */}
            {[
              {
                label: "Air Quality Index",
                value: "Good (45)",
                color: "text-green-600"
              },
              { label: "Water pH Level", value: "7.2" },
              { label: "Noise Level", value: "72 dB" }
            ].map((env, index) => (
              <div>
                <div
                  key={index}
                  className="flex justify-between p-1">
                  <span>{env.label}</span>
                  <span className={env.color}>{env.value}</span>
                </div>
                <Separator />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MineOpsDashboard;
