import { Calendar } from 'lucide-react'
import { Badge, type BadgeTone } from '@/components/common/Badge'
import { Card, CardHeader, CardLink } from '@/components/common/Card'
import { UserAvatar } from '@/components/common/UserAvatar'
import { formatDate } from '@/lib/utils'
import type { ActionItem, TaskPriority, TaskStatus } from '@/types'

const statusTone: Record<TaskStatus, BadgeTone> = {
  open: 'neutral',
  in_progress: 'brand',
  completed: 'success',
}

const statusLabel: Record<TaskStatus, string> = {
  open: 'Open',
  in_progress: 'In Progress',
  completed: 'Completed',
}

const priorityTone: Record<TaskPriority, BadgeTone> = {
  high: 'danger',
  medium: 'warning',
  low: 'neutral',
}

const priorityLabel: Record<TaskPriority, string> = {
  high: 'High priority',
  medium: 'Medium priority',
  low: 'Low priority',
}

interface MyTasksProps {
  tasks: ActionItem[]
}

export function MyTasks({ tasks }: MyTasksProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader
        title="My Pending Tasks"
        description="Action items that still need attention"
        action={<CardLink to="/action-items">View all</CardLink>}
      />
      <ul className="flex-1 divide-y divide-line px-5">
        {tasks.map((task) => (
          <li key={task.id} className="py-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-ink">{task.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                <Badge tone={statusTone[task.status]}>{statusLabel[task.status]}</Badge>
                <Badge tone={priorityTone[task.priority]} dot>
                  {priorityLabel[task.priority]}
                </Badge>
              </div>
            </div>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-ink-muted">
              <span className="flex items-center gap-2">
                <UserAvatar user={task.assignee} size="sm" />
                {task.assignee.name.split(' ')[0]}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5" aria-hidden />
                Due {formatDate(task.dueDate)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
