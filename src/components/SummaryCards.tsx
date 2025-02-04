import { Activity, AlertTriangle, TrendingDown, TrendingUp } from "lucide-react";

export function SummaryCards() {
  const summaryData = [
    {
      title: "Overall Progress",
      value: "76.5%",
      change: "+2.3% from last week",
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Advancement Rate",
      value: "10m/day",
      change: "AVG across all tunnels",
      icon: <TrendingDown className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Incidents",
      value: "3",
      change: "2 Unresolved",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Resource Utilization",
      value: "89%",
      change: "Equipment Efficiency",
      icon: <Activity className="w-6 h-6 text-yellow-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {summaryData.map((data, index) => (
        <div key={index} className="bg-white p-4 shadow-md rounded-lg flex items-center space-x-4">
          {data.icon}
          <div>
            <h2 className="text-gray-500">{data.title}</h2>
            <p className="text-2xl font-bold">{data.value}</p>
            <span className="text-sm text-gray-400">{data.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
