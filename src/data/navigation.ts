import {
  ArrowRightLeft,
  BookOpen,
  CalendarDays,
  LayoutDashboard,
  ListChecks,
  Radar,
  Settings,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  label: string
  to: string
  icon: LucideIcon
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navSections: NavSection[] = [
  {
    title: 'Workspace',
    items: [
      { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
      { label: 'Meetings', to: '/meetings', icon: CalendarDays },
      { label: 'Action Items', to: '/action-items', icon: ListChecks },
      { label: 'Work Transfers', to: '/work-transfers', icon: ArrowRightLeft },
    ],
  },
  {
    title: 'Intelligence',
    items: [
      { label: 'Knowledge Base', to: '/knowledge', icon: BookOpen },
      { label: 'AI Assistant', to: '/ai-assistant', icon: Sparkles },
      { label: 'AI Risk Radar', to: '/risk-radar', icon: Radar },
    ],
  },
]

export const settingsNavItem: NavItem = {
  label: 'Settings',
  to: '/settings',
  icon: Settings,
}

export const allNavItems: NavItem[] = [
  ...navSections.flatMap((section) => section.items),
  settingsNavItem,
]
