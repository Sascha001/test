"use client"

import * as React from "react"
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { useSidebar } from "@/components/ui/sidebar"

interface SidebarMenuItemWithTooltipProps {
  children: React.ReactNode
  tooltip: string
  isActive?: boolean
  asChild?: boolean
  onClick?: () => void
  href?: string
}

export function SidebarMenuItemWithTooltip({
  children,
  tooltip,
  isActive = false,
  asChild = false,
  onClick,
  href,
}: SidebarMenuItemWithTooltipProps) {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  const menuButton = (
    <SidebarMenuButton 
      asChild={asChild} 
      isActive={isActive}
      onClick={onClick}
      className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
    >
      {asChild ? (
        <a href={href}>
          {children}
        </a>
      ) : (
        children
      )}
    </SidebarMenuButton>
  )

  if (isCollapsed) {
    return (
      <SidebarMenuItem>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              {menuButton}
            </TooltipTrigger>
            <TooltipContent 
              side="right" 
              className="bg-popover text-popover-foreground border-border shadow-lg"
            >
              {tooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      {menuButton}
    </SidebarMenuItem>
  )
}