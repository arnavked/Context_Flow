import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Badge, type BadgeTone } from '@/components/common/Badge'
import { Card, CardHeader, CardLink } from '@/components/common/Card'
import type { Risk, RiskSeverity } from '@/types'

const severityTone: Record<RiskSeverity, BadgeTone> = {
  high: 'danger',
  medium: 'warning',
  low: 'success',
}

const severityLabel: Record<RiskSeverity, string> = {
  high: 'High risk',
  medium: 'Medium risk',
  low: 'Low risk',
}

interface RiskRadarPreviewProps {
  risks: Risk[]
}

export function RiskRadarPreview({ risks }: RiskRadarPreviewProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader
        title="AI Risk Radar"
        description="Tasks most likely to be delayed"
        action={<CardLink to="/risk-radar">View all</CardLink>}
      />
      <ul className="flex-1 space-y-3 p-5">
        {risks.map((risk) => (
          <li key={risk.id} className="rounded-lg border border-line p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-ink">{risk.taskTitle}</h3>
              <Badge tone={severityTone[risk.severity]} dot>
                {severityLabel[risk.severity]}
              </Badge>
            </div>
            <p className="mt-1.5 text-sm text-ink-muted">{risk.reason}</p>
            <Link
              to={`/action-items?task=${risk.taskId}`}
              className="mt-3 inline-flex items-center gap-1 rounded text-sm font-medium text-brand transition-colors hover:text-brand-hover"
            >
              View Task
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
