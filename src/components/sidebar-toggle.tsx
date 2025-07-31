"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"

export function SidebarToggle() {
  const { toggleSidebar, state } = useSidebar()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleSidebar}
      className="bg-sidebar-accent hover:bg-sidebar-accent/80 border-sidebar-border"
    >
      {state === "expanded" ? (
        <X className="h-4 w-4" />
      ) : (
        <Menu className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}