import { CalendarDays } from 'lucide-react'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'

export default function Meetings() {
  return (
    <PlaceholderPage
      icon={CalendarDays}
      title="Meetings"
      description="Schedule meetings, capture notes and keep a searchable record of every discussion. Creating and managing meetings isn't built yet."
      features={[
        {
          title: 'Meeting management',
          description: 'Create meetings, invite participants and track attendance in one place.',
        },
        {
          title: 'AI meeting summaries',
          description: 'Generate a recap with the key decisions after each meeting.',
        },
        {
          title: 'Action item extraction',
          description: 'Turn discussion points into assigned tasks automatically.',
        },
      ]}
    />
  )
}
