/**
 * SAMPLE DEMONSTRATION DATA.
 *
 * Everything in this file is hard-coded placeholder content used to render the
 * Phase 1 dashboard. It is typed so it can be swapped for real API responses
 * later without touching the components.
 */
import type {
  Activity,
  ActionItem,
  AppNotification,
  DashboardStats,
  Meeting,
  Risk,
  User,
} from '@/types'

const minutesAgo = (minutes: number): string =>
  new Date(Date.now() - minutes * 60_000).toISOString()

export const currentUser: User = {
  id: 'u-amit',
  name: 'Amit Sharma',
  email: 'amit.sharma@contextflow.demo',
  role: 'Engineering Manager',
  avatarColor: '#2459A6',
}

const rahul: User = {
  id: 'u-rahul',
  name: 'Rahul Verma',
  email: 'rahul.verma@contextflow.demo',
  role: 'Backend Engineer',
  avatarColor: '#0E7A5B',
}

const priya: User = {
  id: 'u-priya',
  name: 'Priya Nair',
  email: 'priya.nair@contextflow.demo',
  role: 'Frontend Engineer',
  avatarColor: '#7C3AED',
}

const neha: User = {
  id: 'u-neha',
  name: 'Neha Kapoor',
  email: 'neha.kapoor@contextflow.demo',
  role: 'QA Engineer',
  avatarColor: '#BE123C',
}

const karan: User = {
  id: 'u-karan',
  name: 'Karan Mehta',
  email: 'karan.mehta@contextflow.demo',
  role: 'Product Manager',
  avatarColor: '#B45309',
}

const sneha: User = {
  id: 'u-sneha',
  name: 'Sneha Iyer',
  email: 'sneha.iyer@contextflow.demo',
  role: 'Designer',
  avatarColor: '#0F766E',
}

export const dashboardStats: DashboardStats = {
  totalMeetings: 12,
  openTasks: 24,
  atRiskTasks: 3,
  completedTasks: 18,
}

export const risks: Risk[] = [
  {
    id: 'r-1',
    taskId: 't-101',
    taskTitle: 'Payment API Investigation',
    severity: 'high',
    reason: 'Overdue by two days.',
  },
  {
    id: 'r-2',
    taskId: 't-205',
    taskTitle: 'Database Migration',
    severity: 'medium',
    reason: 'Carried forward three times.',
  },
  {
    id: 'r-3',
    taskId: 't-206',
    taskTitle: 'Documentation Update',
    severity: 'medium',
    reason: 'No owner assigned.',
  },
]

export const upcomingMeetings: Meeting[] = [
  {
    id: 'm-1',
    title: 'Backend Issue Discussion',
    startsAt: '2026-10-30T10:00:00',
    participants: [rahul, priya, neha, currentUser, karan],
  },
  {
    id: 'm-2',
    title: 'Sprint Planning',
    startsAt: '2026-10-31T14:00:00',
    participants: [currentUser, karan, rahul, priya, neha, sneha],
  },
  {
    id: 'm-3',
    title: 'Payment Review',
    startsAt: '2026-11-02T11:00:00',
    participants: [rahul, currentUser, karan],
  },
]

export const pendingTasks: ActionItem[] = [
  {
    id: 't-101',
    title: 'Investigate Payment API',
    assignee: rahul,
    dueDate: '2026-11-02',
    status: 'in_progress',
    priority: 'high',
  },
  {
    id: 't-102',
    title: 'Frontend Error Handling',
    assignee: priya,
    dueDate: '2026-11-03',
    status: 'open',
    priority: 'medium',
  },
  {
    id: 't-103',
    title: 'Prepare Testing Report',
    assignee: neha,
    dueDate: '2026-11-04',
    status: 'open',
    priority: 'medium',
  },
]

export const recentActivity: Activity[] = [
  {
    id: 'a-1',
    actor: rahul,
    kind: 'task_created',
    action: 'created the task',
    target: 'Payment API Investigation',
    timestamp: minutesAgo(12),
  },
  {
    id: 'a-2',
    actor: priya,
    kind: 'task_completed',
    action: 'completed',
    target: 'Frontend Testing',
    timestamp: minutesAgo(47),
  },
  {
    id: 'a-3',
    actor: currentUser,
    kind: 'task_reassigned',
    action: 'reassigned the action item',
    target: 'Prepare Testing Report',
    timestamp: minutesAgo(3 * 60),
  },
  {
    id: 'a-4',
    actor: neha,
    kind: 'recap_updated',
    action: 'updated the meeting recap for',
    target: 'Backend Issue Discussion',
    timestamp: minutesAgo(26 * 60),
  },
]

export const notifications: AppNotification[] = [
  {
    id: 'n-1',
    title: 'Payment API Investigation is overdue',
    description: 'Flagged by AI Risk Radar as high risk.',
    timestamp: minutesAgo(25),
    read: false,
  },
  {
    id: 'n-2',
    title: 'Sprint Planning starts tomorrow',
    description: '31 October at 2:00 PM with 6 participants.',
    timestamp: minutesAgo(2 * 60),
    read: false,
  },
  {
    id: 'n-3',
    title: 'Priya completed Frontend Testing',
    description: 'The task was marked as completed.',
    timestamp: minutesAgo(5 * 60),
    read: true,
  },
]
