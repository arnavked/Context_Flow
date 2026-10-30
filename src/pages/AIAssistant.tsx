import { Sparkles } from 'lucide-react'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'

export default function AIAssistant() {
  return (
    <PlaceholderPage
      icon={Sparkles}
      title="AI Assistant"
      description="Ask questions about meetings, decisions and tasks and get answers grounded in your team's own context. The assistant isn't connected yet."
      features={[
        {
          title: 'Catch-up briefs',
          description: 'Get a short summary of what you missed while you were away.',
        },
        {
          title: 'Ask your workspace',
          description: 'Question past meetings and decisions in plain language.',
        },
        {
          title: 'Draft follow-ups',
          description: 'Turn a discussion into clear next steps for the team.',
        },
      ]}
    />
  )
}
