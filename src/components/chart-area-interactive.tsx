"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

// Motion detection events data
const chartData = [
  { date: "2024-03-21T00:00:00", motion: 12, person: 5, vehicle: 2 },
  { date: "2024-03-21T01:00:00", motion: 8, person: 3, vehicle: 1 },
  { date: "2024-03-21T02:00:00", motion: 5, person: 2, vehicle: 0 },
  { date: "2024-03-21T03:00:00", motion: 3, person: 1, vehicle: 0 },
  { date: "2024-03-21T04:00:00", motion: 4, person: 2, vehicle: 0 },
  { date: "2024-03-21T05:00:00", motion: 7, person: 3, vehicle: 1 },
  { date: "2024-03-21T06:00:00", motion: 15, person: 8, vehicle: 3 },
  { date: "2024-03-21T07:00:00", motion: 22, person: 12, vehicle: 5 },
  { date: "2024-03-21T08:00:00", motion: 28, person: 15, vehicle: 7 },
  { date: "2024-03-21T09:00:00", motion: 25, person: 13, vehicle: 6 },
  { date: "2024-03-21T10:00:00", motion: 20, person: 10, vehicle: 4 },
  { date: "2024-03-21T11:00:00", motion: 18, person: 9, vehicle: 3 },
  { date: "2024-03-21T12:00:00", motion: 23, person: 12, vehicle: 5 },
  { date: "2024-03-21T13:00:00", motion: 26, person: 14, vehicle: 6 },
  { date: "2024-03-21T14:00:00", motion: 24, person: 13, vehicle: 5 },
  { date: "2024-03-21T15:00:00", motion: 22, person: 11, vehicle: 4 },
  { date: "2024-03-21T16:00:00", motion: 25, person: 13, vehicle: 6 },
  { date: "2024-03-21T17:00:00", motion: 30, person: 16, vehicle: 8 },
  { date: "2024-03-21T18:00:00", motion: 28, person: 15, vehicle: 7 },
  { date: "2024-03-21T19:00:00", motion: 24, person: 12, vehicle: 5 },
  { date: "2024-03-21T20:00:00", motion: 20, person: 10, vehicle: 4 },
  { date: "2024-03-21T21:00:00", motion: 16, person: 8, vehicle: 3 },
  { date: "2024-03-21T22:00:00", motion: 12, person: 6, vehicle: 2 },
  { date: "2024-03-21T23:00:00", motion: 10, person: 5, vehicle: 1 },
  { date: "2024-03-20T00:00:00", motion: 11, person: 5, vehicle: 2 },
  { date: "2024-03-20T01:00:00", motion: 7, person: 3, vehicle: 1 },
  { date: "2024-03-20T02:00:00", motion: 4, person: 2, vehicle: 0 },
  { date: "2024-03-20T03:00:00", motion: 2, person: 1, vehicle: 0 },
  { date: "2024-03-20T04:00:00", motion: 3, person: 1, vehicle: 0 },
  { date: "2024-03-20T05:00:00", motion: 6, person: 3, vehicle: 1 },
  { date: "2024-03-20T06:00:00", motion: 14, person: 7, vehicle: 3 },
  { date: "2024-03-20T07:00:00", motion: 20, person: 10, vehicle: 4 },
  { date: "2024-03-20T08:00:00", motion: 26, person: 14, vehicle: 6 },
  { date: "2024-03-20T09:00:00", motion: 24, person: 12, vehicle: 5 },
  { date: "2024-03-20T10:00:00", motion: 19, person: 10, vehicle: 4 },
  { date: "2024-03-20T11:00:00", motion: 17, person: 9, vehicle: 3 },
  { date: "2024-03-20T12:00:00", motion: 22, person: 11, vehicle: 5 },
  { date: "2024-03-20T13:00:00", motion: 25, person: 13, vehicle: 6 },
  { date: "2024-03-20T14:00:00", motion: 23, person: 12, vehicle: 5 },
  { date: "2024-03-20T15:00:00", motion: 21, person: 11, vehicle: 4 },
  { date: "2024-03-20T16:00:00", motion: 24, person: 12, vehicle: 6 },
  { date: "2024-03-20T17:00:00", motion: 29, person: 15, vehicle: 7 },
  { date: "2024-03-20T18:00:00", motion: 27, person: 14, vehicle: 7 },
  { date: "2024-03-20T19:00:00", motion: 23, person: 12, vehicle: 5 },
  { date: "2024-03-20T20:00:00", motion: 19, person: 10, vehicle: 4 },
  { date: "2024-03-20T21:00:00", motion: 15, person: 8, vehicle: 3 },
  { date: "2024-03-20T22:00:00", motion: 11, person: 6, vehicle: 2 },
  { date: "2024-03-20T23:00:00", motion: 9, person: 4, vehicle: 1 },
]

const chartConfig = {
  events: {
    label: "Events",
  },
  motion: {
    label: "Motion",
    color: "hsl(var(--chart-1))",
  },
  person: {
    label: "Person",
    color: "hsl(var(--chart-2))",
  },
  vehicle: {
    label: "Vehicle",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("24h")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("12h")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-03-21T23:59:59")
    let hoursToSubtract = 48
    if (timeRange === "24h") {
      hoursToSubtract = 24
    } else if (timeRange === "12h") {
      hoursToSubtract = 12
    }
    const startDate = new Date(referenceDate)
    startDate.setHours(startDate.getHours() - hoursToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Detection Events</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:block hidden">Motion, person, and vehicle detection events</span>
          <span className="@[540px]/card:hidden">Detection events</span>
        </CardDescription>
        <div className="absolute right-4 top-4">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="@[767px]/card:flex hidden"
          >
            <ToggleGroupItem value="48h" className="h-8 px-2.5">
              Last 48 hours
            </ToggleGroupItem>
            <ToggleGroupItem value="24h" className="h-8 px-2.5">
              Last 24 hours
            </ToggleGroupItem>
            <ToggleGroupItem value="12h" className="h-8 px-2.5">
              Last 12 hours
            </ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="@[767px]/card:hidden flex w-40" aria-label="Select a time range">
              <SelectValue placeholder="Last 24 hours" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="48h" className="rounded-lg">
                Last 48 hours
              </SelectItem>
              <SelectItem value="24h" className="rounded-lg">
                Last 24 hours
              </SelectItem>
              <SelectItem value="12h" className="rounded-lg">
                Last 12 hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillMotion" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-motion)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-motion)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillPerson" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-person)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-person)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillVehicle" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-vehicle)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-vehicle)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  hour12: true,
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="vehicle"
              type="monotone"
              fill="url(#fillVehicle)"
              stroke="var(--color-vehicle)"
              stackId="1"
            />
            <Area dataKey="person" type="monotone" fill="url(#fillPerson)" stroke="var(--color-person)" stackId="1" />
            <Area dataKey="motion" type="monotone" fill="url(#fillMotion)" stroke="var(--color-motion)" stackId="1" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

