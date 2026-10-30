export type MeetingType = 'Team Meeting' | 'Project Review' | 'Sprint Planning' | 'Client Meeting' | 'Technical Discussion' | 'Other'
export type MeetingStatus = 'upcoming' | 'completed'
export interface MeetingRecord {
  id: string; title: string; startsAt: string; type: MeetingType; participants: string[]; agenda: string
  transcript: string; transcriptKind: 'transcript' | 'notes' | 'file' | null; summary: string; decisions: string[]
  actionItems: { title: string; owner: string; dueDate: string; quote: string; approved: boolean }[]
}
