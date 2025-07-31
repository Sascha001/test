"use client"

import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"

export function SidebarToggleButton() {
  const { toggleSidebar, state } = useSidebar()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleSidebar}
      className="absolute -right-3 top-6 z-20 h-6 w-6 rounded-full border-2 border-sidebar-border bg-sidebar-background shadow-lg hover:bg-sidebar-accent hover:border-sidebar-primary transition-all duration-200"
    >
      <ChevronLeft
        className={`h-3 w-3 transition-transform duration-300 ${
          state === "collapsed" ? "rotate-180" : ""
        }`}
      />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}