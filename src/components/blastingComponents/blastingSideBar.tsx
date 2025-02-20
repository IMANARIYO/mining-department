"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { TeamSwitcher } from "./team-switcher";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";

// This is sample data.
const data = {
  user: {
    name: "imanariyo baptiste",
    email: "imanariyo.baptiste@gmail.com",
    avatar: "/images/logo.png"
  },
  teams: [
    {
      name: "mining tech",
      logo: () => <img src="/images/logo.png" alt="mining tech logo" />,
      plan: "company"
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup"
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free"
    }
  ],
  navMain: [
    {
      title: "blasting management",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "blasting planning",
          url: "#",
          isActive: true
        },
        {
          title: "blasting execution",
          url: "#"
        }
        // {
        //   title: "Settings",
        //   url: "#"
        // }
      ]
    },
    {
      title: "resources",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "inventory management",
          url: "#"
        },
        {
          title: "Repots& analytics",
          url: "#"
        }
      ]
    },
    {
      title: "SAFETY&TEAM",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "SAER & Complinance",
          url: "#"
        },
        {
          title: "Team Management",
          url: "#"
        }
      ]
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#"
        },
        {
          title: "Team",
          url: "#"
        },
        {
          title: "Billing",
          url: "#"
        },
        {
          title: "Limits",
          url: "#"
        }
      ]
    }
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart
    },
    {
      name: "Travel",
      url: "#",
      icon: Map
    }
  ]
};

export function BlastingSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
