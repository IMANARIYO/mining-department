"use client";
import CustomDatePicker from "@/components/CustomDatePicker";
import React, { useState } from "react";
import { AlertCircle, MapPin, Shield } from "lucide-react";
import { Combobox } from "@/components/Combobox";
import { DynamicLineChart } from "@/components/DynamicLineChart";
import { DynamicPieChartComponent } from "@/components/DynamicPieChart";
import { DynamicRisksMilestoneCriticalAlertCard } from "@/components/DynamicRisksMilestoneCriticalAlertCard";
import { SummaryCard } from "@/components/SummaryCard";

import { Calendar } from "@/components/ui/calendar";

// import MyDrawer from "@/components/Drawer";

import {
  Activity,
  AlertTriangle,
  TrendingDown,
  TrendingUp
} from "lucide-react";
import PlannedVsActualMiningData from "@/components/PlannedVsActualChartLine";
import TunnelPerformanceChart from "@/components/chartComponent";
import PerformanceDashboardCards from "@/components/PerformanceDashboardCards";

const salesData = [
  { quarter: "Q1", productA: 500, productB: 400, productC: 350 },
  { quarter: "Q2", productA: 600, productB: 450, productC: 380 },
  { quarter: "Q3", productA: 700, productB: 500, productC: 400 }
];

// Sample data for each type (could be dynamic data)
const riskItems = [
  { name: "Ground Risk", impact: "High", icon: <AlertCircle className="h-5 w-5 text-red-500" /> },
  { name: "Environmental Risk", impact: "Medium", icon: <Shield className="h-5 w-5 text-yellow-500" /> },
  { name: "Logistical Risk", impact: "Low", icon: <MapPin className="h-5 w-5 text-green-500" /> },
];

const milestoneItems = [
  { tunnel: "Tunnel A", progress: "+45m by Feb" },
  { tunnel: "Tunnel B", progress: "+30m by March" },
  { tunnel: "Tunnel C", progress: "+50m by April" },
  { tunnel: "Tunnel D", progress: "+50m by April" },
  { tunnel: "Tunnel E", progress: "+45m by Feb" },
  { tunnel: "Tunnel F", progress: "+30m by March" },
  { tunnel: "Tunnel G", progress: "+50m by April" },
  { tunnel: "Tunnel H", progress: "+50m by April" }
];

const alertItems = [
  { tunnel: "Tunnel A", alert: "Minor Incident" },
  { tunnel: "Tunnel B", alert: "Severe Blockage" },
  { tunnel: "Tunnel C", alert: "Collapsed Section" },
];
const salesConfig = {
  productA: { label: "Product A", color: "#ff0000" },
  productB: { label: "Product B", color: "#00ff00" },
  productC: { label: "Product C", color: "#0000ff" }
};
const myChartData = [
  { name: "High Quality", value: 275, fill: "#ff5733" }, // Example data
  { name: "Medium Quality", value: 200, fill: "#33ff57" },
  { name: "Low Quality", value: 187, fill: "#5733ff" },
  { name: "Poor Quality", value: 173, fill: "#f4c242" },
  { name: "Unclassified", value: 90, fill: "#d742f4" }
];


const tunnelData = [
  { month: "January", tunnelA: 50, tunnelB: 40, tunnelC: 30, tunnelD: 80 },
  { month: "February", tunnelA: 70, tunnelB: 30, tunnelC: 50, tunnelD: 40 },
  { month: "March", tunnelA: 80, tunnelB: 15, tunnelC: 65, tunnelD: 55 },
  { month: "April", tunnelA: 90, tunnelB: 85, tunnelC: 75, tunnelD: 65 }
];

const tunnelConfig = {
  tunnelA: { label: "Tunnel A", color: "#ff5733" },
  tunnelB: { label: "Tunnel B", color: "#33ff57" },
  tunnelC: { label: "Tunnel C", color: "#5733ff" },
  tunnelD: { label: "Tunnel D", color: "#ffa500" }
};
const tunnelOptions = [
  { tunnelId: "tunnel_2a", tunnelName: "TUNNEL 2A" },
  { tunnelId: "off_reef", tunnelName: "OFF REEF" },
  { tunnelId: "on_reef", tunnelName: "ON REEF" },
  { tunnelId: "rse", tunnelName: "RSE" },
  { tunnelId: "down_dip", tunnelName: "DOWN DIP" },
  { tunnelId: "orepass", tunnelName: "OREPASS" },
  { tunnelId: "stope", tunnelName: "STOPE" },
  { tunnelId: "shifts", tunnelName: "SHIFTS" },
  { tunnelId: "production", tunnelName: "PRODUCTION" },
  { tunnelId: "material_available", tunnelName: "MATERIAL AVAILABLE" },
  { tunnelId: "loco", tunnelName: "LOCO" },
  { tunnelId: "bob_cat", tunnelName: "BOB CAT" },
  { tunnelId: "wagons", tunnelName: "WAGONS" },
  { tunnelId: "compressor", tunnelName: "COMPRESSOR" },
  { tunnelId: "boesman", tunnelName: "BOESMAN" },
  { tunnelId: "pumps", tunnelName: "PUMPS" },
  { tunnelId: "lamps", tunnelName: "LAMPS" },
  { tunnelId: "labour", tunnelName: "LABOUR" },
  { tunnelId: "present", tunnelName: "PRESENT" },
  { tunnelId: "absent", tunnelName: "ABSENT" },
  { tunnelId: "sub_co", tunnelName: "SUB CO" },
  { tunnelId: "rdo", tunnelName: "RDO" },
  { tunnelId: "rutongo", tunnelName: "RUTONGO" }
];
const mappedOptions = tunnelOptions.map((option) => ({
  value: option.tunnelId,
  label: option.tunnelName
}));

