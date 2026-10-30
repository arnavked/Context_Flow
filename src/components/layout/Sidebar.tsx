import { Link, NavLink } from 'react-router-dom'
import { PanelLeftClose, PanelLeftOpen, Workflow, X } from 'lucide-react'
import { currentUser } from '@/data/dashboard'
import { navSections, settingsNavItem, type NavItem } from '@/data/navigation'
import { UserAvatar } from '@/components/common/UserAvatar'
import { cn } from '@/lib/utils'

interface SidebarProps {
  /** Icon-only mode. Only applies at the `lg` breakpoint and up. */
  collapsed: boolean
  /** Drawer state below the `lg` breakpoint. */
  mobileOpen: boolean
  onClose: () => void
  onToggleCollapse: () => void
}

interface SidebarLinkProps {
  item: NavItem
  collapsed: boolean
  onNavigate: () => void
}

function SidebarLink({ item, collapsed, onNavigate }: SidebarLinkProps) {
  const Icon = item.icon
  return (
    <NavLink
      to={item.to}
      onClick={onNavigate}
      title={collapsed ? item.label : undefined}
      className={({ isActive }) =>
        cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          collapsed && 'lg:justify-center lg:px-0',
          isActive
            ? 'bg-brand-soft text-brand'
            : 'text-ink-muted hover:bg-canvas hover:text-ink',
        )
      }
    >
      <Icon className="size-[18px] shrink-0" aria-hidden />
      <span className={cn(collapsed && 'lg:sr-only')}>{item.label}</span>
    </NavLink>
  )
}

export function Sidebar({ collapsed, mobileOpen, onClose, onToggleCollapse }: SidebarProps) {
  const CollapseIcon = collapsed ? PanelLeftOpen : PanelLeftClose

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        id="app-sidebar"
        aria-label="Primary"
        className={cn(
          'fixed bottom-0 left-0 top-0 z-50 flex w-72 flex-col border-r border-line bg-surface transition-transform duration-200',
          'lg:sticky lg:bottom-auto lg:z-auto lg:h-screen lg:shrink-0 lg:translate-x-0 lg:transition-[width]',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
          collapsed ? 'lg:w-[76px]' : 'lg:w-64',
        )}
      >
        <div
          className={cn(
            'flex h-16 shrink-0 items-center justify-between border-b border-line px-4',
            collapsed && 'lg:justify-center lg:px-0',
          )}
        >
          <Link
            to="/dashboard"
            onClick={onClose}
            aria-label="ContextFlow home"
            className="flex items-center gap-2.5 rounded-lg"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
              <Workflow className="size-[18px]" aria-hidden />
            </span>
            <span
              className={cn(
                'text-[17px] font-semibold tracking-tight text-ink',
                collapsed && 'lg:hidden',
              )}
            >
              ContextFlow
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded-lg p-2 text-ink-muted hover:bg-canvas hover:text-ink lg:hidden"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav aria-label="Main" className="flex-1 overflow-y-auto px-3 py-4">
          {navSections.map((section, index) => (
            <div key={section.title} className={cn(index > 0 && 'mt-6')}>
              <p
                className={cn(
                  'px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-muted',
                  collapsed && 'lg:sr-only',
                )}
              >
                {section.title}
              </p>
              {collapsed && index > 0 && (
                <div className="mx-3 mb-3 hidden border-t border-line lg:block" aria-hidden />
              )}
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.to}>
                    <SidebarLink item={item} collapsed={collapsed} onNavigate={onClose} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="shrink-0 space-y-1 border-t border-line px-3 py-3">
          <SidebarLink item={settingsNavItem} collapsed={collapsed} onNavigate={onClose} />

          <button
            type="button"
            onClick={onToggleCollapse}
            aria-pressed={collapsed}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            title={collapsed ? 'Expand sidebar' : undefined}
            className={cn(
              'hidden w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-canvas hover:text-ink lg:flex',
              collapsed && 'lg:justify-center lg:px-0',
            )}
          >
            <CollapseIcon className="size-[18px] shrink-0" aria-hidden />
            <span className={cn(collapsed && 'lg:sr-only')}>Collapse</span>
          </button>

          <Link
            to="/settings"
            onClick={onClose}
            title={collapsed ? `${currentUser.name} — profile` : undefined}
            className={cn(
              'mt-2 flex items-center gap-3 rounded-lg border border-line p-2.5 transition-colors hover:bg-canvas',
              collapsed && 'lg:justify-center lg:border-transparent lg:p-1.5',
            )}
          >
            <UserAvatar user={currentUser} size="lg" />
            <span className={cn('min-w-0', collapsed && 'lg:sr-only')}>
              <span className="block truncate text-sm font-medium text-ink">
                {currentUser.name}
              </span>
              <span className="block truncate text-xs text-ink-muted">{currentUser.role}</span>
            </span>
          </Link>
        </div>
      </aside>
    </>
  )
}
