"use client"

import * as React from "react"
import {
  BarChart3,
  Briefcase,
  Shield,
  Settings,
  Home,
  TrendingUp,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Trading Hub data
const data = {
  user: {
    name: "Max Mustermann",
    email: "max@tradingHub.com",
    avatar: "/avatars/max.jpg",
  },
  teams: [
    {
      name: "AI Trading Hub",
      logo: TrendingUp,
      plan: "Professional",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "Depot",
      url: "/depot",
      icon: Briefcase,
      items: [
        {
          title: "Portfolio Übersicht",
          url: "/depot/overview",
        },
        {
          title: "Positionen",
          url: "/depot/positions",
        },
        {
          title: "Performance",
          url: "/depot/performance",
        },
      ],
    },
    {
      title: "Statistik",
      url: "/stats",
      icon: BarChart3,
      items: [
        {
          title: "Trading Statistiken",
          url: "/stats/trading",
        },
        {
          title: "Unsicherheits-Analyse",
          url: "/stats/uncertainty",
        },
      ],
    },
    {
      title: "Überprüfung",
      url: "/verification",
      icon: Shield,
      items: [
        {
          title: "KI-Modell Vertrauen",
          url: "/verification/model",
        },
        {
          title: "Datenqualität",
          url: "/verification/data",
        },
        {
          title: "Menschliche Expertise",
          url: "/verification/human",
        },
      ],
    },
    {
      title: "Einstellungen",
      url: "/settings",
      icon: Settings,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}