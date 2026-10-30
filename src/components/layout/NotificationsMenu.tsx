import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell } from 'lucide-react'
import { notifications } from '@/data/dashboard'
import { useDismiss } from '@/lib/useDismiss'
import { cn, formatRelativeTime } from '@/lib/utils'

export function NotificationsMenu() {
  const [open, setOpen] = useState(false)
  const [allRead, setAllRead] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const ref = useDismiss<HTMLDivElement>(open, close)

  const unreadCount = allRead ? 0 : notifications.filter((n) => !n.read).length

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={unreadCount > 0 ? `Notifications, ${unreadCount} unread` : 'Notifications'}
        className="relative flex size-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-canvas hover:text-ink"
      >
        <Bell className="size-5" aria-hidden />
        {unreadCount > 0 && (
          <span
            className="absolute right-2 top-2 size-2 rounded-full bg-danger ring-2 ring-surface"
            aria-hidden
          />
        )}
      </button>

      {open && (
        <div className="fixed inset-x-4 top-[72px] z-50 overflow-hidden rounded-xl border border-line bg-surface shadow-popover sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 sm:w-80">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <h2 className="text-sm font-semibold text-ink">Notifications</h2>
            <button
              type="button"
              onClick={() => setAllRead(true)}
              disabled={unreadCount === 0}
              className="text-xs font-medium text-brand hover:text-brand-hover disabled:cursor-default disabled:text-ink-muted"
            >
              Mark all as read
            </button>
          </div>

          <ul className="max-h-80 divide-y divide-line overflow-y-auto">
            {notifications.map((item) => {
              const unread = !allRead && !item.read
              return (
                <li key={item.id} className="flex gap-3 px-4 py-3">
                  <span
                    className={cn(
                      'mt-1.5 size-2 shrink-0 rounded-full',
                      unread ? 'bg-brand' : 'bg-transparent',
                    )}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ink">{item.title}</p>
                    <p className="mt-0.5 text-sm text-ink-muted">{item.description}</p>
                    <p className="mt-1 text-xs text-ink-muted">
                      {formatRelativeTime(item.timestamp)}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>

          <Link
            to="/action-items"
            onClick={close}
            className="block border-t border-line px-4 py-3 text-center text-sm font-medium text-brand hover:bg-canvas"
          >
            View all action items
          </Link>
        </div>
      )}
    </div>
  )
}
