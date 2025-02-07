import React from "react";

interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

export function SummaryCard({ title, value, change, icon }: SummaryCardProps) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex items-center space-x-4 h-32">
      {icon}
      <div>
        <h2 className="text-gray-500">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
        <span className="text-sm text-gray-400">{change}</span>
      </div>
    </div>
  );
}
