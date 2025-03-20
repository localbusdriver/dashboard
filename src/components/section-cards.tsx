import { AlertCircleIcon, CameraIcon, HardDriveIcon, ShieldCheckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Active Cameras</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">24/28</CardTitle>
          <div className="absolute right-4 top-4">
            <Badge
              variant="outline"
              className="flex gap-1 rounded-lg text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
            >
              <CameraIcon className="size-3" />
              85.7%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            4 cameras offline <AlertCircleIcon className="size-4 text-amber-500 dark:text-amber-400" />
          </div>
          <div className="text-muted-foreground">Last checked 2 minutes ago</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Storage Usage</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">4.2 TB</CardTitle>
          <div className="absolute right-4 top-4">
            <Badge
              variant="outline"
              className="flex gap-1 rounded-lg text-xs bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
            >
              <HardDriveIcon className="size-3" />
              78%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            1.2 TB free space <HardDriveIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Auto-cleanup in 3 days</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Today's Alerts</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">37</CardTitle>
          <div className="absolute right-4 top-4">
            <Badge
              variant="outline"
              className="flex gap-1 rounded-lg text-xs bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
            >
              <AlertCircleIcon className="size-3" />
              +12
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            5 require attention <AlertCircleIcon className="size-4 text-red-500 dark:text-red-400" />
          </div>
          <div className="text-muted-foreground">32 automatically resolved</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>System Status</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">Healthy</CardTitle>
          <div className="absolute right-4 top-4">
            <Badge
              variant="outline"
              className="flex gap-1 rounded-lg text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
            >
              <ShieldCheckIcon className="size-3" />
              100%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            All systems operational <ShieldCheckIcon className="size-4 text-green-500 dark:text-green-400" />
          </div>
          <div className="text-muted-foreground">Last maintenance: 3 days ago</div>
        </CardFooter>
      </Card>
    </div>
  )
}

