"use client";
import * as React from "react";
import { Separator } from "@radix-ui/react-separator";
import { AlertCircle, MapPin, Shield } from "lucide-react";

// Sample items for each type (could be dynamic data)
const riskItems = [
  {
    name: "Ground Risk",
    impact: "High",
    icon: <AlertCircle className="h-5 w-5 text-red-500" />
  },
  {
    name: "Environmental Risk",
    impact: "Medium",
    icon: <Shield className="h-5 w-5 text-yellow-500" />
  },
  {
    name: "Logistical Risk",
    impact: "Low",
    icon: <MapPin className="h-5 w-5 text-green-500" />
  }
];

const milestoneItems = [
  { tunnel: "Tunnel A", progress: "+45m by Feb" },
  { tunnel: "Tunnel B", progress: "+30m by March" },
  { tunnel: "Tunnel C", progress: "+50m by April" } , { tunnel: "Tunnel d", progress: "+50m by April" }  ,{ tunnel: "Tunnel e", progress: "+50m by April" }
];

const alertItems = [
  { tunnel: "Tunnel A", alert: "Minor Incident" },
  { tunnel: "Tunnel B", alert: "Severe Blockage" },
  { tunnel: "Tunnel C", alert: "Collapsed Section" }
];

// DynamicRisksMilestoneCriticalAlertCard Component
interface DynamicRisksMilestoneCriticalAlertCardProps {
  title: string;
  items: Array<any>;
}

export function DynamicRisksMilestoneCriticalAlertCard({
  title,
  items
}: DynamicRisksMilestoneCriticalAlertCardProps) {


  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
      {/* Card Title */}
      <div className="px-6 py-4 border-b">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      {/* Card Body */}
      <div
        className="p-4 overflow-y-scroll relative h-36 flex flex-col gap-2 w-full"
 
       
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-between space-x-3 border-b ">
            {/* Risk Card Icon */}
            {item.icon && <div>{item.icon}</div>}

            {/* Tunnel or Item Name */}
            <div className="flex-grow flex justify-between">
              {title === "Risk Assessment" && (
                <>
                  <span className="font-medium">{item.name}:</span>
                  <span
                    className={`ml-2 font-bold text-lg ${
                      item.impact === "High"
                        ? "text-red-500"
                        : item.impact === "Medium"
                        ? "text-yellow-500"
                        : "text-green-500"
                    } transform hover:scale-105 transition-transform duration-300`}
                    style={{
                      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)"
                    }}>
                    {item.impact}
                  </span>
                </>
              )}

              {title === "Upcoming Milestones" && (
                <>
                  <span className="font-medium">{item.tunnel}:</span>
                  <span
                    className="ml-2 font-bold text-blue-500"
                    style={{
                      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)"
                    }}>
                    {item.progress}
                  </span>
                </>
              )}

              {title === "Critical Alerts" && (
                <>
                  <span className="font-medium">{item.tunnel}:</span>
                  <span
                    className={`ml-2 font-bold ${
                      item.alert === "Minor Incident"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                                       style={{
                      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)"
                    }}>
                    {item.alert}
                  </span>
                </>
              )}
            </div>
          
          </div>
        ))}
        {/* Show the scroll indicator if not scrolled to the bottom */}
       
      </div>
    </div>
  );
}
