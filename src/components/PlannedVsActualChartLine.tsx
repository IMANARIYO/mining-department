"use client";
import React from "react";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// **Static Data: Planned vs Actual Mining Tons**
const miningData = [
  { day: "Monday", planned: 3500, actual: 320 },
  { day: "Tuesday", planned: 10, actual: 30 },
  { day: "Wednesday", planned: 420, actual: 90 },
  { day: "Thursday", planned: 380, actual: 360 },
  { day: "Friday", planned: 50, actual: 40 },
  { day: "Saturday", planned: 470, actual: 440 },
  { day: "Sunday", planned: 500, actual: 1480 },
];

// **Chart Configuration**
const chartConfig: { [key: string]: { label: string; color: string } } = {
  planned: { label: "Planned Tons", color: "blue" },
  actual: { label: "Actual Tons", color: "green" },
};

// **Chart Component**
export default function PlannedVsActualMiningData() {
  return (
    <Card className="mix-blend-normal h-full">
      <CardHeader>
        <CardTitle>Planned vs. Actual Mining Data</CardTitle>
      </CardHeader>

      <CardContent>
        {/* Line Chart */}
        <div className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={miningData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" label={{ value: "Days", position: "insideBottom", offset: -2 }} />
              <YAxis label={{ value: "Tons", angle: -90, position: "insideLeft" }} domain={[0, "auto"]} />
              <Tooltip />
              <Legend />

              {/* Plot Lines for Planned & Actual Tons */}
              {Object.keys(chartConfig).map((key) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={chartConfig[key].color}
                  strokeWidth={2}
                  dot={{ fill: chartConfig[key].color }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
