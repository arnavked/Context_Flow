import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search } from 'lucide-react'
import { allNavItems } from '@/data/navigation'
import { NotificationsMenu } from '@/components/layout/NotificationsMenu'
import { UserMenu } from '@/components/layout/UserMenu'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const title =
    allNavItems.find((item) => pathname === item.to || pathname.startsWith(`${item.to}/`))
      ?.label ?? 'ContextFlow'

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = query.trim()
    navigate(trimmed ? `/knowledge?q=${encodeURIComponent(trimmed)}` : '/knowledge')
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-line bg-surface px-4 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation"
        aria-controls="app-sidebar"
        className="-ml-2 flex size-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-canvas hover:text-ink lg:hidden"
      >
        <Menu className="size-5" aria-hidden />
      </button>

      <span className="min-w-0 truncate text-base font-semibold text-ink">{title}</span>

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <form role="search" onSubmit={handleSearch} className="relative hidden w-72 md:block lg:w-80">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-muted"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search meetings, tasks, knowledge…"
            aria-label="Search"
            className="h-10 w-full rounded-lg border border-line bg-canvas pl-9 pr-3 text-sm text-ink placeholder:text-ink-muted focus:border-brand focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </form>

        <Link
          to="/knowledge"
          aria-label="Search"
          className="flex size-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-canvas hover:text-ink md:hidden"
        >
          <Search className="size-5" aria-hidden />
        </Link>

        <NotificationsMenu />
        <UserMenu />
      </div>
    </header>
  )
}
