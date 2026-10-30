import type { ReactNode } from 'react'
import { ArrowLeft, type LucideIcon } from 'lucide-react'
import { Badge } from '@/components/common/Badge'
import { Card } from '@/components/common/Card'
import { LinkButton } from '@/components/common/LinkButton'

export interface PlannedFeature {
  title: string
  description: string
}

interface PlaceholderPageProps {
  icon: LucideIcon
  title: string
  description: string
  features: PlannedFeature[]
  /** Optional extra content rendered above the planned-features grid. */
  children?: ReactNode
}

/** Shared layout for pages that are planned but not built in Phase 1. */
export function PlaceholderPage({
  icon: Icon,
  title,
  description,
  features,
  children,
}: PlaceholderPageProps) {
  return (
    <div className="space-y-6">
      <Card className="px-6 py-10 text-center sm:py-14">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
          <Icon className="size-7" aria-hidden />
        </span>
        <div className="mt-5 flex justify-center">
          <Badge tone="brand" dot>
            Coming soon
          </Badge>
        </div>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{title}</h1>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-ink-muted">{description}</p>
        <div className="mt-6 flex justify-center">
          <LinkButton to="/dashboard" variant="secondary" icon={ArrowLeft}>
            Back to dashboard
          </LinkButton>
        </div>
      </Card>

      {children}

      <section aria-label="Planned capabilities">
        <h2 className="mb-3 text-sm font-semibold text-ink">Planned for this area</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title}>
              <Card className="h-full p-5">
                <h3 className="text-sm font-semibold text-ink">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-ink-muted">{feature.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
