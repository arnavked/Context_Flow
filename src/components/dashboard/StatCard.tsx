import type { LucideIcon } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { cn } from '@/lib/utils'

export type StatTone = 'brand' | 'success' | 'warning' | 'danger'

const toneClasses: Record<StatTone, string> = {
  brand: 'bg-brand-soft text-brand',
  success: 'bg-success-soft text-success-ink',
  warning: 'bg-warning-soft text-warning-ink',
  danger: 'bg-danger-soft text-danger-ink',
}

interface StatCardProps {
  label: string
  value: number
  description: string
  icon: LucideIcon
  tone: StatTone
}

export function StatCard({ label, value, description, icon: Icon, tone }: StatCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-ink-muted">{label}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-ink">{value}</p>
        </div>
        <span
          className={cn(
            'flex size-10 shrink-0 items-center justify-center rounded-lg',
            toneClasses[tone],
          )}
        >
          <Icon className="size-5" aria-hidden />
        </span>
      </div>
      <p className="mt-3 text-sm text-ink-muted">{description}</p>
    </Card>
  )
}
