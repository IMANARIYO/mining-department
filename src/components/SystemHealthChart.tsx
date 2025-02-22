"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie, LabelList } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";

interface SystemHealthChartProps {
  apiEndpoint?: string; // Optional API
}

export function SystemHealthChart({
  apiEndpoint = undefined
}: SystemHealthChartProps) {
  const defaultData = [
    { name: "Storage", value: 65, fill: "hsl(var(--chart-1))" },
    { name: "Memory", value: 70, fill: "hsl(var(--chart-2))" },
    { name: "CPU", value: 50, fill: "hsl(var(--chart-3))" },
    { name: "Network", value: 30, fill: "hsl(var(--chart-4))" }
  ];

  const [data, setData] = useState(defaultData);

  useEffect(() => {
    if (!apiEndpoint) return; // Skip fetching if API is not provided

    const fetchSystemHealth = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        const { storage, memory, cpu, network } = response.data;

        setData([
          { name: "Storage", value: storage, fill: "hsl(var(--chart-1))" },
          { name: "Memory", value: memory, fill: "hsl(var(--chart-2))" },
          { name: "CPU", value: cpu, fill: "hsl(var(--chart-3))" },
          { name: "Network", value: network, fill: "hsl(var(--chart-4))" }
        ]);
      } catch (error) {
        console.error("Failed to fetch system health:", error);
        setData(defaultData); // Revert to default if fetching fails
      }
    };

    fetchSystemHealth();
    const interval = setInterval(fetchSystemHealth, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, [apiEndpoint]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>System Health</CardTitle>
        <CardDescription>
          {apiEndpoint
            ? "Live system performance data"
            : "Mock data (API not available)"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}>
            <LabelList
              dataKey="name"
              position="inside"
              stroke="none"
              fontSize={12}
            />
          </Pie>
        </PieChart>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        {apiEndpoint ? "Updated every 5 seconds" : "Showing sample data"}
      </CardFooter>
    </Card>
  );
}
