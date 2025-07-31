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
import { SidebarToggleButton } from "./sidebar-toggle-button"
import { SidebarMenuItemWithTooltip } from "./sidebar-menu-item-with-tooltip"
import { usePathname } from "next/navigation"
import Link from "next/link"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
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
  const pathname = usePathname()

  // Function to check if a menu item is active
  const isMenuItemActive = (url: string, items?: { url: string }[]) => {
    if (pathname === url) return true
    if (items) {
      return items.some(item => pathname === item.url)
    }
    return false
  }

  // Function to check if a submenu item is active
  const isSubMenuItemActive = (url: string) => {
    return pathname === url
  }

  return (
    <Sidebar collapsible="icon" className="relative">
      <SidebarToggleButton />
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <TrendingUp className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-semibold">AI Trading Hub</span>
                <span className="truncate text-xs">Uncertainty Analysis</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => {
                const isActive = isMenuItemActive(item.url, item.items)
                const hasSubItems = item.items && item.items.length > 0
                
                return (
                  <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={isActive}
                    className="group/collapsible"
                  >
                    {hasSubItems ? (
                      <SidebarMenuItemWithTooltip 
                        tooltip={item.title}
                        isActive={isActive}
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton isActive={isActive}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                            <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenu>
                            {item.items.map((subItem) => (
                              <SidebarMenuItem key={subItem.title}>
                                <SidebarMenuButton 
                                  asChild 
                                  isActive={isSubMenuItemActive(subItem.url)}
                                  className="pl-8"
                                >
                                  <Link href={subItem.url}>
                                    {subItem.icon && <subItem.icon className="size-4" />}
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                          </SidebarMenu>
                        </CollapsibleContent>
                      </SidebarMenuItemWithTooltip>
                    ) : (
                      <SidebarMenuItemWithTooltip 
                        tooltip={item.title}
                        isActive={isActive}
                        asChild
                        href={item.url}
                      >
                        <Link href={item.url}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuItemWithTooltip>
                    )}
                  </Collapsible>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItemWithTooltip tooltip="Profil">
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
                <User className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-semibold">Max Mustermann</span>
                <span className="truncate text-xs">Trader</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItemWithTooltip>
        </SidebarMenu>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  )
}