import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function SystemHealthCard() {
  // Mock data (Can be dynamic)
  const healthStats = [
    { label: "MIN", value: "180 ms" },
    { label: "AVERAGE", value: "208 ms" },
    { label: "MAX", value: "250 ms" }
  ];

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold text-gray-800 text-center">
          SYSTEM HEALTH
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-3 text-center">
          {healthStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-sm font-medium text-gray-600">
                {stat.label}
              </span>
              <span className="text-lg font-bold text-gray-900">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
