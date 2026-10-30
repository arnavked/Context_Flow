import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, UserRound } from 'lucide-react'
import { currentUser } from '@/data/dashboard'
import { UserAvatar } from '@/components/common/UserAvatar'
import { useDismiss } from '@/lib/useDismiss'
import { cn } from '@/lib/utils'

export function UserMenu() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const ref = useDismiss<HTMLDivElement>(open, close)

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Open user menu"
        className="flex items-center gap-2 rounded-lg p-1 pr-2 transition-colors hover:bg-canvas"
      >
        <UserAvatar user={currentUser} />
        <span className="hidden text-sm font-medium text-ink sm:block">
          {currentUser.name.split(' ')[0]}
        </span>
        <ChevronDown
          className={cn('hidden size-4 text-ink-muted transition-transform sm:block', open && 'rotate-180')}
          aria-hidden
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-xl border border-line bg-surface shadow-popover"
        >
          <div className="flex items-center gap-3 border-b border-line px-4 py-3">
            <UserAvatar user={currentUser} size="lg" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{currentUser.name}</p>
              <p className="truncate text-xs text-ink-muted">{currentUser.email}</p>
            </div>
          </div>

          <div className="p-1.5">
            <Link
              to="/settings"
              role="menuitem"
              onClick={close}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-ink transition-colors hover:bg-canvas"
            >
              <UserRound className="size-4 text-ink-muted" aria-hidden />
              Profile &amp; settings
            </Link>
          </div>

          <p className="border-t border-line px-4 py-2.5 text-xs text-ink-muted">
            Authentication isn’t enabled in this build.
          </p>
        </div>
      )}
    </div>
  )
}
