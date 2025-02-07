"use client";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 }
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb" // Blue
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa" // Light Blue
  }
} satisfies ChartConfig;

export function ChartComponent() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[8rem] w-full bg-slate-200 pt-8 z-0">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
        className="z-3 bg-cyan-950"
          dataKey="month"
          tickLine={false}
          tickMargin={5}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} tickMargin={5} axisLine={true} />
        <ChartTooltip content={<ChartTooltipContent />} />
        {/* Added Legend */}
        <Legend />
        {/* Fixed Color Usage */}
        <Bar dataKey="desktop" fill="#2563eb" radius={4} name="Desktop" />
        <Bar dataKey="mobile" fill="#60a5fa" radius={4} name="Mobile" />
      </BarChart>
    </ChartContainer>
  );
}
