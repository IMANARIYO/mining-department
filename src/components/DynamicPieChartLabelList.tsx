"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  ChartLegendContent,
  ChartTooltipContent
} from "@/components/ui/chart";

// Define types for dynamic chart data
interface ChartData {
  name: string;
  value: number;
  fill: string;
}

interface DynamicPieChartLabelListProps {
  chartData: ChartData[];
  
  title: string;
  description: string;
  footerText?: string;
  footerDescription?: string;
}

export function DynamicPieChartLabelList({
  chartData,
  
  title,
  description,
  footerText,
  footerDescription
}: DynamicPieChartLabelListProps) {
  function CustomTooltip({ payload }: any) {
    // Check if there is any data in the payload
    if (!payload || payload.length === 0) return null;
    const { name, value } = payload[0].payload; // Access the hovered data
    return (
      <div className="tooltip-content bg-white p-2 rounded shadow-md">
        <strong>{name}</strong>
        <div>{`Value: ${value}`}</div>
      </div>
    );
  }
  // Generate dynamic config based on chartData
  const chartConfig = chartData.reduce((config, item) => {
    config[item.name] = {
      label: item.name,
      color: item.fill
    };
    
    return config;
  }, {} as Record<string, { label: string; color: string }>);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
    <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background">
          <PieChart>
            <ChartTooltip
              // content={<ChartTooltipContent nameKey="value" />}
              content={<CustomTooltip />}
            />

            <Pie data={chartData} dataKey="value">
              <LabelList
                dataKey="name"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: string) => {
                  const item = chartData.find((data) => data.name === value);
                  return item
                    ? `${item.name.slice(0, 1)}: ${item.value}`
                    : value;
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="value" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {footerText}
        </div>
        <div className="leading-none text-muted-foreground">
          {footerDescription}
        </div>
      </CardFooter>
    </Card>
  );
}

// Example usage of the dynamic pie chart component
const chartData = [
  { name: "Chrome", value: 275, fill: "var(--color-chrome)" },
  { name: "Safari", value: 200, fill: "var(--color-safari)" },
  { name: "Firefox", value: 187, fill: "var(--color-firefox)" },
  { name: "Edge", value: 173, fill: "var(--color-edge)" },
  { name: "Other", value: 90, fill: "var(--color-other)" }
];

export function Component() {
  return (
    <DynamicPieChartLabelList
      chartData={chartData}
      title="Pie Chart - Browser Distribution"
      description="January - June 2024"
      footerText="Trending up by 5.2% this month"
      footerDescription="Showing total visitors for the last 6 months"
    />
  );
}
