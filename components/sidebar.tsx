"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Home,
  Calendar,
  Clock,
  BookOpen,
  Target,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  { icon: Home, label: "Início", href: "/" },
  { icon: Calendar, label: "Calendário", href: "/calendario" },
  { icon: Clock, label: "Pomodoro", href: "/pomodoro" },
  { icon: BookOpen, label: "Matérias", href: "/materias" },
  { icon: FileText, label: "Provas", href: "/provas" },
  { icon: Target, label: "Metas", href: "/metas" },
  { icon: BarChart3, label: "Relatórios", href: "/relatorios" },
  { icon: Settings, label: "Configurações", href: "/configuracoes" },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className={cn("relative flex flex-col border-r border-border bg-sidebar", collapsed ? "w-16" : "w-64")}>
      <div className="flex h-14 items-center justify-between px-4">
        {!collapsed && <h2 className="text-lg font-semibold text-sidebar-foreground">Menu</h2>}
        <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8 p-0">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="space-y-2 py-2">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  collapsed && "px-2",
                  pathname === item.href && "bg-sidebar-accent text-sidebar-accent-foreground",
                )}
              >
                <item.icon className="h-4 w-4" />
                {!collapsed && <span className="ml-2">{item.label}</span>}
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
