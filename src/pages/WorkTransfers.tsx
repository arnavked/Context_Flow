import { ArrowRightLeft } from 'lucide-react'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'

export default function WorkTransfers() {
  return (
    <PlaceholderPage
      icon={ArrowRightLeft}
      title="Work Transfers"
      description="Hand over responsibilities cleanly when someone changes role or goes on leave. Creating work transfers isn't built yet."
      features={[
        {
          title: 'Structured handover',
          description: 'Move open tasks and responsibilities from one person to another.',
        },
        {
          title: 'AI catch-up briefs',
          description: 'Give the new owner a summary of context, decisions and pending work.',
        },
        {
          title: 'Transfer history',
          description: 'Keep a record of who handed what to whom, and when.',
        },
      ]}
    />
  )
}
