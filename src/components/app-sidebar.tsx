"use client";
import * as React from "react";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { BarChart2, Bell, ClipboardList, FileText, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { useSidebar } from "@/components/ui/sidebar";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
// Sample menu items
const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Metrics", url: "#", icon: BarChart2 },
  { title: "Notifications", url: "#", icon: Bell },
  { title: "RFD", url: "/dashboard/settings", icon: FileText },
  { title: "Reports", url: "/dashboard/reports", icon: ClipboardList }
];
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const sidebar = useSidebar();
  const isCollapsed = sidebar.state; //  i have checked it  it  is  collapsed or expanded
  React.useEffect(() => {
    console.log("Sidebar Collapsed:", isCollapsed);
  }, [isCollapsed]);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent className="relative top-0 ">
        {/* Company Logo */}
        <div className="flex items-center justify-center py-4">
          <img
            src="images/logo.png"
            alt="Company Logo"
            className="h-12 w-12 rounded-full"
          />
          {isCollapsed=="expanded" && (
            <span className="text-lg font-bold ml-3">MiningTech</span>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      onClick={() => setActiveItem(item.title)}
                      className={`flex items-center space-x-3 px-4 py-2 rounded-md transition-all duration-200
                        ${activeItem === item.title ? "" : ""}
                      `}>
                      {/* Tooltip for Icons */}
                      <Tooltip>
                        <TooltipTrigger>
                          <item.icon className="h-6 w-6 " />
                        </TooltipTrigger>
                        <TooltipContent>{item.title}</TooltipContent>
                      </Tooltip>

                      <span className="">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
