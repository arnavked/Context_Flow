export interface User {
  id: string
  name: string
  email: string
  role: string
  /** Hex colour used for the initials avatar. */
  avatarColor: string
}

export interface Meeting {
  id: string
  title: string
  /** ISO 8601 date-time. */
  startsAt: string
  participants: User[]
}

export type TaskStatus = 'open' | 'in_progress' | 'completed'
export type TaskPriority = 'high' | 'medium' | 'low'

export interface ActionItem {
  id: string
  title: string
  assignee: User
  /** ISO 8601 date (YYYY-MM-DD) or date-time. */
  dueDate: string
  status: TaskStatus
  priority: TaskPriority
}

export type RiskSeverity = 'high' | 'medium' | 'low'

export interface Risk {
  id: string
  taskId: string
  taskTitle: string
  severity: RiskSeverity
  reason: string
}

export type ActivityKind =
  | 'task_created'
  | 'task_completed'
  | 'task_reassigned'
  | 'recap_updated'

export interface Activity {
  id: string
  actor: User
  kind: ActivityKind
  /** Verb phrase, e.g. "created the task". */
  action: string
  /** The thing acted on, e.g. a task or meeting title. */
  target: string
  /** ISO 8601 date-time. */
  timestamp: string
}

export interface DashboardStats {
  totalMeetings: number
  openTasks: number
  atRiskTasks: number
  completedTasks: number
}

export interface AppNotification {
  id: string
  title: string
  description: string
  /** ISO 8601 date-time. */
  timestamp: string
  read: boolean
}
