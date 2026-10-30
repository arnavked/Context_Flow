import { ListChecks } from 'lucide-react'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'

export default function ActionItems() {
  return (
    <PlaceholderPage
      icon={ListChecks}
      title="Action Items"
      description="Every task that comes out of your meetings, with owners, due dates and status in one list. The task board isn't built yet."
      features={[
        {
          title: 'Task lifecycle',
          description: 'Move tasks from open to in progress to completed with a clear history.',
        },
        {
          title: 'Carry-forward',
          description: 'Open tasks roll into the next meeting so nothing gets dropped.',
        },
        {
          title: 'Ownership',
          description: 'Assign, reassign and filter tasks by person, priority or due date.',
        },
      ]}
    />
  )
}
