"use client"

import { Fragment } from "react"
import Link from "next/link"
import { useSelectedLayoutSegments } from "next/navigation"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { navigation, type NavigationItem } from "@/config/navigation"

const navigationItems = [...navigation.main, ...navigation.secondary].flatMap(
  (group) => group.items
)

export function DashboardBreadcrumb() {
  const segments = useSelectedLayoutSegments().filter(
    (segment) => !segment.startsWith("(")
  )
  const currentPath = segments.length
    ? `/espace/${segments.join("/")}`
    : "/espace"
  const overview = navigationItems.find((item) => item.url === "/espace")
  const currentPage = navigationItems.find(
    (item) => item.url === currentPath
  )

  if (!overview) {
    return null
  }

  const breadcrumbItems: NavigationItem[] =
    currentPage && currentPage.url !== overview.url
      ? [overview, currentPage]
      : [overview]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => {
          const isCurrentPage = index === breadcrumbItems.length - 1

          return (
            <Fragment key={item.url}>
              {index > 0 && (
                <BreadcrumbSeparator className="hidden md:block" />
              )}
              <BreadcrumbItem
                className={
                  index === 0 && !isCurrentPage
                    ? "hidden md:block"
                    : undefined
                }
              >
                {isCurrentPage ? (
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<Link href={item.url} />}>
                    {item.title}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
