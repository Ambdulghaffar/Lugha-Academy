"use client"

import * as React from "react"
import Link from "next/link"

import { SidebarNavigation } from "@/components/dashboard/sidebar/sidebar-navigation"
import { navigation } from "@/config/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <span className="font-heading text-lg font-bold">L</span>
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Lugha Academy</span>
                <span className="truncate text-xs text-muted-foreground ">
                  Apprendre à son rythme
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarNavigation groups={navigation.main} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarNavigation groups={navigation.secondary} />
      </SidebarFooter>
    </Sidebar>
  )
}
