"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Edit, Trash2, PlusCircle } from "lucide-react";

// Define Activity Type
interface Activity {
  id: number;
  icon: "add" | "edit" | "delete" | "check"; // Define icon options
  name: string;
  doneBy: string;
  timestamp: string;
}

// Activity Icons Mapping
const activityIcons = {
  add: <PlusCircle className="h-5 w-5 text-green-500" />,
  edit: <Edit className="h-5 w-5 text-yellow-500" />,
  delete: <Trash2 className="h-5 w-5 text-red-500" />,
  check: <CheckCircle className="h-5 w-5 text-blue-500" />
};

// Example Activity Data
const activities: Activity[] = [
  {
    id: 1,
    icon: "add",
    name: "Added a new user",
    doneBy: "John Doe",
    timestamp: "Just now"
  },
  {
    id: 2,
    icon: "edit",
    name: "Updated profile settings",
    doneBy: "Jane Smith",
    timestamp: "10 mins ago"
  },
  {
    id: 3,
    icon: "delete",
    name: "Deleted an old report",
    doneBy: "Admin",
    timestamp: "1 hour ago"
  },
  {
    id: 4,
    icon: "check",
    name: "Completed a task",
    doneBy: "Michael",
    timestamp: "Yesterday"
  }
];

export function ActivityFeed() {
  return (
    <Card className="w-full ">
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={activity.id}>
                {/* Activity Row */}
                <div className="flex items-center space-x-4 py-2">
                  {/* Activity Icon */}
                  <div className="flex-shrink-0">
                    {activityIcons[activity.icon]}
                  </div>

                  {/* Activity Details */}
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Done by{" "}
                      <span className="font-semibold">{activity.doneBy}</span> ·{" "}
                      {activity.timestamp}
                    </p>
                  </div>

                  {/* Activity Type Badge */}
                  <Badge variant="secondary">
                    {activity.icon.toUpperCase()}
                  </Badge>
                </div>

                {/* Separator (only show if not the last item) */}
                {index !== activities.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
