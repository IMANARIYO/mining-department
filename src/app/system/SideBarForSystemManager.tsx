"use client";
import * as React from "react";
import { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { useSidebar } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import {
  Sidebar,
  SidebarContent,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  BarChart2,
  ListChecks,
  FileText,
  Settings,
  ServerCog
} from "lucide-react";

// Sidebar Menu Items (Updated)
const items = [
  { title: "System", url: "/system", icon: LayoutDashboard },
  { title: "Users & Groups", url: "/system/users", icon: Users },
  { title: "Performance", url: "/system/performance", icon: BarChart2 },
  { title: "Audit Logs", url: "/system/audit-logs", icon: ListChecks },
  { title: "Systems Update", url: "/system/system-update", icon: ServerCog },
  { title: "Settings", url: "/system/settings", icon: Settings }
];


export function SystemManagerSideBar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const sidebar = useSidebar();
  const isCollapsed = sidebar.state; // Sidebar state (collapsed or expanded)

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="bg-[#111827] text-gray-900 shadow-lg h-screen flex flex-col justify-between items-center">
      <SidebarContent className="relative top-0">
        <SidebarGroupContent>
          {/* Logo Section */}
          <div className="flex items-center gap-2 px-4 py-5 border-b border-gray-700">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="h-12 w-12 rounded-full"
            />
            {isCollapsed === "expanded" && (
              <span className="text-lg font-bold ml-2">System Monitor</span>
            )}
          </div>

          {/* Sidebar Menu */}
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className="">
                  <Link
                    href={item.url}
                    className={`flex justify-start items-start px-4 py-3 rounded-md transition-all duration-200  
                      ${
                        activeItem === item.title
                          ? "bg-[#4F46E5] text-white shadow-md"
                          : "hover:bg-[#1F2937] text-gray-900"
                      }
                    `}
                    onClick={() => setActiveItem(item.title)}>
                    {/* Tooltip appears only when collapsed */}
                    {isCollapsed === "collapsed" ? (
                      <Tooltip>
                        <TooltipTrigger>
                          <item.icon className="h-6 w-6 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent className="ml-20">
                          {item.title}
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <item.icon className="h-6 w-6 text-gray-400" />
                    )}

                    {/* Show title only when expanded */}
                    {isCollapsed === "expanded" && (
                      <span className="ml-3 text-gray-900">{item.title}</span>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
    </Sidebar>
  );
}
