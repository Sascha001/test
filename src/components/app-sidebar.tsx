"use client"

import {
  ChevronDown,
  BarChart3,
  Briefcase,
  Activity,
  Shield,
  Settings,
  User,
  Home,
  TrendingUp,
  AlertTriangle,
  Target,
  Brain,
  Database,
  Users
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const data = {
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
          icon: TrendingUp,
        },
        {
          title: "Positionen",
          url: "/depot/positions",
          icon: Target,
        },
        {
          title: "Performance",
          url: "/depot/performance",
          icon: Activity,
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
          icon: BarChart3,
        },
        {
          title: "Unsicherheits-Analyse",
          url: "/stats/uncertainty",
          icon: AlertTriangle,
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
          icon: Brain,
        },
        {
          title: "Datenqualität",
          url: "/verification/data",
          icon: Database,
        },
        {
          title: "Menschliche Expertise",
          url: "/verification/human",
          icon: Users,
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

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <TrendingUp className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">AI Trading Hub</span>
                <span className="truncate text-xs">Uncertainty Analysis</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    {item.items ? (
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          isActive={item.isActive}
                        >
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                    ) : (
                      <SidebarMenuButton asChild tooltip={item.title} isActive={item.isActive}>
                        <a href={item.url}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    )}
                    {item.items && (
                      <CollapsibleContent>
                        <SidebarMenu>
                          {item.items.map((subItem) => (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton asChild>
                                <a href={subItem.url} className="pl-8">
                                  {subItem.icon && <subItem.icon className="size-4" />}
                                  <span>{subItem.title}</span>
                                </a>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
                <User className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Max Mustermann</span>
                <span className="truncate text-xs">Trader</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  )
}