function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTunnel, setSelectedTunnel] = useState<string>("");

  const handleTunnelChange = (value: string) => {
    setSelectedTunnel(value);
    console.log("Selected Tunnel ID:", value); // Handle selected tunnel ID
  };

  return (
    <div className="p-2 space-y-8 bg-gray-100 min-h-screen">
      <div className="">
        <div className="flex w-3/4 justify-between items-center ">
          <CustomDatePicker />
          <Combobox
            options={mappedOptions}
            onChange={handleTunnelChange}
            placeholder="Select a tunnel"
            noOptionsMessage="No tunnels available." // Custom message
            width="250px"
          />
        </div>
      </div>
      {/* First Layer: 4 Info Cards */}
      <div className="p-2 bg-gray-100  grid grid-cols-2 md:grid-cols-4 gap-4">
        <SummaryCard
          title="Overall Progress"
          value="76.5%"
          change="+2.3% from last week"
          icon={<TrendingUp className="w-6 h-6 text-green-500" />}
        />

        <SummaryCard
          title="Advancement Rate"
          value="10m/day"
          change="AVG across all tunnels"
          icon={<TrendingDown className="w-6 h-6 text-blue-500" />}
        />
        <SummaryCard
          title="Incidents"
          value="3"
          change="2 Unresolved"
          icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
        />
        <SummaryCard
          title="Resource Utilization"
          value="89%"
          change="Equipment Efficiency"
          icon={<Activity className="w-6 h-6 text-yellow-500" />}
        />
      </div>
      <div className="flex flex-col items-center">
        <DynamicPieChartComponent
          title="Mineral Quality Distribution"
          description="Quality of mined minerals for Q1 - 2024"
          data={myChartData}
          innerRadius={50}
          outerRadius={90}
          config={{}} // Add specific configurations for the chart if needed
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlannedVsActualMiningData />
        {/* Mineral Quality Distribution Pie Chart */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">
            daily Progress of tunnnels
          </h2>
          <TunnelPerformanceChart />
        </div>
      </div>
      {/* Second Layer: 2 Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="bg-white p-4 rounded-lg shadow-md">
          {" "}
          {/* actual component */}
          <DynamicLineChart
            data={tunnelData}
            config={tunnelConfig}
            xAxisKey="month"
            yAxisLabel="Progress"
            title="Tunnel Monthly Progress"
            description="Track tunnel progress over months."
          />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          {" "}
          {/*  actual component */}
          <DynamicLineChart
            data={salesData}
            config={salesConfig}
            xAxisKey="quarter"
            yAxisLabel="Sales"
            title="Quarterly Sales Data"
            description="Comparison of product sales across quarters."
          />
        </div>
      </div>
      {/* Third Layer: 3 Standard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Risk Assessment Card */}
        <DynamicRisksMilestoneCriticalAlertCard
          title="Risk Assessment"
          items={riskItems}
        />

        {/* Upcoming Milestones Card */}
        <DynamicRisksMilestoneCriticalAlertCard
          title="Upcoming Milestones"
          items={milestoneItems}
        />

        {/* Critical Alerts Card */}
        <DynamicRisksMilestoneCriticalAlertCard
          title="Critical Alerts"
          items={alertItems}
        />
      </div>
      {/* Fourth Layer: 3 Cards (60% Height of Above) */}
      <div>
        <h1>the equipment impact</h1>
      <PerformanceDashboardCards />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md h-24">
          maintnantence ahours
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-24">
          equip availablity
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-24">
          break down freaquence
        </div>
      </div> */}
      {/* Sixth Layer: Weekly Bar Chart */}
 
      {/* Seventh Layer: Data Table */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Summary Table</h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-1 border-gray-200 p-2">Tunnel</th>
              <th className="border-1 border-gray-200 p-2">Production</th>
              <th className="border-1 border-gray-200 p-2">Shifts</th>
              <th className="border-1 border-gray-200 p-2">Efficiency</th>
            </tr>
          </thead>
          <tbody>
            {tunnelOptions.slice(0, 5).map((tunnel) => (
              <tr key={tunnel.tunnelId}>
                <td className="border-1 border-gray-200 p-2">{tunnel.tunnelName}</td>
                <td className="border-1 border-gray-200 p-2">
                  {Math.floor(Math.random() * 1000)} tons
                </td>
                <td className="border-1 border-gray-200 p-2">{Math.floor(Math.random() * 50)}</td>
                <td className="border-1 border-gray-200 p-2">
                  {Math.floor(Math.random() * 100)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
