import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type LinkButtonVariant = 'primary' | 'secondary'

const variantClasses: Record<LinkButtonVariant, string> = {
  primary: 'bg-brand text-white shadow-card hover:bg-brand-hover',
  secondary: 'border border-line bg-surface text-ink shadow-card hover:bg-canvas',
}

interface LinkButtonProps {
  to: string
  variant?: LinkButtonVariant
  icon?: LucideIcon
  className?: string
  children: ReactNode
}

/** A router link styled as a button, so every CTA is a real navigation. */
export function LinkButton({
  to,
  variant = 'primary',
  icon: Icon,
  className,
  children,
}: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors',
        variantClasses[variant],
        className,
      )}
    >
      {Icon && <Icon className="size-4" aria-hidden />}
      {children}
    </Link>
  )
}
