import { ArrowRightLeft, CircleCheck, ClipboardPlus, FileText, type LucideIcon } from 'lucide-react'
import { Card, CardHeader } from '@/components/common/Card'
import { UserAvatar } from '@/components/common/UserAvatar'
import { cn, formatRelativeTime } from '@/lib/utils'
import type { Activity, ActivityKind } from '@/types'

const kindIcon: Record<ActivityKind, LucideIcon> = {
  task_created: ClipboardPlus,
  task_completed: CircleCheck,
  task_reassigned: ArrowRightLeft,
  recap_updated: FileText,
}

interface RecentActivityProps {
  activity: Activity[]
}

export function RecentActivity({ activity }: RecentActivityProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader title="Recent Activity" description="What your team has been up to" />
      <ol className="flex-1 p-5">
        {activity.map((item, index) => {
          const Icon = kindIcon[item.kind]
          const isLast = index === activity.length - 1
          return (
            <li key={item.id} className={cn('relative flex gap-3', !isLast && 'pb-5')}>
              {!isLast && (
                <span className="absolute bottom-0 left-4 top-9 w-px bg-line" aria-hidden />
              )}
              <UserAvatar user={item.actor} />
              <div className="min-w-0 pt-0.5">
                <p className="text-sm text-ink">
                  <span className="font-semibold">{item.actor.name.split(' ')[0]}</span>{' '}
                  {item.action} <span className="font-semibold">{item.target}</span>
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-muted">
                  <Icon className="size-3.5" aria-hidden />
                  <time dateTime={item.timestamp}>{formatRelativeTime(item.timestamp)}</time>
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </Card>
  )
}
