import { Radar } from 'lucide-react'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'

export default function RiskRadar() {
  return (
    <PlaceholderPage
      icon={Radar}
      title="AI Risk Radar"
      description="Spot tasks that are likely to be delayed before they become problems. The full risk view isn't built yet; the dashboard shows a sample preview."
      features={[
        {
          title: 'Delay signals',
          description: 'Flag overdue tasks, repeated carry-forwards and missing owners.',
        },
        {
          title: 'Severity levels',
          description: 'Prioritise attention with clear high, medium and low risk ratings.',
        },
        {
          title: 'Explainable reasons',
          description: 'Every flag comes with a plain-language explanation of why.',
        },
      ]}
    />
  )
}
