"use client"

import type * as React from "react"
import {
  AlertCircleIcon,
  ArchiveIcon,
  BookmarkIcon,
  CameraIcon,
  CogIcon,
  HardDriveIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  MapPinIcon,
  SearchIcon,
  ShieldAlertIcon,
  UsersIcon,
  VideoIcon,
} from "lucide-react"

import { NavDocuments } from "./nav-documents"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "admin",
    email: "admin@securitysys.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Live View",
      url: "#",
      icon: VideoIcon,
    },
    {
      title: "Recordings",
      url: "#",
      icon: ArchiveIcon,
    },
    {
      title: "Alerts",
      url: "#",
      icon: AlertCircleIcon,
    },
    {
      title: "Analytics",
      url: "#",
      icon: ListIcon,
    },
  ],
  navClouds: [
    {
      title: "Cameras",
      icon: CameraIcon,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Indoor Cameras",
          url: "#",
        },
        {
          title: "Outdoor Cameras",
          url: "#",
        },
      ],
    },
    {
      title: "Locations",
      icon: MapPinIcon,
      url: "#",
      items: [
        {
          title: "Main Building",
          url: "#",
        },
        {
          title: "Exterior",
          url: "#",
        },
      ],
    },
    {
      title: "Users",
      icon: UsersIcon,
      url: "#",
      items: [
        {
          title: "Manage Access",
          url: "#",
        },
        {
          title: "Permissions",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: CogIcon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "Saved Clips",
      url: "#",
      icon: BookmarkIcon,
    },
    {
      name: "Storage",
      url: "#",
      icon: HardDriveIcon,
    },
    {
      name: "Security Rules",
      url: "#",
      icon: ShieldAlertIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <CameraIcon className="h-5 w-5" />
                <span className="text-base font-semibold">SecurView CCTV</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

