import { BellIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeSwitcher } from "./theme-switcher"

export function SiteHeader() {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
          <h1 className="text-base font-medium">CCTV Monitoring System</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="relative h-8 w-8">
            <BellIcon className="h-4 w-4" />
            <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-red-500 text-white">
              5
            </Badge>
            <span className="sr-only">Notifications</span>
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

