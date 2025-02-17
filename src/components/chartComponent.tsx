import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const TunnelPerformanceChart = () => {
  const data = [
    {
      tunnel: "Tunnel 21",
      expected: 1000,
      actual: 850
    },
    {
      tunnel: "Tunnel 22",
      expected: 1200,
      actual: 1100
    },
    {
      tunnel: "Tunnel 23",
      expected: 900,
      actual: 950
    },
    {
      tunnel: "Tunnel 24",
      expected: 1500,
      actual: 1350
    },
    {
      tunnel: "Tunnel 25",
      expected: 1100,
      actual: 1050
    }
  ];


  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="tunnel" />
        <YAxis label={{ value: "Tons", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="expected" fill="#8884d8" name="Expected Output" />
        <Bar dataKey="actual" fill="#82ca9d" name="Actual Output" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TunnelPerformanceChart;
