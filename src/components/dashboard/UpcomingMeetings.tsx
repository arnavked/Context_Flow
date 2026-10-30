import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { Card, CardHeader, CardLink } from '@/components/common/Card'
import { AvatarStack } from '@/components/common/UserAvatar'
import { formatDate, formatTime } from '@/lib/utils'
import type { Meeting } from '@/types'

interface UpcomingMeetingsProps {
  meetings: Meeting[]
}

function participantSummary(meeting: Meeting): string {
  const names = meeting.participants.map((person) => person.name.split(' ')[0])
  const shown = names.slice(0, 3).join(', ')
  const extra = names.length - 3
  return extra > 0 ? `${shown} +${extra}` : shown
}

export function UpcomingMeetings({ meetings }: UpcomingMeetingsProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader
        title="Upcoming Meetings"
        description="Your next scheduled meetings"
        action={<CardLink to="/meetings">View all</CardLink>}
      />
      <ul className="flex-1 space-y-1 p-2">
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            <Link
              to="/meetings"
              className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-canvas"
            >
              <span className="flex size-12 shrink-0 flex-col items-center justify-center rounded-lg bg-brand-soft text-brand">
                <span className="text-[10px] font-semibold uppercase leading-none tracking-wide">
                  {formatDate(meeting.startsAt, { month: 'short' })}
                </span>
                <span className="mt-0.5 text-lg font-semibold leading-none">
                  {formatDate(meeting.startsAt, { day: 'numeric' })}
                </span>
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-ink">
                  {meeting.title}
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
                  <Clock className="size-3.5 shrink-0" aria-hidden />
                  {formatDate(meeting.startsAt)} · {formatTime(meeting.startsAt)}
                </span>
                <span className="mt-0.5 block truncate text-xs text-ink-muted">
                  {participantSummary(meeting)}
                </span>
              </span>

              <AvatarStack users={meeting.participants} className="hidden sm:flex" />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
