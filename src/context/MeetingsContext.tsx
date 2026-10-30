import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { MeetingRecord } from '@/types/meeting'

interface MeetingsContextValue { meetings: MeetingRecord[]; addMeeting: (meeting: Omit<MeetingRecord, 'id'>) => MeetingRecord }
const MeetingsContext = createContext<MeetingsContextValue | null>(null)
export function MeetingsProvider({ children }: { children: ReactNode }) {
  const [meetings, setMeetings] = useState<MeetingRecord[]>([])
  const value = useMemo<MeetingsContextValue>(() => ({ meetings, addMeeting: (meeting) => {
    const created = { ...meeting, id: globalThis.crypto?.randomUUID?.() ?? `meeting-${Date.now()}-${Math.random().toString(36).slice(2)}` }
    setMeetings((current) => [created, ...current]); return created
  } }), [meetings])
  return <MeetingsContext.Provider value={value}>{children}</MeetingsContext.Provider>
}
export function useMeetings() { const value = useContext(MeetingsContext); if (!value) throw new Error('useMeetings must be used inside MeetingsProvider'); return value }
