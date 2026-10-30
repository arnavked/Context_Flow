import { ArrowRightLeft, CalendarDays, CircleCheck, Info, ListChecks, Plus, TriangleAlert } from 'lucide-react'
import { LinkButton } from '@/components/common/LinkButton'
import { MyTasks } from '@/components/dashboard/MyTasks'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { RiskRadarPreview } from '@/components/dashboard/RiskRadarPreview'
import { StatCard, type StatTone } from '@/components/dashboard/StatCard'
import { UpcomingMeetings } from '@/components/dashboard/UpcomingMeetings'
import {
  currentUser,
  dashboardStats,
  pendingTasks,
  recentActivity,
  risks,
  upcomingMeetings,
} from '@/data/dashboard'
import type { LucideIcon } from 'lucide-react'
import type { DashboardStats } from '@/types'

interface StatConfig {
  key: keyof DashboardStats
  label: string
  description: string
  icon: LucideIcon
  tone: StatTone
}

const statConfigs: StatConfig[] = [
  {
    key: 'totalMeetings',
    label: 'Total Meetings',
    description: 'Held and scheduled this month',
    icon: CalendarDays,
    tone: 'brand',
  },
  {
    key: 'openTasks',
    label: 'Open Tasks',
    description: 'Waiting on your team',
    icon: ListChecks,
    tone: 'warning',
  },
  {
    key: 'atRiskTasks',
    label: 'At-Risk Tasks',
    description: 'May slip without attention',
    icon: TriangleAlert,
    tone: 'danger',
  },
  {
    key: 'completedTasks',
    label: 'Completed Tasks',
    description: 'Finished this month',
    icon: CircleCheck,
    tone: 'success',
  },
]

export default function Dashboard() {
  const firstName = currentUser.name.split(' ')[0]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink">
            Good morning, {firstName}
          </h1>
          <p className="mt-1 text-sm text-ink-muted">
            Here&apos;s what&apos;s happening with your team today.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <LinkButton to="/meetings" icon={Plus}>
            Create Meeting
          </LinkButton>
          <LinkButton to="/work-transfers" variant="secondary" icon={ArrowRightLeft}>
            Create Work Transfer
          </LinkButton>
        </div>
      </div>

      <div
        role="note"
        className="flex items-start gap-2.5 rounded-lg border border-brand/15 bg-brand-soft px-4 py-2.5 text-sm text-brand"
      >
        <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
        <p>
          You&apos;re viewing sample demonstration data. Live data will appear once the backend is
          connected.
        </p>
      </div>

      <section aria-label="Key statistics" className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statConfigs.map(({ key, ...config }) => (
          <StatCard key={key} value={dashboardStats[key]} {...config} />
        ))}
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <RiskRadarPreview risks={risks} />
        <UpcomingMeetings meetings={upcomingMeetings} />
        <MyTasks tasks={pendingTasks} />
        <RecentActivity activity={recentActivity} />
      </div>
    </div>
  )
}
