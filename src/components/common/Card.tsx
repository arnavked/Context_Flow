import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  children: ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn('min-w-0 rounded-xl border border-line bg-surface shadow-card', className)}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  title: string
  description?: string
  action?: ReactNode
}

export function CardHeader({ title, description, action }: CardHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
      <div className="min-w-0">
        <h2 className="text-base font-semibold text-ink">{title}</h2>
        {description && <p className="mt-0.5 text-sm text-ink-muted">{description}</p>}
      </div>
      {action}
    </div>
  )
}

interface CardLinkProps {
  to: string
  children: ReactNode
}

export function CardLink({ to, children }: CardLinkProps) {
  return (
    <Link
      to={to}
      className="inline-flex shrink-0 items-center gap-1 rounded text-sm font-medium text-brand transition-colors hover:text-brand-hover"
    >
      {children}
      <ArrowRight className="size-3.5" aria-hidden />
    </Link>
  )
}
